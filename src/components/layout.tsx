import React, { ReactNode } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { suomifiTheme } from 'suomifi-ui-components'
import { Location } from '@reach/router'

import Header from './header'
import Navigation from './Navigation'
import SideNav from './SideNav'
import Annotation from './annotation'
import { SideNavData } from './SideNavData'

import '@csstools/normalize.css'
import './layout.css'

const Layout = ({ sideNavData, children }: Props): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <div
        style={Object.assign({}, suomifiTheme.typography, {
          color: `${suomifiTheme.colors.text}`
        })}>
        <Header />
        <Navigation />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'nowrap'
          }}>
          <div
            style={{
              width: '100%',
              maxWidth: 1140,
              display: 'flex',
              flexWrap: 'nowrap'
            }}>
            {sideNavData && (
              <div style={{ margin: '1rem' }}>
                <Location>
                  {({ location }) => (
                    <SideNav location={location} sideNavData={sideNavData} />
                  )}
                </Location>
              </div>
            )}
            <div style={{ margin: '1rem' }}>
              <Annotation
                title={t('alpharel:title')}
                description={t('alpharel:description')}
              />
              <main>{children}</main>
              <footer style={{ marginTop: '1rem' }}>
                © {new Date().getFullYear()}
              </footer>
            </div>
          </div>
        </div>
      </div>
    )}
  </NamespacesConsumer>
)

interface Props {
  sideNavData?: SideNavData
  children: ReactNode
}

export default Layout
