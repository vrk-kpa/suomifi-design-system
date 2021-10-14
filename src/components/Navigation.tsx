import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import * as commonContent from '../../locale/fi/common.json';
import NavItem from 'components/NavItem';
import { MainNavData } from 'components/MainNavData';

const Navigation = ({ mainNavData }: Props): JSX.Element => (
  <nav
    aria-label={commonContent['navigation.main']}
    style={{
      padding: 0,
      boxSizing: 'border-box',
      background: `${defaultSuomifiTheme.colors.whiteBase}`,
      borderBottom: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
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
      {mainNavData.items.map((item) => (
        <li
          key={item.to}
          style={{
            margin: `0 ${defaultSuomifiTheme.spacing.xl} 0 ${defaultSuomifiTheme.spacing.xs}`,
          }}
        >
          <NavItem to={item.to}>{item.label}</NavItem>
        </li>
      ))}
    </ul>
  </nav>
);

interface Props {
  mainNavData: MainNavData;
}

export default Navigation;
