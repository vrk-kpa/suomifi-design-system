import React, { useEffect, useRef, useState } from 'react';
import {
  Block,
  Button,
  DateInput,
  HintText,
  StatusText,
  TimeInput,
  autocompleteTimeString,
} from 'suomifi-ui-components';
import { isValid, parse } from 'date-fns';
import { useTranslation } from 'next-export-i18n';

export const Datetime: React.FC = () => {
  const { t } = useTranslation();
  const [dateErrorText, setDateErrorText] = useState('');
  const [timeErrorText, setTimeErrorText] = useState('');

  const [dateValue, setDateValue] = useState('');
  const [timeValue, setTimeValue] = useState('');

  /*
   * These are used to store input values which produced an error
   * so we can check if the value has changed when the input gets
   * focused and blurred next time
   */
  const [invalidDateValue, setInvalidDateValue] = useState('');
  const [invalidTimeValue, setInvalidTimeValue] = useState('');

  const [mobileWidth, setMobileWidth] = useState(false);

  const dateInputRef = useRef<HTMLInputElement>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);

  const fieldsetStyles = {
    padding: 0,
    margin: 0,
    border: 'none',
  };
  const legendStyles = {
    fontWeight: 600,
    fontSize: '18px',
    padding: 0,
    marginBottom: mobileWidth ? 0 : '5px',
  };

  useEffect(() => {
    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);
    return () => window.removeEventListener('resize', checkWindowWidth);
  }, []);

  const checkWindowWidth = () => {
    setMobileWidth(window.innerWidth < 576);
  };

  const isValidTimeString = (timeStr: string) => {
    if (timeStr.match(/^\d{1,2}\.\d{2}$/)) {
      const parts = timeStr.split('.');
      const hours = parseInt(parts[0]);
      const minutes = parseInt(parts[1]);
      if (hours >= 0 && hours < 25 && minutes >= 0 && minutes < 60) {
        return true;
      }
    }
    return false;
  };

  const validateForm = () => {
    let dateErrorMessage = '';
    let timeErrorMessage = '';

    if (dateValue === '') {
      dateErrorMessage = t(
        'datetime.reference_implementation.errors.date_is_mandatory',
      );
    } else if (!dateValue.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/)) {
      dateErrorMessage = t(
        'datetime.reference_implementation.errors.date_incorrect_format',
      );
    } else if (!isValid(parse(dateValue, 'd.M.yyyy', new Date()))) {
      dateErrorMessage = t(
        'datetime.reference_implementation.errors.nonexistent_date',
      );
    } else {
      dateErrorMessage = '';
    }

    if (timeValue === '') {
      timeErrorMessage = t(
        'datetime.reference_implementation.errors.time_is_mandatory',
      );
    } else if (!timeValue.match(/^\d{1,2}\.\d{2}$/)) {
      timeErrorMessage = t(
        'datetime.reference_implementation.errors.time_incorrect_format',
      );
    } else if (!isValidTimeString(timeValue)) {
      timeErrorMessage = t(
        'datetime.reference_implementation.errors.nonexistent_time',
      );
    } else {
      timeErrorMessage = '';
    }

    if (dateErrorMessage !== '') {
      setDateErrorText(dateErrorMessage);
      setInvalidDateValue(dateValue);
      dateInputRef.current?.focus();
    }
    if (timeErrorMessage !== '') {
      setTimeErrorText(timeErrorMessage);
      setInvalidTimeValue(timeValue);
      if (dateErrorMessage === '') {
        timeInputRef.current?.focus();
      }
    }
  };

  return (
    <Block>
      <fieldset style={fieldsetStyles}>
        <legend style={legendStyles}>
          {t('datetime.reference_implementation.publishing_date')}
        </legend>
        {!mobileWidth && (
          <>
            <HintText id="date-hint-text">
              {t('datetime.reference_implementation.date_hint_text')}
            </HintText>
            <HintText id="time-hint-text">
              {t('datetime.reference_implementation.time_hint_text')}
            </HintText>
          </>
        )}
        <Block mt={mobileWidth ? 'xs' : 's'}>
          <DateInput
            style={{ display: mobileWidth ? 'block' : 'inline-block' }}
            labelText={t('datetime.reference_implementation.date_label')}
            datePickerEnabled
            aria-describedby={
              mobileWidth ? undefined : 'date-status-text date-hint-text'
            }
            hintText={
              mobileWidth
                ? t('datetime.reference_implementation.date_hint_text')
                : undefined
            }
            statusText={mobileWidth ? dateErrorText : undefined}
            statusTextAriaLiveMode="off"
            ref={dateInputRef}
            value={dateValue}
            onChange={(newValue) => setDateValue(newValue.value)}
            onBlur={() => {
              if (dateErrorText !== '' && dateValue !== invalidDateValue) {
                setDateErrorText('');
              }
            }}
            onDatePickerButtonBlur={() => {
              if (dateErrorText !== '' && dateValue !== invalidDateValue) {
                setDateErrorText('');
              }
            }}
            status={dateErrorText !== '' ? 'error' : 'default'}
            fullWidth={mobileWidth}
            smallScreen={mobileWidth}
          />
          <TimeInput
            style={{ display: mobileWidth ? 'block' : 'inline-block' }}
            ref={timeInputRef}
            labelText={t('datetime.reference_implementation.time_label')}
            ml={mobileWidth ? undefined : 's'}
            mt={mobileWidth ? 's' : undefined}
            aria-describedby={
              mobileWidth ? undefined : 'time-status-text time-hint-text'
            }
            hintText={
              mobileWidth
                ? t('datetime.reference_implementation.time_hint_text')
                : undefined
            }
            statusText={mobileWidth ? timeErrorText : undefined}
            statusTextAriaLiveMode="off"
            value={timeValue}
            onChange={(newValue) => setTimeValue(newValue)}
            status={timeErrorText !== '' ? 'error' : 'default'}
            onBlur={() => {
              const adjustedValue = autocompleteTimeString(timeValue);
              if (adjustedValue) {
                setTimeValue(adjustedValue);
              }
              if (timeErrorText !== '' && timeValue !== invalidTimeValue) {
                setTimeErrorText('');
              }
            }}
          />
        </Block>
        {!mobileWidth && (
          <>
            <StatusText
              status="error"
              id="date-status-text"
              mt="xxs"
              ariaLiveMode="off"
            >
              {dateErrorText}
            </StatusText>
            <StatusText status="error" id="time-status-text" ariaLiveMode="off">
              {timeErrorText}
            </StatusText>
          </>
        )}
      </fieldset>
      <Button onClick={validateForm} mt="xl">
        {t('datetime.reference_implementation.save')}
      </Button>
    </Block>
  );
};
