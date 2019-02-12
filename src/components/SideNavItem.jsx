import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { suomifiTheme } from 'suomifi-ui-components'
import { Link } from '@wapps/gatsby-plugin-i18next'

class SideNavItem extends Component {
  toggleOpen = event => {
    event.preventDefault()
    const { to, handleToggle } = this.props
    handleToggle(to)
  }

  isFrontPage = to => to && to === '/'

  render() {
    const { to, children, hasChildren, level } = this.props

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <Link
          to={to}
          css={{
            width: '100%',
            display: 'inline-block',
            padding: '1rem',
            paddingLeft: level + 'rem',
            borderBottom: '1px solid #EEF5FF',
            borderLeft: '4px solid transparent',
            whiteSpace: 'nowrap',
            color: suomifiTheme.colors.secondaryColor,
            textDecoration: 'none',
            '&:hover': {
              background: '#EEF5FF',
              borderLeft: '4px solid ' + suomifiTheme.colors.brandColor,
              color: suomifiTheme.colors.brandColor,
              fontWeight: 600
            }
          }}
          getProps={({ isCurrent, isPartiallyCurrent }) => {
            if (!this.isFrontPage(to) && isPartiallyCurrent && !isCurrent) {
              return {
                style: {
                  borderLeft: '4px solid ' + suomifiTheme.colors.brandColor,
                  fontWeight: 600
                }
              }
            }

            if (isCurrent) {
              return {
                style: {
                  background: '#EEF5FF',
                  borderLeft: '4px solid ' + suomifiTheme.colors.brandColor,
                  color: suomifiTheme.colors.brandColor,
                  fontWeight: 600
                }
              }
            }
          }}>
          {children}
          {hasChildren && (
            <button
              style={{
                float: 'right'
              }}
              onClick={this.toggleOpen}>
              +
            </button>
          )}
        </Link>
      </div>
    )
  }
}

SideNavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hasChildren: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired
}

export default SideNavItem
