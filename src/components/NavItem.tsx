import React, { ReactNode } from 'react';
import { Link } from '@wapps/gatsby-plugin-i18next';
import { suomifiDesignTokens } from 'suomifi-ui-components';
import { focusOutline } from './utils/outline';
import { isFrontPage } from 'components/LinkUtil';

const NavItem = ({ to, children }: Props): JSX.Element => (
  <Link
    to={to}
    css={[
      {
        padding: suomifiDesignTokens.spacing.s,
        lineHeight: '2.8rem',
        whiteSpace: 'nowrap',
        color: suomifiDesignTokens.colors.blackBase,
        textDecoration: 'none',
        '&:hover': {
          borderBottom: `4px solid ${suomifiDesignTokens.colors.highlightBase}`,
        },
      },
      `&:focus { ${focusOutline} }`,
    ]}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      if (isCurrent || (!isFrontPage(to) && isPartiallyCurrent)) {
        return {
          style: {
            borderBottom: `4px solid ${suomifiDesignTokens.colors.highlightBase}`,
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
