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
import { isValid, parse, isBefore } from 'date-fns';
import { useTranslation } from 'next-export-i18n';

export const DoubleDatetime: React.FC = () => {
  const { t } = useTranslation();

  const [beginningDateErrorText, setBeginningDateErrorText] = useState('');
  const [endingDateErrorText, setEndingDateErrorText] = useState('');
  const [beginningTimeErrorText, setBeginningTimeErrorText] = useState('');
  const [endingTimeErrorText, setEndingTimeErrorText] = useState('');

  const [beginningDateValue, setBeginningDateValue] = useState('');
  const [endingDateValue, setEndingDateValue] = useState('');
  const [beginningTimeValue, setBeginningTimeValue] = useState('');
  const [endingTimeValue, setEndingTimeValue] = useState('');

  /*
   * These are used to store input values which produced an error
   * so we can check if the value has changed when the input gets
   * focused and blurred next time
   */
  const [invalidBeginningDateValue, setInvalidBeginningDateValue] =
    useState('');
  const [invalidEndingDateValue, setInvalidEndingDateValue] = useState('');
  const [invalidBeginningTimeValue, setInvalidBeginningTimeValue] =
    useState('');
  const [invalidEndingTimeValue, setInvalidEndingTimeValue] = useState('');

  const [mobileWidth, setMobileWidth] = useState(false);

  const beginningDateInputRef = useRef<HTMLInputElement>(null);
  const endingDateInputRef = useRef<HTMLInputElement>(null);
  const beginningTimeInputRef = useRef<HTMLInputElement>(null);
  const endingTimeInputRef = useRef<HTMLInputElement>(null);

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

  /**
   * @param dateValue date valus as string
   * @param type 'being' or 'end'. Determines which date is being validated and affects error message wording
   * @returns An error message or '' if date is valid
   */
  const validateDate = (dateValue: string, type: 'begin' | 'end'): string => {
    if (dateValue === '') {
      return type === 'begin'
        ? t(
            'datetime.reference_implementation.errors.beginning_date_is_mandatory',
          )
        : t(
            'datetime.reference_implementation.errors.ending_date_is_mandatory',
          );
    }
    if (!dateValue.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/)) {
      return type === 'begin'
        ? t(
            'datetime.reference_implementation.errors.beginning_date_incorrect_format',
          )
        : t(
            'datetime.reference_implementation.errors.ending_date_incorrect_format',
          );
    }
    if (!isValid(parse(dateValue, 'd.M.yyyy', new Date()))) {
      return type === 'begin'
        ? t(
            'datetime.reference_implementation.errors.nonexistent_beginning_date',
          )
        : t('datetime.reference_implementation.errors.nonexistent_ending_date');
    }
    return '';
  };

  /**
   * @param timeValue time value as string
   * @param type 'being' or 'end'. Determines which time is being validated and affects error message wording
   * @returns An error message or '' if time is valid
   */
  const validateTime = (timeValue: string, type: 'begin' | 'end'): string => {
    if (timeValue === '') {
      return type === 'begin'
        ? t(
            'datetime.reference_implementation.errors.beginning_time_is_mandatory',
          )
        : t(
            'datetime.reference_implementation.errors.ending_time_is_mandatory',
          );
    }
    if (!timeValue.match(/^\d{1,2}\.\d{2}$/)) {
      return type === 'begin'
        ? t(
            'datetime.reference_implementation.errors.beginning_time_incorrect_format',
          )
        : t(
            'datetime.reference_implementation.errors.ending_time_incorrect_format',
          );
    }
    if (!isValidTimeString(timeValue)) {
      return type === 'begin'
        ? t(
            'datetime.reference_implementation.errors.nonexistent_beginning_time',
          )
        : t('datetime.reference_implementation.errors.nonexistent_ending_time');
    }
    return '';
  };

  const validateForm = () => {
    const beginningDateErrorMessage = validateDate(beginningDateValue, 'begin');
    let endingDateErrorMessage = validateDate(endingDateValue, 'end');
    const beginningTimeErrorMessage = validateTime(beginningTimeValue, 'begin');
    let endingTimeErrorMessage = validateTime(endingTimeValue, 'end');

    // Check that ending time is not before beginning time
    if (
      beginningDateErrorMessage === '' &&
      beginningTimeErrorMessage === '' &&
      endingDateErrorMessage === '' &&
      endingTimeErrorMessage === ''
    ) {
      const combinedBeginningDateTime = `${beginningDateValue} ${beginningTimeValue}`;
      const combinedEndingDateTime = `${endingDateValue} ${endingTimeValue}`;

      const parsedBeginningDateTime = parse(
        combinedBeginningDateTime,
        'dd.MM.yyyy H.mm',
        new Date(),
      );
      const parsedBeginningDate = parse(
        beginningDateValue,
        'dd.MM.yyyy',
        new Date(),
      );
      const parsedEndingDateTime = parse(
        combinedEndingDateTime,
        'dd.MM.yyyy H.mm',
        new Date(),
      );
      const parsedEndingDate = parse(endingDateValue, 'dd.MM.yyyy', new Date());

      if (isBefore(parsedEndingDateTime, parsedBeginningDateTime)) {
        if (isBefore(parsedEndingDate, parsedBeginningDate)) {
          endingDateErrorMessage = t(
            'datetime.reference_implementation.errors.end_before_beginning',
          );
          setInvalidEndingDateValue(endingDateValue);
        } else {
          endingTimeErrorMessage = t(
            'datetime.reference_implementation.errors.end_before_beginning',
          );
          setInvalidEndingTimeValue(endingTimeValue);
        }
      }
    }

    let focusSet = false;
    if (beginningDateErrorMessage !== '') {
      setBeginningDateErrorText(beginningDateErrorMessage);
      setInvalidBeginningDateValue(beginningDateValue);
      beginningDateInputRef.current?.focus();
      focusSet = true;
    }
    if (beginningTimeErrorMessage !== '') {
      setBeginningTimeErrorText(beginningTimeErrorMessage);
      setInvalidBeginningTimeValue(beginningTimeValue);
      if (!focusSet) {
        beginningTimeInputRef.current?.focus();
        focusSet = true;
      }
    }
    if (endingDateErrorMessage !== '') {
      setEndingDateErrorText(endingDateErrorMessage);
      setInvalidEndingDateValue(endingDateValue);
      if (!focusSet) {
        endingDateInputRef.current?.focus();
        focusSet = true;
      }
    }
    if (endingTimeErrorMessage !== '') {
      setEndingTimeErrorText(endingTimeErrorMessage);
      setInvalidEndingTimeValue(endingTimeValue);
      if (!focusSet) {
        endingTimeInputRef.current?.focus();
      }
    }
  };

  return (
    <Block>
      <fieldset style={fieldsetStyles}>
        <legend style={legendStyles}>
          {t('datetime.reference_implementation.event_time')}
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
        <Block mt="s">
          <DateInput
            id="beginning-date"
            style={{ display: mobileWidth ? 'block' : 'inline-block' }}
            labelText={t('datetime.reference_implementation.beginning_date')}
            datePickerEnabled
            aria-describedby={
              mobileWidth
                ? 'date-hint-text'
                : 'date-hint-text beginning-date-status-text'
            }
            statusText={mobileWidth ? beginningDateErrorText : undefined}
            statusTextAriaLiveMode="off"
            ref={beginningDateInputRef}
            value={beginningDateValue}
            onChange={(newValue) => setBeginningDateValue(newValue.value)}
            onBlur={() => {
              if (
                beginningDateErrorText !== '' &&
                beginningDateValue !== invalidBeginningDateValue
              ) {
                setBeginningDateErrorText('');
                setInvalidBeginningDateValue('');
              }
            }}
            onDatePickerButtonBlur={() => {
              if (
                beginningDateErrorText !== '' &&
                beginningDateValue !== invalidBeginningDateValue
              ) {
                setBeginningDateErrorText('');
                setInvalidBeginningDateValue('');
              }
            }}
            status={beginningDateErrorText !== '' ? 'error' : 'default'}
            fullWidth={mobileWidth}
            smallScreen={mobileWidth}
          />
          <TimeInput
            id="beginning-time"
            style={{ display: mobileWidth ? 'block' : 'inline-block' }}
            ref={beginningTimeInputRef}
            labelText={t('datetime.reference_implementation.time_label')}
            ml={mobileWidth ? undefined : 's'}
            mt={mobileWidth ? 's' : undefined}
            aria-describedby={
              mobileWidth
                ? 'beginning-date time-hint-text'
                : 'beginning-date time-hint-text beginning-time-status-text'
            }
            statusText={mobileWidth ? beginningTimeErrorText : undefined}
            statusTextAriaLiveMode="off"
            value={beginningTimeValue}
            onChange={(newValue) => setBeginningTimeValue(newValue)}
            status={beginningTimeErrorText !== '' ? 'error' : 'default'}
            onBlur={() => {
              const adjustedValue = autocompleteTimeString(beginningTimeValue);
              if (adjustedValue) {
                setBeginningTimeValue(adjustedValue);
              }
              if (
                beginningTimeErrorText !== '' &&
                beginningTimeValue !== invalidBeginningTimeValue
              ) {
                setBeginningTimeErrorText('');
                setInvalidBeginningTimeValue('');
              }
            }}
          />
        </Block>
        {!mobileWidth && (
          <>
            <StatusText
              status="error"
              id="beginning-date-status-text"
              mt="xxs"
              ariaLiveMode="off"
            >
              {beginningDateErrorText}
            </StatusText>
            <StatusText
              status="error"
              id="beginning-time-status-text"
              ariaLiveMode="off"
            >
              {beginningTimeErrorText}
            </StatusText>
          </>
        )}
        <Block mt="xs">
          <DateInput
            id="ending-date"
            style={{ display: mobileWidth ? 'block' : 'inline-block' }}
            labelText={t('datetime.reference_implementation.ending_date')}
            datePickerEnabled
            aria-describedby={
              mobileWidth ? 'date-hint-text' : 'date-hint-text date-status-text'
            }
            statusText={mobileWidth ? endingDateErrorText : undefined}
            statusTextAriaLiveMode="off"
            ref={endingDateInputRef}
            value={endingDateValue}
            onChange={(newValue) => setEndingDateValue(newValue.value)}
            onBlur={() => {
              if (
                endingDateErrorText !== '' &&
                endingDateValue !== invalidEndingDateValue
              ) {
                setEndingDateErrorText('');
                setInvalidEndingDateValue('');
              }
            }}
            onDatePickerButtonBlur={() => {
              if (
                endingDateErrorText !== '' &&
                endingDateValue !== invalidEndingDateValue
              ) {
                setEndingDateErrorText('');
                setInvalidEndingDateValue('');
              }
            }}
            status={endingDateErrorText !== '' ? 'error' : 'default'}
            fullWidth={mobileWidth}
            smallScreen={mobileWidth}
          />
          <TimeInput
            id="ending-time"
            style={{ display: mobileWidth ? 'block' : 'inline-block' }}
            ref={endingTimeInputRef}
            labelText={t('datetime.reference_implementation.time_label')}
            ml={mobileWidth ? undefined : 's'}
            mt={mobileWidth ? 's' : undefined}
            aria-describedby={
              mobileWidth
                ? 'ending-date time-hint-text'
                : 'time-hint-text time-status-text'
            }
            statusText={mobileWidth ? endingTimeErrorText : undefined}
            statusTextAriaLiveMode="off"
            value={endingTimeValue}
            onChange={(newValue) => setEndingTimeValue(newValue)}
            status={endingTimeErrorText !== '' ? 'error' : 'default'}
            onBlur={() => {
              const adjustedValue = autocompleteTimeString(endingTimeValue);
              if (adjustedValue) {
                setEndingTimeValue(adjustedValue);
              }
              if (
                endingTimeErrorText !== '' &&
                endingTimeValue !== invalidEndingTimeValue
              ) {
                setEndingTimeErrorText('');
                setInvalidEndingTimeValue('');
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
              {endingDateErrorText}
            </StatusText>
            <StatusText status="error" id="time-status-text" ariaLiveMode="off">
              {endingTimeErrorText}
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
