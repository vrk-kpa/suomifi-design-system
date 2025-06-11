import { createRef, useEffect, useRef, useState } from 'react';
import {
  Block,
  Button,
  HintText,
  Label,
  Textarea,
  TextInput,
  Toast,
  IconPlus,
  IconRemove,
} from 'suomifi-ui-components';
import styles from './MultiInsert.module.scss';
import { useTranslation } from 'next-export-i18n';

interface MultiInsertItem {
  id: number;
  nameInputRef: React.RefObject<HTMLInputElement>;
  addressInputRef: React.RefObject<HTMLTextAreaElement>;
  descriptionInputRef: React.RefObject<HTMLTextAreaElement>;
  nameError: boolean;
  addressError: boolean;
  removeButtonRef: React.RefObject<HTMLButtonElement>;
}

interface ToastText {
  text?: string;
  id: number;
}

// Custom hook used to store the previous value of a piece of state
const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const MultiInsert: React.FC = () => {
  const { t } = useTranslation();
  const [websites, setWebsites] = useState<MultiInsertItem[]>([]);
  const [multiInsertItemID, setMultiInsertItemID] = useState(1);
  const [formInvalid, setFormInvalid] = useState(false);
  const [toasts, setToasts] = useState<ToastText[]>([]);
  const addNewButtonRef = useRef<HTMLButtonElement>(null);
  const prevWebsites = usePrevious(websites);

  // When a new MultiInsert item is added, this hook is used to set focus to it
  useEffect(() => {
    if (
      websites.length > 0 &&
      prevWebsites !== undefined &&
      prevWebsites.length < websites.length
    ) {
      websites[websites.length - 1].nameInputRef.current?.focus();
    }
  }, [prevWebsites, websites]);
  // When a website is removed, check if the form has become valid
  useEffect(() => {
    if (
      websites.length === 0 ||
      (websites.length > 0 &&
        prevWebsites !== undefined &&
        prevWebsites.length > websites.length &&
        websites.some(
          (website) =>
            website.nameInputRef.current?.value === '' ||
            website.addressInputRef.current?.value === '',
        ))
    ) {
      setFormInvalid(true);
    }
  }, [prevWebsites, websites]);

  const addWebsite = () => {
    const newWebsite = {
      id: multiInsertItemID,
      nameInputRef: createRef<HTMLInputElement>(),
      addressInputRef: createRef<HTMLTextAreaElement>(),
      descriptionInputRef: createRef<HTMLTextAreaElement>(),
      nameError: false,
      addressError: false,
      removeButtonRef: createRef<HTMLButtonElement>(),
    };
    setWebsites((current) => [...current, newWebsite]);
    setMultiInsertItemID(multiInsertItemID + 1);
    setFormInvalid(true);
  };
  const removeWebsite = (id: number) => {
    const indexOfRemovedItem = websites.findIndex(
      (website) => website.id === id,
    );
    // If there is only one item in the array, set focus to the add new button
    if (websites.length === 1) {
      addNewButtonRef.current?.focus();
      // Else, if the removed item was the last item, set focus to the previous one
    } else if (indexOfRemovedItem === websites.length - 1) {
      websites[indexOfRemovedItem - 1].nameInputRef.current?.focus();
      // Else  set focus to the next element
    } else {
      websites[indexOfRemovedItem + 1].nameInputRef.current?.focus();
    }

    // Removed websites are preferably announced with their title
    // If title is not present, pass text as undefined
    const toastText: string | undefined =
      websites[indexOfRemovedItem].nameInputRef.current?.value;
    flashToast(toastText, websites[indexOfRemovedItem].id);
    setWebsites(websites.filter((website) => website.id !== id));
  };

  const toggleInputErrorState = (
    status: boolean,
    id: number,
    inputField: 'name' | 'address',
  ) => {
    switch (inputField) {
      case 'name':
        setWebsites(
          websites.map((website) =>
            website.id === id ? { ...website, nameError: status } : website,
          ),
        );
        break;
      case 'address':
        setWebsites(
          websites.map((website) =>
            website.id === id ? { ...website, addressError: status } : website,
          ),
        );
        break;
      default:
        break;
    }
  };

  const checkWebsitesValidity = () => {
    setFormInvalid(
      websites.some(
        (website) =>
          website.nameInputRef.current?.value === '' ||
          website.addressInputRef.current?.value === '',
      ),
    );
  };

  const flashToast = (toastName: string | undefined, id: number) => {
    setToasts((current) => [...current, { text: toastName, id: id }]);
    setTimeout(() => {
      setToasts((current) => {
        return current.filter((t) => t.id !== id);
      });
    }, 5000);
  };

  const save = () => {
    // Remove possible empty website entries
    const validWebsites = websites.filter(
      (website) =>
        website.nameInputRef.current?.value !== '' ||
        website.addressInputRef.current?.value !== '' ||
        website.descriptionInputRef.current?.value !== '',
    );
    if (validWebsites.length === 0) {
      alert(
        t('multi-insert.reference_implementation.add_at_least_one_website'),
      );
      return;
    }

    console.log(
      websites.map((website) => {
        return {
          name: website.nameInputRef.current?.value,
          address: website.addressInputRef.current?.value,
          description: website.descriptionInputRef.current?.value,
        };
      }),
    );
  };

  return (
    <>
      <div
        className={styles['toast-container']}
        aria-live="polite"
        aria-atomic="true"
      >
        {toasts.map((toast) =>
          // Removed websites are preferably announced with their title
          // If module had any text in the "Website name" field, toast.text value is present
          toast.text ? (
            <Toast key={toast.id} mb="s">
              {t(
                'multi-insert.reference_implementation.named_website_removed',
                { website_name: toast.text },
              )}
            </Toast>
          ) : (
            // Websites without a title are announced more generally
            <Toast key={toast.id} mb="s">
              {t(
                'multi-insert.reference_implementation.nameless_website_removed',
              )}
            </Toast>
          ),
        )}
      </div>
      <Block variant="div">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            save();
          }}
        >
          <section>
            <Block
              className={styles['multi-insert']}
              role="group"
              aria-describedby="websites-heading"
            >
              <Label
                asProp="h1"
                className={styles['multi-insert_label']}
                id="websites-heading"
              >
                {t('multi-insert.reference_implementation.website')}
              </Label>
              <Block mb="s">
                <HintText>
                  {t(
                    'multi-insert.reference_implementation.you_can_add_multiple_websites',
                  )}
                </HintText>
              </Block>
              {websites.map((website) => (
                <Block className={styles['multi-insert_box']} key={website.id}>
                  <Block className={styles['multi-insert_content']}>
                    <Block>
                      <TextInput
                        fullWidth
                        labelText={t(
                          'multi-insert.reference_implementation.website_name',
                        )}
                        hintText={t(
                          'multi-insert.reference_implementation.website_name_hint_text',
                        )}
                        visualPlaceholder={t(
                          'multi-insert.reference_implementation.website_name_placeholder',
                        )}
                        className={styles['multi-insert-input']}
                        ref={website.nameInputRef}
                        status={website.nameError ? 'error' : 'default'}
                        statusText={
                          website.nameError
                            ? t(
                                'multi-insert.reference_implementation.website_name_is_required',
                              )
                            : ''
                        }
                        onBlur={(event) => {
                          if (event.target.value === '') {
                            toggleInputErrorState(true, website.id, 'name');
                          }
                        }}
                        onChange={(value) => {
                          checkWebsitesValidity();
                          if (value !== '' && website.nameError) {
                            toggleInputErrorState(false, website.id, 'name');
                          }
                        }}
                      />
                    </Block>
                    <Block mt="l">
                      <Textarea
                        fullWidth
                        labelText={t(
                          'multi-insert.reference_implementation.website_address',
                        )}
                        hintText={t(
                          'multi-insert.reference_implementation.website_address_hint_text',
                        )}
                        visualPlaceholder={t(
                          'multi-insert.reference_implementation.website_address_placeholder',
                        )}
                        className={styles['multi-insert-input']}
                        ref={website.addressInputRef}
                        status={website.addressError ? 'error' : 'default'}
                        statusText={
                          website.addressError
                            ? t(
                                'multi-insert.reference_implementation.website_address_is_required',
                              )
                            : ''
                        }
                        onBlur={(event) => {
                          if (event.target.value === '') {
                            toggleInputErrorState(true, website.id, 'address');
                          }
                        }}
                        onChange={(event) => {
                          checkWebsitesValidity();
                          if (
                            event.target.value !== '' &&
                            website.addressError
                          ) {
                            toggleInputErrorState(false, website.id, 'address');
                          }
                        }}
                      ></Textarea>
                    </Block>
                    <Block mt="l">
                      <Textarea
                        fullWidth
                        labelText={t(
                          'multi-insert.reference_implementation.website_description',
                        )}
                        hintText={t(
                          'multi-insert.reference_implementation.website_description_hint_text',
                        )}
                        visualPlaceholder={t(
                          'multi-insert.reference_implementation.website_description_placeholder',
                        )}
                        className={styles['multi-insert-input']}
                        optionalText={t(
                          'multi-insert.reference_implementation.optional',
                        )}
                        ref={website.descriptionInputRef}
                      ></Textarea>
                    </Block>
                  </Block>
                  <Block className={styles['multi-insert-input']}>
                    <Button
                      variant="secondaryNoBorder"
                      icon={<IconRemove />}
                      onClick={() => removeWebsite(website.id)}
                      ref={website.removeButtonRef}
                      aria-label={
                        website.nameInputRef.current?.value !== ''
                          ? t(
                              'multi-insert.reference_implementation.remove_named_website',
                              {
                                website_name:
                                  website.nameInputRef.current?.value,
                              },
                            )
                          : t(
                              'multi-insert.reference_implementation.remove_nameless_website',
                            )
                      }
                    >
                      {t('multi-insert.reference_implementation.remove')}
                    </Button>
                  </Block>
                </Block>
              ))}
              <Button
                variant="secondary"
                icon={<IconPlus />}
                onClick={() => addWebsite()}
                ref={addNewButtonRef}
              >
                {t('multi-insert.reference_implementation.add_new_website')}
              </Button>
            </Block>
          </section>

          <Block mt="xl">
            <Button type="submit" disabled={formInvalid}>
              Tallenna
            </Button>
          </Block>
        </form>
      </Block>
    </>
  );
};
