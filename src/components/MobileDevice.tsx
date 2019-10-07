import React, { ReactNode, CSSProperties } from 'react';
import { defaultTokens } from 'suomifi-ui-components';

const MobileDevice = ({ style, children }: Props): JSX.Element => (
  <div
    style={{
      width: '13rem',
      border: `.1rem solid ${defaultTokens.colors.depthDark27}`,
      borderBottom: 0,
      borderRadius: '1.5rem 1.5rem 0 0',
      boxShadow: defaultTokens.shadows.panelShadow,
      padding: '2.5rem 1rem 0 1rem',
      margin: 0,
      background: defaultTokens.colors.depthLight13,
    }}
  >
    <div
      style={{
        position: 'relative',
        top: '-1.25rem',
        margin: '0 auto',
        width: '3.5rem',
        height: '.25rem',
        background: defaultTokens.colors.depthDark27,
        borderRadius: '.125rem',
      }}
    />
    <div
      style={{
        overflow: 'hidden',
        height: '100%',
        background: 'white',
        ...style,
      }}
    >
      {children}
    </div>
  </div>
);

interface Props {
  style?: CSSProperties;
  children: ReactNode;
}

MobileDevice.displayName = 'div';

export default MobileDevice;
