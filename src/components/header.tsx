import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import * as commonContent from '../../locale/fi/common.json';
import DesignSystemLogo from 'staticIcons/designSystemLogo.svg';
import MainMenu from 'components/MainMenu';
import { MobileOrTablet } from 'components/Responsive';
import mainNavData from 'config/mainnav';
import Link from 'components/Link';

const Header = (): JSX.Element => (
  <header
    style={{
      padding: defaultSuomifiTheme.spacing.s,
      borderTop: `4px solid ${defaultSuomifiTheme.colors.brandBase}`,
      boxSizing: `border-box`,
      background: defaultSuomifiTheme.colors.whiteBase,
      borderBottom: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
      display: 'flex',
      justifyContent: 'center',
      lineHeight: '40px',
    }}
  >
    <div
      style={{
        width: '100%',
        maxWidth: 1140,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        icon={<DesignSystemLogo style={{ width: '191px', height: '32px' }} />}
        style={{ display: 'flex' }}
        title={commonContent['to.homepage']}
        url="/"
      />
      <div
        style={{
          flex: 1,
          position: 'relative',
          marginLeft: defaultSuomifiTheme.spacing.xs,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-1.4rem',
            left: '-1.55rem',
            whiteSpace: 'nowrap',
            lineHeight: '16px',
            fontSize: '16px',
            fontWeight: 600,
            textTransform: 'uppercase',
            color: defaultSuomifiTheme.colors.highlightBase,
          }}
        >
          {commonContent['header.stamp']}
        </div>
      </div>
      <MobileOrTablet>
        <MainMenu mainNavData={mainNavData} />
      </MobileOrTablet>
    </div>
  </header>
);

export default Header;
