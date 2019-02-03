import React from 'react'
import PropTypes from 'prop-types'
import { I18n } from 'react-i18next'

import Header from './header'
import Annotation from './annotation'
import '@csstools/normalize.css'
import './layout.css'
import './theme/fontFaces.css'
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
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'nowrap'
          }}>
          <div
            style={{
              width: '100%',
              maxWidth: 1140,
              padding: `0 1rem`
            }}>
            <Annotation
              title={t('alpharel:title')}
              description={t('alpharel:description')}
            />
            {children}
            <footer>© {new Date().getFullYear()}</footer>
          </div>
        </div>
      </div>
    )}
  </I18n>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
