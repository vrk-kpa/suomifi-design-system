import { Link } from '@wapps/gatsby-plugin-i18next'
import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import LanguageSwitcher from 'components/LanguageSwitcher'
import { ReactComponent as SuomiFi } from 'staticIcons/SuomiFi.svg'
import { ReactComponent as SuomiFiWithText } from 'staticIcons/SuomiFiWithText.svg'
import MainMenu from 'components/MainMenu'
import { Desktop, MobileOrTablet } from 'components/Responsive'
import mainNavData from 'config/mainnav'

const Header = (): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <header
        style={{
          padding: '1rem',
          borderTop: `4px solid ${suomifiTheme.colors.brandBase}`,
          boxSizing: `border-box`,
          background: suomifiTheme.colors.whiteBase,
          borderBottom: `1px solid ${suomifiTheme.colors.depthLight13}`,
          display: 'flex',
          justifyContent: 'center',
          lineHeight: '40px'
        }}>
        <div
          style={{
            width: '100%',
            maxWidth: 1140,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Link
            title={t('common:to.homepage')}
            to='/'
            css={[
              { display: 'inline-block', height: '32px' },
              `&:focus { ${suomifiTheme.outlines.basic} }`
            ]}>
            <Desktop>
              <SuomiFiWithText style={{ width: '128px', height: '32px' }} />
            </Desktop>
            <MobileOrTablet>
              <SuomiFi style={{ width: '32px', height: '32px' }} />
            </MobileOrTablet>
          </Link>
          <div style={{ flex: 1, position: 'relative', marginLeft: '.5rem' }}>
            <div
              style={{
                fontSize: '28px',
                fontWeight: 600,
                color: suomifiTheme.colors.brandBase
              }}>
              {t('common:header.title')}
            </div>
            <div
              style={{
                position: 'absolute',
                top: '-.2rem',
                left: '9.5rem',
                whiteSpace: 'nowrap',
                lineHeight: '16px',
                fontSize: '16px',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: suomifiTheme.colors.highlightBase
              }}>
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
)

export default Header
