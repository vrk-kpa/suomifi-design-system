import React, { Component, ReactNode, MouseEvent } from 'react'
import { suomifiTheme } from 'suomifi-ui-components'
import { Link } from '@wapps/gatsby-plugin-i18next'
import { Icon } from './Icon'

class SideNavItem extends Component<Props> {
  private toggleOpen = (event: MouseEvent) => {
    event.preventDefault()
    const { to, handleToggle } = this.props
    handleToggle(to)
  }

  private isFrontPage = (to: string): boolean => to && to === '/'

  public render(): JSX.Element {
    const { to, children, hasChildren, isOpen, level } = this.props

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
            whiteSpace: 'nowrap',
            color: suomifiTheme.colors.secondaryColor,
            textDecoration: 'none',
            '&:hover': {
              background: '#EEF5FF',
              color: suomifiTheme.colors.brandColor,
              fontWeight: 600
            }
          }}
          getProps={({ isCurrent, isPartiallyCurrent }) => {
            if (!this.isFrontPage(to) && isPartiallyCurrent && !isCurrent) {
              return {
                style: {
                  fontWeight: 600
                }
              }
            }

            if (isCurrent) {
              return {
                style: {
                  background: '#EEF5FF',
                  color: suomifiTheme.colors.brandColor,
                  fontWeight: 600
                }
              }
            }
          }}>
          {children}
          {hasChildren && (
            <button
              aria-expanded={isOpen(to)}
              style={{
                float: 'right',
                background: 'none',
                padding: 0,
                border: 0,
                width: '24px',
                height: '24px',
                fill: '#636769'
              }}
              onClick={this.toggleOpen}>
              {isOpen(to) ? <Icon.caretUp /> : <Icon.caretDown />}
            </button>
          )}
        </Link>
      </div>
    )
  }
}

interface Props {
  to: string
  children: ReactNode
  hasChildren: boolean
  isOpen: Function
  handleToggle: Function
  level: number
}

export default SideNavItem
