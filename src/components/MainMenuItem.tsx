import React, { Component, ReactNode } from 'react';
import { suomifiDesignTokens } from 'suomifi-ui-components';
import { Link } from '@wapps/gatsby-plugin-i18next';
import { isFrontPage } from 'components/LinkUtil';
import { focusOutline } from './utils/outline';

class MainMenuItem extends Component<Props> {
  public render(): JSX.Element {
    const { to, children } = this.props;

    return (
      <Link
        to={to}
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '3.2rem',
            paddingLeft: suomifiDesignTokens.spacing.s,
            paddingRight: suomifiDesignTokens.spacing.s,
            borderBottom: `1px solid ${suomifiDesignTokens.colors.depthSecondary}`,
            color: suomifiDesignTokens.colors.highlightBase,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              background: suomifiDesignTokens.colors.depthSecondary,
              color: suomifiDesignTokens.colors.brandBase,
            },
          },
          `&:focus { ${focusOutline} }`,
        ]}
        getProps={({ isCurrent, isPartiallyCurrent }) => {
          if (!isFrontPage(to) && isPartiallyCurrent && !isCurrent) {
            return {
              style: {
                fontWeight: 600,
              },
            };
          }

          if (isCurrent) {
            return {
              style: {
                background: suomifiDesignTokens.colors.depthSecondary,
                color: suomifiDesignTokens.colors.brandBase,
                fontWeight: 600,
              },
            };
          }
        }}
      >
        {children}
      </Link>
    );
  }
}

interface Props {
  to: string;
  children: ReactNode;
}

export default MainMenuItem;
