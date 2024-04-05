import {
  ErrorSummary,
  TextInput,
  Button,
  Block,
  ErrorSummaryItemProps,
} from 'suomifi-ui-components';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'next-export-i18n';

export const StaticForm: React.FC = () => {
  const { t } = useTranslation();

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
  const [emailAddressErrorMessage, setEmailAddressErrorMessage] = useState('');

  const [errorSummaryItems, setErrorSummaryItems] = useState<
    ErrorSummaryItemProps[]
  >([]);

  const errorSummaryHeadingRef = useRef<HTMLHeadingElement>(null);
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailAddressInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const errorItems = [];
    if (firstNameErrorMessage !== '') {
      errorItems.push({
        text: firstNameErrorMessage,
        inputRef: firstNameInputRef,
      });
    }
    if (lastNameErrorMessage !== '') {
      errorItems.push({
        text: lastNameErrorMessage,
        inputRef: lastNameInputRef,
      });
    }
    if (emailAddressErrorMessage !== '') {
      errorItems.push({
        text: emailAddressErrorMessage,
        inputRef: emailAddressInputRef,
      });
    }
    setErrorSummaryItems(errorItems);
  }, [firstNameErrorMessage, lastNameErrorMessage, emailAddressErrorMessage]);

  const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let firstNameError = '';
    let lastNameError = '';
    let emailAddressError = '';

    if (firstNameInputRef.current?.value === '') {
      firstNameError = t(
        'static_form.reference_implementation.first_name_is_required',
      );
    }
    if (lastNameInputRef.current?.value === '') {
      lastNameError = t(
        'static_form.reference_implementation.last_name_is_required',
      );
    }
    if (emailAddressInputRef.current?.value === '') {
      emailAddressError = t(
        'static_form.reference_implementation.email_address_is_required',
      );
    } else if (!emailRegex.test(emailAddressInputRef.current?.value || '')) {
      emailAddressError = t(
        'static_form.reference_implementation.email_address_is_invalid',
      );
    }

    setFirstNameErrorMessage(firstNameError);
    setLastNameErrorMessage(lastNameError);
    setEmailAddressErrorMessage(emailAddressError);

    if (
      firstNameError !== '' ||
      lastNameError !== '' ||
      emailAddressError !== ''
    ) {
      // Timeout is used to make sure ErrorSummary component has had
      // time to render before focusing on the heading
      setTimeout(() => {
        errorSummaryHeadingRef.current?.focus();
      }, 100);
    }
  };

  return (
    <Block>
      {errorSummaryItems.length > 0 && (
        <ErrorSummary
          headingText={t(
            'static_form.reference_implementation.error_summary_heading',
          )}
          headingVariant="h4"
          headingRef={errorSummaryHeadingRef}
          items={errorSummaryItems}
          mb="xl"
        />
      )}
      <TextInput
        labelText={t('static_form.reference_implementation.first_name')}
        id="first-name"
        status={firstNameErrorMessage !== '' ? 'error' : 'default'}
        statusText={firstNameErrorMessage}
        statusTextAriaLiveMode="off"
        ref={firstNameInputRef}
        mb="l"
      />
      <TextInput
        labelText={t('static_form.reference_implementation.last_name')}
        id="last-name"
        status={lastNameErrorMessage !== '' ? 'error' : 'default'}
        statusText={lastNameErrorMessage}
        statusTextAriaLiveMode="off"
        ref={lastNameInputRef}
        mb="l"
      />
      <TextInput
        labelText={t('static_form.reference_implementation.email_address')}
        id="email-address"
        status={emailAddressErrorMessage !== '' ? 'error' : 'default'}
        statusText={emailAddressErrorMessage}
        statusTextAriaLiveMode="off"
        ref={emailAddressInputRef}
        mb="l"
      />
      <Button onClick={validateForm}>
        {t('static_form.reference_implementation.submit')}
      </Button>
    </Block>
  );
};
