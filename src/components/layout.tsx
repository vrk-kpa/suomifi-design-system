import React, { ReactNode } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import Header from './header'
import Navigation from './Navigation'
import { SideNavData } from './SideNavData'
import { Desktop } from './Responsive'
import BypassLink from './BypassLink'
import MainContent from './MainContent'
import Footer from './Footer'
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
        <MainContent sideNavData={sideNavData} hasFrame={hasFrame}>
          {children}
        </MainContent>
        <Footer />
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
