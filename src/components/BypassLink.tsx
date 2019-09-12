import React, { ReactNode } from 'react';
import { suomifiTheme } from 'suomifi-ui-components';

const BypassLink = ({ to, children }: Props): JSX.Element => (
  <a
    href={to}
    css={[
      {
        position: 'absolute',
        zIndex: suomifiTheme.zindexes.focus + 1,
        left: '-1000px',
        margin: suomifiTheme.spacing.m,
        padding: suomifiTheme.spacing.s,
        background: suomifiTheme.colors.highlightLight53,
        border: `1px solid ${suomifiTheme.colors.depthLight13}`,
        color: suomifiTheme.colors.blackBase,
        textDecoration: 'none',
      },
      `&:focus { ${suomifiTheme.outlines.basic} }`,
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
