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
    const {
      to,
      showAsTo,
      isPartialMatch,
      children,
      hasChildren,
      isOpen,
      level
    } = this.props

    return (
      <Link
        to={to}
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '3.2rem',
            paddingLeft: level + 'rem',
            paddingRight: '.5rem',
            borderBottom: `1px solid ${suomifiTheme.colors.depthSecondary}`,
            color: suomifiTheme.colors.highlightBase,
            textDecoration: 'none',
            '&:hover': {
              background: suomifiTheme.colors.depthSecondary,
              color: suomifiTheme.colors.brandBase
            }
          },
          `&:focus { ${suomifiTheme.outlines.basic} }`
        ]}
        getProps={({ isCurrent, isPartiallyCurrent }) => {
          const isPartiallyCurrentPage = showAsTo
            ? isPartialMatch(showAsTo)
            : isPartiallyCurrent

          if (!this.isFrontPage(to) && isPartiallyCurrentPage && !isCurrent) {
            return {
              style: {
                fontWeight: 600
              }
            }
          }

          if (isCurrent) {
            return {
              style: {
                background: suomifiTheme.colors.depthSecondary,
                color: suomifiTheme.colors.brandBase,
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
              transform: isOpen(to) ? 'rotate(.5turn)' : 'none'
            }}
            onClick={this.toggleOpen}>
            <Icon icon='chevronDown' color={suomifiTheme.colors.depthDark27} />
          </Button>
        )}
      </Link>
    )
  }
}

interface Props {
  to: string
  // use only when partially current match need to differ from actual path
  showAsTo?: string
  isPartialMatch?: Function
  children: ReactNode
  hasChildren: boolean
  isOpen: Function
  handleToggle: Function
  level: number
}

export default SideNavItem
