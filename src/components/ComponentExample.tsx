import React, { ReactNode, CSSProperties } from 'react';
import { defaultTokens } from 'suomifi-ui-components';

const ComponentExample = ({ style, children }: Props): JSX.Element => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: defaultTokens.spacing.m,
      margin: `${defaultTokens.spacing.m} 0`,
      ...style,
      background:
        style && style.background
          ? style.background
          : defaultTokens.colors.depthLight30,
    }}
  >
    {children}
  </div>
);

interface Props {
  style?: CSSProperties;
  children: ReactNode;
}

ComponentExample.displayName = 'div';

export default ComponentExample;
