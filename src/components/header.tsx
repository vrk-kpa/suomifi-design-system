import React from 'react';
import { NamespacesConsumer } from 'react-i18next';
import { suomifiDesignTokens } from 'suomifi-ui-components';

import LanguageSwitcher from 'components/LanguageSwitcher';
import { ReactComponent as SuomiFi } from 'staticIcons/SuomiFi.svg';
import { ReactComponent as SuomiFiWithText } from 'staticIcons/SuomiFiWithText.svg';
import MainMenu from 'components/MainMenu';
import { Desktop, MobileOrTablet } from 'components/Responsive';
import mainNavData from 'config/mainnav';
import Link from 'components/Link';

const Header = (): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <header
        style={{
          padding: suomifiDesignTokens.spacing.m,
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
              <>
                <Desktop>
                  <SuomiFiWithText style={{ width: '128px', height: '32px' }} />
                </Desktop>
                <MobileOrTablet>
                  <SuomiFi style={{ width: '32px', height: '32px' }} />
                </MobileOrTablet>
              </>
            }
            title={t('common:to.homepage')}
            url="/"
          />
          <div
            style={{
              flex: 1,
              position: 'relative',
              marginLeft: suomifiDesignTokens.spacing.s,
            }}
          >
            <div
              style={{
                fontSize: '28px',
                fontWeight: 600,
                color: suomifiDesignTokens.colors.brandBase,
              }}
            >
              {t('common:header.title')}
            </div>
            <div
              style={{
                position: 'absolute',
                top: '-.2rem',
                left: '9.6rem',
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
  </NamespacesConsumer>
);

export default Header;
