import React, { Component } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import SideNavItem from './SideNavItem'
import { SideNavData } from './SideNavData'
import { Icon } from './Icon'

class SideNav extends Component<Props, State> {
  public constructor(props) {
    super(props)

    this.state = {
      isOpen: {}
    }
  }

  private toggleOpen = (to): void => {
    this.setState(prevState => {
      prevState.isOpen[to] = !prevState.isOpen[to]
      return {
        isOpen: prevState.isOpen
      }
    })
  }

  private renderNavItems = (items, level) => (
    <ul
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
        listStyle: 'none'
      }}>
      {items.map(item => (
        <li key={item.to}>
          <SideNavItem
            to={item.to}
            hasChildren={item.children ? item.children.length > 0 : false}
            handleToggle={this.toggleOpen}
            level={level}>
            {item.label}
          </SideNavItem>
          {item.children &&
            this.state.isOpen[item.to] &&
            this.renderNavItems(item.children, ++level)}
        </li>
      ))}
    </ul>
  )

  public render(): JSX.Element {
    const { sideNavData } = this.props

    return (
      <NamespacesConsumer>
        {t => (
          <nav
            style={{
              width: '22rem',
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
              background: `${suomifiTheme.colors.white}`,
              border: '1px solid #C9CDCF'
            }}>
            <div
              style={{
                padding: '.5rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center'
              }}>
              <div style={{ height: '40px' }}>
                <Icon.solution />
              </div>
              <div style={{ marginLeft: '.5rem' }}>{sideNavData.title}</div>
            </div>
            {this.renderNavItems(sideNavData.items, 1)}
          </nav>
        )}
      </NamespacesConsumer>
    )
  }
}

interface Props {
  sideNavData: SideNavData
}

interface State {
  isOpen: object
}

export default SideNav
