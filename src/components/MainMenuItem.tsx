import React, { Component, ReactNode } from 'react';
import { defaultTokens } from 'suomifi-ui-components';
import { Link } from '@wapps/gatsby-plugin-i18next';

import { isFrontPage } from 'components/LinkUtil';

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
            paddingLeft: defaultTokens.spacing.m,
            paddingRight: defaultTokens.spacing.m,
            borderBottom: `1px solid ${defaultTokens.colors.depthSecondary}`,
            color: defaultTokens.colors.highlightBase,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              background: defaultTokens.colors.depthSecondary,
              color: defaultTokens.colors.brandBase,
            },
          },
          `&:focus { ${defaultTokens.outlines.basic} }`,
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
                background: defaultTokens.colors.depthSecondary,
                color: defaultTokens.colors.brandBase,
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
