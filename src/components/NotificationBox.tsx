import React, { CSSProperties } from 'react';
import { suomifiTheme, Icon } from 'suomifi-ui-components';
import { Text } from 'components/ResponsiveComponents';
import { NamespacesConsumer } from 'react-i18next';

interface Props {
  style?: CSSProperties;
}

const NotificationBox = ({ style }: Props): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: suomifiTheme.spacing.l,
          margin: `${suomifiTheme.spacing.m} 0`,
          ...style,
          background: suomifiTheme.colors.accentSecondaryLight40,
          fontSize: '24px',
        }}
      >
        <Icon icon="error" color={suomifiTheme.colors.accentSecondary} />
        <Text.bold
          style={{
            marginLeft: suomifiTheme.spacing.m,
            verticalAlign: 'middle',
            fontSize: suomifiTheme.typography.fontSize.body,
          }}
        >
          {' '}
          {t('common:workInProgressWarning')}
        </Text.bold>
      </div>
    )}
  </NamespacesConsumer>
);

NotificationBox.displayName = 'div';

export default NotificationBox;
