import React, { ReactNode } from 'react';
import { defaultTokens } from 'suomifi-ui-components';

const BypassLink = ({ to, children }: Props): JSX.Element => (
  <a
    href={to}
    css={[
      {
        position: 'absolute',
        zIndex: defaultTokens.zindexes.focus + 1,
        left: '-1000px',
        margin: defaultTokens.spacing.m,
        padding: defaultTokens.spacing.s,
        background: defaultTokens.colors.highlightLight53,
        border: `1px solid ${defaultTokens.colors.depthLight13}`,
        color: defaultTokens.colors.blackBase,
        textDecoration: 'none',
      },
      `&:focus { ${defaultTokens.outlines.basic} }`,
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
