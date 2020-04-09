import React, { CSSProperties } from 'react';
import { suomifiDesignTokens, Icon } from 'suomifi-ui-components';
import { Text } from 'components/ResponsiveComponents';
import { NamespacesConsumer } from 'react-i18next';

interface Props {
  style?: CSSProperties;
  notificationText?: string;
}

const NotificationBox = ({ style, notificationText }: Props): JSX.Element => (
  <NamespacesConsumer>
    {(t) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: suomifiDesignTokens.spacing.xl,
          margin: `${suomifiDesignTokens.spacing.s} 0`,
          ...style,
          background: suomifiDesignTokens.colors.accentSecondaryLight1,
          fontSize: '24px',
        }}
      >
        <Icon icon="error" color={suomifiDesignTokens.colors.accentSecondary} />
        <Text.bold
          style={{
            marginLeft: suomifiDesignTokens.spacing.s,
            verticalAlign: 'middle',
            fontSize:
              suomifiDesignTokens.values.typography.bodyText.fontSize.value +
              suomifiDesignTokens.values.typography.bodyText.fontSize.unit,
          }}
        >
          {notificationText || t('common:work.in.progress.warning')}
        </Text.bold>
      </div>
    )}
  </NamespacesConsumer>
);

NotificationBox.displayName = 'div';

export default NotificationBox;
