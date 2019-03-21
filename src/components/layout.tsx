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
            flexWrap: 'nowrap',
            background: '#F6F6F7'
          }}>
          <div
            style={{
              margin: '2rem',
              width: '100%',
              maxWidth: 1140,
              display: 'flex',
              flexWrap: 'nowrap',
              background: suomifiTheme.colors.white,
              border: '1px solid #C9CDCF'
            }}>
            {sideNavData && (
              <div>
                <Location>
                  {({ location }) => (
                    <SideNav location={location} sideNavData={sideNavData} />
                  )}
                </Location>
              </div>
            )}
            <div style={{ margin: '0 1rem 0 2rem' }}>
              <Annotation
                title={t('alpharel:title')}
                description={t('alpharel:description')}
              />
              <main>{children}</main>
              <footer style={{ margin: '1rem 0' }}>
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
