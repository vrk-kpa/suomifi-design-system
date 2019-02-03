import React from 'react'
import PropTypes from 'prop-types'
import { I18n } from 'react-i18next'

import Header from './header'
import '@csstools/normalize.css'
import './layout.css'
import { suomifiTheme } from './theme'

const Layout = ({ children }) => (
  <I18n>
    {t => (
      <div
        style={Object.assign({}, suomifiTheme.typography, {
          color: `${suomifiTheme.colors.text}`
        })}>
        <Header />
        <div
          style={{
            maxWidth: 1140,
            padding: `0 1rem`
          }}>
          {children}
          <footer>© {new Date().getFullYear()}</footer>
        </div>
      </div>
    )}
  </I18n>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
