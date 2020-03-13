import React, { ReactNode } from 'react';
import { suomifiDesignTokens } from 'suomifi-ui-components';

import { focusOutline } from './utils/outline';

const BypassLink = ({ to, children }: Props): JSX.Element => (
  <a
    href={to}
    css={[
      {
        position: 'absolute',
        zIndex: 10000,
        left: '-1000px',
        margin: suomifiDesignTokens.spacing.m,
        padding: suomifiDesignTokens.spacing.s,
        background: suomifiDesignTokens.colors.highlightLight3,
        border: `1px solid ${suomifiDesignTokens.colors.depthLight1}`,
        color: suomifiDesignTokens.colors.blackBase,
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
