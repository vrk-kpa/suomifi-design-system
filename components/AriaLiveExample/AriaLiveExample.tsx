import { Block, Button, InlineAlert } from 'suomifi-ui-components';
import styles from './AriaLiveExample.module.scss';
import { useTranslation } from 'next-export-i18n';
import { useState } from 'react';

const AriaLiveExample: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <Block
        variant="div"
        aria-live="polite"
        aria-atomic="true"
        className={!showAlert ? styles.alertContainer : undefined}
        mb="l"
      >
        {showAlert ? (
          <InlineAlert status="error">
            {t('notification_components.reference_implementation.alert_text')}
          </InlineAlert>
        ) : (
          t(
            'notification_components.reference_implementation.arialive_area_text',
          )
        )}
      </Block>
      <Block variant="div" className={styles.dummy} mb="xl">
        {t('notification_components.reference_implementation.dummy_text')}
      </Block>
      <Button onClick={() => setShowAlert(true)}>
        {t('notification_components.reference_implementation.button_text')}
      </Button>
    </>
  );
};

export default AriaLiveExample;
