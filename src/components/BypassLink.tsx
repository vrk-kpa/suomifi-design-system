import React, { ReactNode } from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import { focusOutline } from './utils/outline';

const BypassLink = ({ to, children }: Props): JSX.Element => (
  <a
    href={to}
    css={[
      {
        position: 'absolute',
        zIndex: 10000,
        left: '-1000px',
        margin: defaultSuomifiTheme.spacing.s,
        padding: defaultSuomifiTheme.spacing.xs,
        background: defaultSuomifiTheme.colors.highlightLight3,
        border: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
        color: defaultSuomifiTheme.colors.blackBase,
        textDecoration: 'none',
      },
      `&:focus { ${focusOutline} }`,
      { '&:focus': { position: 'absolute', left: 'auto' } },
    ]}
  >
    {children}
  </a>
);

interface Props {
  to: string;
  children: ReactNode;
}

export default BypassLink;
