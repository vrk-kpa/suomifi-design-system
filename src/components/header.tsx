import { Link } from '@wapps/gatsby-plugin-i18next'
import React from 'react'

import Switcher from './switcher'

const Header = ({ siteTitle }: Props) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`
          }}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: `1rem`
      }}>
      <Switcher />
    </div>
  </div>
)

interface Props {
  siteTitle?: string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
