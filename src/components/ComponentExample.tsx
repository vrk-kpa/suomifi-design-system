import React, { ReactNode, CSSProperties } from 'react';
import { suomifiTheme } from 'suomifi-ui-components';

const ComponentExample = ({ style, children }: Props): JSX.Element => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: suomifiTheme.spacing.m,
      margin: `${suomifiTheme.spacing.m} 0`,
      border: `1px solid ${suomifiTheme.colors.depthBase}`,
      ...style,
      background:
        style && style.background
          ? style.background
          : suomifiTheme.colors.whiteBase,
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
