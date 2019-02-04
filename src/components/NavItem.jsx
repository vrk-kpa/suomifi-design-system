import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

const NavItem = ({ to, children }) => (
  <Link
    to={to}
    css={{
      padding: '.5rem',
      lineHeight: '2.8rem',
      whiteSpace: 'nowrap',
      color: suomifiTheme.colors.text,
      textDecoration: 'none',
      '&:hover': {
        borderBottom: `4px solid ${suomifiTheme.colors.secondaryColor}`
      }
    }}
    activeStyle={{
      borderBottom: `4px solid ${suomifiTheme.colors.secondaryColor}`
    }}>
    {children}
  </Link>
)

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default NavItem
