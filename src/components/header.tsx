import React from 'react';
import { Translation } from 'react-i18next';
import { suomifiDesignTokens } from 'suomifi-ui-components';

import LanguageSwitcher from 'components/LanguageSwitcher';
import { ReactComponent as DesignSystemLogo } from 'staticIcons/designSystemLogo.svg';
import MainMenu from 'components/MainMenu';
import { Desktop, MobileOrTablet } from 'components/Responsive';
import mainNavData from 'config/mainnav';
import Link from 'components/Link';

const Header = (): JSX.Element => (
  <Translation>
    {(t) => (
      <header
        style={{
          padding: suomifiDesignTokens.spacing.s,
          borderTop: `4px solid ${suomifiDesignTokens.colors.brandBase}`,
          boxSizing: `border-box`,
          background: suomifiDesignTokens.colors.whiteBase,
          borderBottom: `1px solid ${suomifiDesignTokens.colors.depthLight1}`,
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
            icon={
              <DesignSystemLogo style={{ width: '191px', height: '32px' }} />
            }
            title={t('common:to.homepage')}
            url="/"
          />
          <div
            style={{
              flex: 1,
              position: 'relative',
              marginLeft: suomifiDesignTokens.spacing.xs,
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
                color: suomifiDesignTokens.colors.highlightBase,
              }}
            >
              {t('common:header.stamp')}
            </div>
          </div>
          <Desktop>
            <LanguageSwitcher.menu />
          </Desktop>
          <MobileOrTablet>
            <MainMenu mainNavData={mainNavData(t)} />
          </MobileOrTablet>
        </div>
      </header>
    )}
  </Translation>
);

export default Header;
