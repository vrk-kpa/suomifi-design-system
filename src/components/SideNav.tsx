import React, { Component } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { suomifiTheme } from 'suomifi-ui-components'
import { withPrefix } from 'gatsby'
import { WindowLocation } from '@reach/router'

import SideNavItem from './SideNavItem'
import { SideNavData, SideNavItemData } from './SideNavData'

class SideNav extends Component<Props, State> {
  private SIDENAVSTATE_KEY: string = 'sideNavState'

  public constructor(props) {
    super(props)

    this.state = {
      isOpen: {}
    }
  }

  private getSessionState = (): State => {
    return JSON.parse(sessionStorage.getItem(this.SIDENAVSTATE_KEY)) || {}
  }

  private setSessionState = (state: State): void => {
    try {
      sessionStorage.setItem(this.SIDENAVSTATE_KEY, JSON.stringify(state))
    } catch (error) {
      // ignore, just cannot store state
    }
  }

  public componentDidMount = () => {
    const sessionState = this.getSessionState()

    const currentPath = this.getCurrentPath()
    const openStatesForPath = this.getPathTree(currentPath)
      .map(path => ({
        [path]: true
      }))
      .reduce((obj, item) => ({ ...obj, ...item }), {})

    sessionState.isOpen = {
      ...sessionState.isOpen,
      ...openStatesForPath
    }

    this.setState(() => {
      this.setSessionState(sessionState)
      return sessionState
    })
  }

  private getPathTree = (path: string, res = []): string[] => {
    if (path) {
      let part = '/' + path.split('/').join('/')
      part += part.endsWith('/') ? '' : '/'
      res.push(part)

      const rest = path
        .split('/')
        .slice(0, -1)
        .join('/')
      this.getPathTree(rest, res)
    }
    return res
  }

  private getCurrentPath = (): string => {
    const { location } = this.props
    const match = location.pathname.match(RegExp(withPrefix('/../(.*)')))
    return match && match[1]
  }

  private iscurrent = (to: string): boolean => {
    const currentPath = this.getCurrentPath()
    return to && currentPath && currentPath.startsWith(to.substr(1))
  }

  private isOpen = (to: string): boolean => this.state.isOpen[to]

  private toggleOpen = (to: string): void => {
    this.setState(prevState => {
      prevState.isOpen[to] = !prevState.isOpen[to]
      this.setSessionState(prevState)
      return {
        isOpen: prevState.isOpen
      }
    })
  }

  private hasChildren = (item: SideNavItemData): boolean =>
    !!item.children && item.children.length > 0

  private renderNavItems = (items: SideNavItemData[], level: number) => (
    <ul
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
        listStyle: 'none'
      }}>
      {items.map(item => (
        <li
          key={item.to}
          style={{
            borderLeft:
              level === 1
                ? this.iscurrent(item.to)
                  ? `4px solid ${suomifiTheme.colors.brandColor}`
                  : '4px solid transparent'
                : 'none'
          }}>
          <SideNavItem
            to={item.to}
            hasChildren={this.hasChildren(item)}
            isOpen={this.isOpen}
            handleToggle={this.toggleOpen}
            level={level}>
            {item.label}
          </SideNavItem>
          {this.hasChildren(item) &&
            !!this.state.isOpen[item.to] &&
            this.renderNavItems(item.children, level + 1)}
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
            aria-label={sideNavData.title}
            style={{
              width: '22rem',
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
              background: `${suomifiTheme.colors.white}`
            }}>
            <div
              style={{
                padding: '.5rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #EEF5FF'
              }}>
              <div style={{ width: '40px', height: '40px' }}>
                {sideNavData.icon}
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
  location: WindowLocation
  sideNavData: SideNavData
}

interface State {
  isOpen: object
}

export default SideNav
