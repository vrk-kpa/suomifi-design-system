import React, { ReactNode, CSSProperties } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { suomifiTheme } from 'suomifi-ui-components'
import { Location } from '@reach/router'

import Header from './header'
import Navigation from './Navigation'
import SideNavComp from './SideNav'
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
  hasFrame = true,
  children,
  style
}: {
  hasFrame?: boolean
  children: ReactNode
  style?: CSSProperties
}): JSX.Element => (
  <div style={{ margin: hasFrame ? '2rem 1rem' : 0, ...style }}>
    <main id='main'>{children}</main>
    <footer style={{ margin: '1rem 0 0 0' }}>
      © {new Date().getFullYear()}
    </footer>
  </div>
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
            paddingTop: hasFrame ? '1rem' : 0
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
                  margin: hasFrame ? '1rem 2rem 2rem 2rem' : 0,
                  width: '100%',
                  maxWidth: hasFrame ? 1140 : 'initial',
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
                <MainContent hasFrame={hasFrame} style={{ flex: 1 }}>
                  {children}
                </MainContent>
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
                margin: hasFrame ? '1rem 2rem 1rem 2rem' : 0,
                background: hasFrame ? suomifiTheme.colors.whiteBase : 'none',
                border: hasFrame
                  ? `1px solid ${suomifiTheme.colors.depthLight13}`
                  : 0
              }}>
              <MainContent hasFrame={hasFrame}>{children}</MainContent>
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
              <MainContent hasFrame={hasFrame}>{children}</MainContent>
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
