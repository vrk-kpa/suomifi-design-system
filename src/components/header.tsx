import { Link } from '@wapps/gatsby-plugin-i18next'
import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

import Switcher from './switcher'
import Logo from './suomifi-logo'

const Header = () => (
  <div
    style={{
      padding: '1rem',
      borderTop: `4px solid ${suomifiTheme.colors.brandColor}`,
      boxSizing: `border-box`,
      background: `${suomifiTheme.colors.white}`,
      borderBottom: '1px solid #C9CDCF',
      height: `80px`,
      display: 'flex',
      justifyContent: 'center'
    }}>
    <div
      style={{
        width: '100%',
        maxWidth: 1140,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap'
      }}>
      <div style={{ height: '32px' }}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div>
        <Switcher />
      </div>
    </div>
  </div>
)

export default Header
