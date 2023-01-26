import { createRef, useEffect, useRef, useState } from 'react';
import {
  Block,
  Button,
  HintText,
  Label,
  Textarea,
  TextInput,
  Toast,
} from 'suomifi-ui-components';
import styles from './MultiInsert.module.scss';

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
  text: string;
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
  const [websites, setWebsites] = useState<MultiInsertItem[]>([]);
  const [multiInsertItemID, setMultiInsertItemID] = useState(1);
  const [formInvalid, setFormInvalid] = useState(false);
  const [toasts, setToasts] = useState<ToastText[]>([]);
  // const toastsRef = useRef(new Array());
  const addNewButtonRef = useRef<HTMLButtonElement>(null);
  let prevWebsites = usePrevious(websites);

  // When a new MultiInsert item is added, this hook is used to set focus to it
  useEffect(() => {
    if (
      websites.length > 0 &&
      prevWebsites !== undefined &&
      prevWebsites.length < websites.length
    ) {
      websites[websites.length - 1].nameInputRef.current?.focus();
    }
  }, [websites]);
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
  }, [websites]);

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
    // If title is not present, pass the ID of the element to the list of toasts
    let toastText = websites[indexOfRemovedItem].nameInputRef.current?.value;
    if (!toastText) {
      toastText = String(websites[indexOfRemovedItem].id);
    }
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

  const flashToast = (toastName: string, id: number) => {
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
      alert('Lisää vähintään yksi verkkosivu!');
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
      <div className={styles['toast-container']}>
        {toasts.map((toast) =>
          // Removed websites are preferably announced with their title
          isNaN(+toast.text) ? (
            <Block mb="s" role="alert">
              <Toast key={toast.id}>Verkkosivu {toast.text} poistettiin</Toast>
            </Block>
          ) : (
            // Websites without a title are announced more generally
            <Block mb="s" role="alert">
              <Toast key={toast.id}>Nimetön verkkosivu poistettiin</Toast>
            </Block>
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
                Verkkosivu
              </Label>
              <Block mb="s">
                <HintText>Voit lisätä useita verkkosivuja</HintText>
              </Block>
              {websites.map((website) => (
                <Block className={styles['multi-insert_box']} key={website.id}>
                  <Block className={styles['multi-insert_content']}>
                    <Block>
                      <TextInput
                        fullWidth
                        labelText="Verkkosivun nimi"
                        hintText="Anna verkkosivulle kuvaava yleispätevä nimi"
                        visualPlaceholder="Kirjoita verkkosivun nimi"
                        className={styles['multi-insert-input']}
                        ref={website.nameInputRef}
                        status={website.nameError ? 'error' : 'default'}
                        statusText={
                          website.nameError
                            ? 'Verkkosivun nimi on pakollinen tieto'
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
                    <Block mt="xxl">
                      <Textarea
                        fullWidth
                        hintText="Huolehdi, että verkko-osoitteen alussa on protokollatunniste https:// HUOM: Tee linkki aina verkkoasiointikanavan omaan osoitteeseen, ei esimerkiksi Suomi.fi-tunnistautumiseen."
                        labelText="Verkko-osoite"
                        visualPlaceholder="Kirjoita verkko-osoite"
                        className={styles['multi-insert-input']}
                        ref={website.addressInputRef}
                        status={website.addressError ? 'error' : 'default'}
                        statusText={
                          website.addressError
                            ? 'Verkko-osoite on pakollinen tieto'
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
                    <Block mt="xxl">
                      <Textarea
                        fullWidth
                        hintText="Anna tarvittaessa osoitetta täsmentävä tieto"
                        labelText="Kuvaus"
                        visualPlaceholder="Kirjoita kuvaus"
                        className={styles['multi-insert-input']}
                        optionalText="valinnainen"
                        ref={website.descriptionInputRef}
                      ></Textarea>
                    </Block>
                  </Block>
                  <Block className={styles['multi-insert-input']}>
                    <Button
                      variant="secondaryNoBorder"
                      icon="remove"
                      onClick={() => removeWebsite(website.id)}
                      ref={website.removeButtonRef}
                      aria-label={
                        website.nameInputRef.current?.value !== ''
                          ? `Poista verkkosivu ${website.nameInputRef.current?.value}`
                          : 'Poista nimetön verkkosivu'
                      }
                    >
                      Poista
                    </Button>
                  </Block>
                </Block>
              ))}
              <Button
                variant="secondary"
                icon="plus"
                onClick={() => addWebsite()}
                ref={addNewButtonRef}
              >
                Lisää uusi verkkosivu
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
