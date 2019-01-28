import React from 'react'
import PropTypes from 'prop-types'
import { I18n } from 'react-i18next'

import Header from './header'
import '@csstools/normalize.css'
import './layout.css'

const Layout = ({ children }) => (
  <I18n>
    {t => (
      <>
        <Header siteTitle={t('site:title')} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}>
          {children}
          <footer>© {new Date().getFullYear()}</footer>
        </div>
      </>
    )}
  </I18n>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
