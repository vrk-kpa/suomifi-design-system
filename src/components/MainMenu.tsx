import React, { Component } from 'react'
import { Icon, suomifiTheme, Button } from 'suomifi-ui-components'

import { NamespacesConsumer } from 'react-i18next'
import MainMenuItem from './MainMenuItem'

class MainMenu extends Component<{}, State> {
  public constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  private isOpen = (): boolean => this.state.isOpen

  private toggleOpen = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      }
    })
  }

  public render(): JSX.Element {
    return (
      <NamespacesConsumer>
        {t => (
          <div style={{ position: 'relative' }}>
            <Button
              aria-expanded={this.isOpen()}
              style={{
                background: 'none',
                padding: 0,
                border: 0,
                width: '40px',
                height: '40px',
                minWidth: '40px',
                minHeight: '40px',
                fontSize: '24px'
              }}
              onClick={this.toggleOpen}>
              {this.isOpen() ? (
                <Icon icon='close' color='#636769' />
              ) : (
                <Icon icon='menu' color='#636769' />
              )}
            </Button>
            {this.isOpen() && (
              <nav
                aria-label={t('common:navigation.main')}
                style={{
                  position: 'absolute',
                  top: '3rem',
                  right: 0,
                  zIndex: 1000,
                  background: suomifiTheme.colors.white,
                  border: '1px solid #C9CDCF',
                  boxShadow: suomifiTheme.shadows.menuShadow
                }}>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {[
                    { to: '/', label: t('home:title') },
                    { to: '/components/', label: t('components:title') },
                    { to: '/instructions/', label: t('instructions:title') }
                  ].map(item => (
                    <li key={item.to}>
                      <MainMenuItem to={item.to}>{item.label}</MainMenuItem>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        )}
      </NamespacesConsumer>
    )
  }
}

interface State {
  isOpen: boolean
}

export default MainMenu
