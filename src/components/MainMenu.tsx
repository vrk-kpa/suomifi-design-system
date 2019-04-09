import React, { Component } from 'react'
import { Icon, suomifiTheme, Button } from 'suomifi-ui-components'
import { NamespacesConsumer } from 'react-i18next'

import MainMenuItem from './MainMenuItem'
import { MainNavData } from './MainNavData'
import LanguageSwitcher from './LanguageSwitcher'

class MainMenu extends Component<Props, State> {
  public constructor(props: Props) {
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
    const { mainNavData } = this.props

    return (
      <NamespacesConsumer>
        {t => (
          <div style={{ position: 'relative' }}>
            <Button
              aria-label={t('common:open.navigation.main')}
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
              <div
                style={{
                  position: 'absolute',
                  top: '50px',
                  right: 0,
                  zIndex: 1000,
                  width: '20rem',
                  background: suomifiTheme.colors.white,
                  border: '1px solid #C9CDCF',
                  boxShadow: suomifiTheme.shadows.menuShadow
                }}>
                <nav aria-label={t('common:navigation.main')}>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {mainNavData.items.map(item => (
                      <li key={item.to}>
                        <MainMenuItem to={item.to}>{item.label}</MainMenuItem>
                      </li>
                    ))}
                  </ul>
                </nav>
                <LanguageSwitcher.list />
              </div>
            )}
          </div>
        )}
      </NamespacesConsumer>
    )
  }
}

interface Props {
  mainNavData: MainNavData
}

interface State {
  isOpen: boolean
}

export default MainMenu
