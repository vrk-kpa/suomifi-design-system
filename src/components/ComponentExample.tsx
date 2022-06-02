import React, { ReactNode, CSSProperties } from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

const ComponentExample = ({ style, children }: Props): JSX.Element => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: defaultSuomifiTheme.spacing.s,
      margin: `${defaultSuomifiTheme.spacing.s} 0`,
      ...style,
      background:
        style && style.background
          ? style.background
          : defaultSuomifiTheme.colors.whiteBase,
      border:
        style && style.border
          ? style.border
          : `1px solid ${defaultSuomifiTheme.colors.depthBase}`,
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
