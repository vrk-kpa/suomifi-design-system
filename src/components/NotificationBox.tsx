import React, { CSSProperties } from 'react';
import { defaultSuomifiTheme, Icon } from 'suomifi-ui-components';
import { Text } from 'components/ResponsiveComponents';
import { Translation } from 'react-i18next';

interface Props {
  style?: CSSProperties;
  notificationText?: string;
}

const NotificationBox = ({ style, notificationText }: Props): JSX.Element => (
  <Translation>
    {(t) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'nowrap',
          padding: `${defaultSuomifiTheme.spacing.insetXl} ${defaultSuomifiTheme.spacing.insetXxl}`,
          margin: `${defaultSuomifiTheme.spacing.s} 0`,
          ...style,
          background: defaultSuomifiTheme.colors.accentSecondaryLight1,
          fontSize: '24px',
        }}
      >
        <Icon
          icon="error"
          color={defaultSuomifiTheme.colors.accentSecondary}
          style={{ flex: '0 0 36px', marginRight: '20px' }}
        />
        <Text
          variant="bold"
          style={{
            verticalAlign: 'middle',
            flex: '1 1 auto',
            fontSize:
              defaultSuomifiTheme.values.typography.bodyText.fontSize.value +
              defaultSuomifiTheme.values.typography.bodyText.fontSize.unit,
          }}
        >
          {notificationText || t('common:work.in.progress.warning')}
        </Text>
      </div>
    )}
  </Translation>
);

NotificationBox.displayName = 'div';

export default NotificationBox;
