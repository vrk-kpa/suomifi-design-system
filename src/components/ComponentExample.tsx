import React, { ReactNode, CSSProperties } from 'react';
import { suomifiDesignTokens } from 'suomifi-ui-components';

const ComponentExample = ({ style, children }: Props): JSX.Element => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: suomifiDesignTokens.spacing.m,
      margin: `${suomifiDesignTokens.spacing.m} 0`,
      ...style,
      background:
        style && style.background
          ? style.background
          : suomifiDesignTokens.colors.whiteBase,
      border:
        style && style.border
          ? style.border
          : `1px solid ${suomifiDesignTokens.colors.depthBase}`,
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
