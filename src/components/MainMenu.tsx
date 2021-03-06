import React, { Component } from 'react';
import { Icon, suomifiDesignTokens, Button } from 'suomifi-ui-components';
import { Translation } from 'react-i18next';

import MainMenuItem from 'components/MainMenuItem';
import { MainNavData } from 'components/MainNavData';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { menuShadow } from './utils/shadow';

class MainMenu extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  private isOpen = (): boolean => this.state.isOpen;

  private toggleOpen = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  public render(): JSX.Element {
    const { mainNavData } = this.props;

    return (
      <Translation>
        {(t) => (
          <div style={{ position: 'relative' }}>
            <Button
              aria-label={t('common:open.navigation.main')}
              aria-expanded={this.isOpen()}
              aria-haspopup
              style={{
                background: 'none',
                padding: 0,
                border: 0,
                width: '40px',
                height: '40px',
                minWidth: '40px',
                minHeight: '40px',
                fontSize: '24px',
              }}
              onClick={this.toggleOpen}
            >
              {this.isOpen() ? (
                <Icon
                  icon="close"
                  color={suomifiDesignTokens.colors.depthDark1}
                />
              ) : (
                <Icon
                  icon="menu"
                  color={suomifiDesignTokens.colors.depthDark1}
                />
              )}
            </Button>
            {this.isOpen() && (
              <div
                style={{
                  position: 'absolute',
                  top: '50px',
                  right: 0,
                  zIndex: 10000,
                  width: '20rem',
                  background: suomifiDesignTokens.colors.whiteBase,
                  border: `1px solid ${suomifiDesignTokens.colors.depthLight1}`,
                  boxShadow: menuShadow,
                }}
              >
                <nav aria-label={t('common:navigation.main')}>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {mainNavData.items.map((item) => (
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
      </Translation>
    );
  }
}

interface Props {
  mainNavData: MainNavData;
}

interface State {
  isOpen: boolean;
}

export default MainMenu;
