import React, { ReactNode, CSSProperties } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { suomifiTheme } from 'suomifi-ui-components'
import { Location } from '@reach/router'

import Header from './header'
import Navigation from './Navigation'
import SideNavComp from './SideNav'
import Annotation from './Annotation'
import { SideNavData } from './SideNavData'
import { Desktop, Mobile, Tablet } from './Responsive'
import BypassLink from './BypassLink'
import mainNavData from '../config/mainnav'

import '@csstools/normalize.css'
import './layout.css'

const BypassLinks = ({ hasSideNav }: { hasSideNav: boolean }): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <>
        <BypassLink to='#main'>{t('common:to.main.content')}</BypassLink>
        {hasSideNav && (
          <BypassLink to='#sidenav'>{t('common:to.sidenav')}</BypassLink>
        )}
      </>
    )}
  </NamespacesConsumer>
)

const SideNav = ({
  sideNavData,
  style
}: {
  sideNavData: SideNavData
  style?: CSSProperties
}): JSX.Element => {
  return sideNavData ? (
    <Location>
      {({ location }) => (
        <div id='sidenav' style={style}>
          <SideNavComp location={location} sideNavData={sideNavData} />
        </div>
      )}
    </Location>
  ) : null
}

const MainContent = ({
  children,
  style
}: {
  children: ReactNode
  style?: CSSProperties
}): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <div style={{ margin: '0 1rem', ...style }}>
        <Annotation
          title={t('alpharel:title')}
          description={t('alpharel:description')}
        />
        <main id='main'>{children}</main>
        <footer style={{ margin: '1rem 0' }}>
          © {new Date().getFullYear()}
        </footer>
      </div>
    )}
  </NamespacesConsumer>
)

const Layout = ({
  sideNavData,
  hasFrame = true,
  children
}: Props): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <div
        style={{
          fontFamily: `${suomifiTheme.typography.fontFamily}, sans-serif`,
          fontSize: suomifiTheme.typography.fontSize.body,
          lineHeight: '1.5em',
          color: suomifiTheme.colors.blackBase
        }}>
        <BypassLinks hasSideNav={!!sideNavData} />
        <Header />
        <Desktop>
          <Navigation mainNavData={mainNavData(t)} />
        </Desktop>
        <div
          style={{
            background: suomifiTheme.colors.depthLight30,
            paddingTop: '1rem'
          }}>
          <Desktop>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'nowrap'
              }}>
              <div
                style={{
                  margin: '1rem 2rem 2rem 2rem',
                  width: '100%',
                  maxWidth: 1140,
                  display: 'flex',
                  flexWrap: 'nowrap',
                  background: hasFrame ? suomifiTheme.colors.whiteBase : 'none',
                  border: hasFrame
                    ? `1px solid ${suomifiTheme.colors.depthLight13}`
                    : 0
                }}>
                <SideNav
                  sideNavData={sideNavData}
                  style={{ width: '22rem', marginRight: '1rem' }}
                />
                <MainContent style={{ flex: 1 }}>{children}</MainContent>
              </div>
            </div>
          </Desktop>
          <Tablet>
            <SideNav
              sideNavData={sideNavData}
              style={{
                margin: '0 2rem',
                border: `1px solid ${suomifiTheme.colors.depthLight13}`
              }}
            />
            <div
              style={{
                margin: '1rem 2rem 1rem 2rem',
                background: hasFrame ? suomifiTheme.colors.whiteBase : 'none',
                border: hasFrame
                  ? `1px solid ${suomifiTheme.colors.depthLight13}`
                  : 0
              }}>
              <MainContent>{children}</MainContent>
            </div>
          </Tablet>
          <Mobile>
            <SideNav
              sideNavData={sideNavData}
              style={{
                margin: '0 1rem',
                border: `1px solid ${suomifiTheme.colors.depthLight13}`
              }}
            />
            <div
              style={{
                margin: '1rem 0 0 0',
                background: hasFrame ? suomifiTheme.colors.whiteBase : 'none',
                border: hasFrame
                  ? `1px solid ${suomifiTheme.colors.depthLight13}`
                  : 0
              }}>
              <MainContent>{children}</MainContent>
            </div>
          </Mobile>
        </div>
      </div>
    )}
  </NamespacesConsumer>
)

interface Props {
  sideNavData?: SideNavData
  hasFrame?: boolean
  children: ReactNode
}

export default Layout
