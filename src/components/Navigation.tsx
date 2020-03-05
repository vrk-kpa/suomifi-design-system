import React from 'react';
import { NamespacesConsumer } from 'react-i18next';
import { defaultTokens } from 'suomifi-ui-components';

import NavItem from 'components/NavItem';
import { MainNavData } from 'components/MainNavData';

const Navigation = ({ mainNavData }: Props): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <nav
        aria-label={t('common:navigation.main')}
        style={{
          padding: 0,
          boxSizing: 'border-box',
          background: `${defaultTokens.colors.whiteBase}`,
          borderBottom: `1px solid ${defaultTokens.colors.depthLight13}`,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul
          style={{
            margin: 0,
            padding: 0,
            width: '100%',
            maxWidth: 1140,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
          }}
        >
          {mainNavData.items.map(item => (
            <li
              key={item.to}
              style={{
                margin: `0 ${defaultTokens.spacing.l} 0 ${
                  defaultTokens.spacing.s
                }`,
              }}
            >
              <NavItem to={item.to}>{item.label}</NavItem>
            </li>
          ))}
        </ul>
      </nav>
    )}
  </NamespacesConsumer>
);

interface Props {
  mainNavData: MainNavData;
}

export default Navigation;
