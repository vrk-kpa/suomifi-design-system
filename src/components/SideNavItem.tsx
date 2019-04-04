import React, { Component, ReactNode, MouseEvent } from 'react'
import { suomifiTheme, Icon, Button } from 'suomifi-ui-components'
import { Link } from '@wapps/gatsby-plugin-i18next'

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
          css={[
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '3.2rem',
              paddingLeft: level + 'rem',
              paddingRight: '.5rem',
              borderBottom: '1px solid #EEF5FF',
              color: suomifiTheme.colors.secondaryColor,
              textDecoration: 'none',
              '&:hover': {
                background: '#EEF5FF',
                color: suomifiTheme.colors.brandColor
              }
            },
            `&:focus { ${suomifiTheme.outlines.basic} }`
          ]}
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
            <Button
              aria-expanded={isOpen(to)}
              style={{
                float: 'right',
                background: 'none',
                padding: 0,
                border: 0,
                width: '40px',
                height: '40px',
                minWidth: '40px',
                minHeight: '40px',
                fontSize: '16px',
                /* stylelint-disable-next-line function-name-case */
                transform: isOpen(to) ? 'rotate(.5turn)' : 'none'
              }}
              onClick={this.toggleOpen}>
              <Icon icon='chevronDown' color='#636769' />
            </Button>
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
