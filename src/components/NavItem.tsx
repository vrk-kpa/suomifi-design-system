import React, { ReactNode } from 'react';
import { Link } from '@wapps/gatsby-plugin-i18next';
import { defaultTokens } from 'suomifi-ui-components';

import { isFrontPage } from 'components/LinkUtil';

const NavItem = ({ to, children }: Props): JSX.Element => (
  <Link
    to={to}
    css={[
      {
        padding: defaultTokens.spacing.s,
        lineHeight: '2.8rem',
        whiteSpace: 'nowrap',
        color: defaultTokens.colors.blackBase,
        textDecoration: 'none',
        '&:hover': {
          borderBottom: `4px solid ${defaultTokens.colors.highlightBase}`,
        },
      },
      `&:focus { ${defaultTokens.outlines.basic} }`,
    ]}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      if (isCurrent || (!isFrontPage(to) && isPartiallyCurrent)) {
        return {
          style: {
            borderBottom: `4px solid ${defaultTokens.colors.highlightBase}`,
          },
        };
      }
    }}
  >
    {children}
  </Link>
);

interface Props {
  to: string;
  children: ReactNode;
}

export default NavItem;
