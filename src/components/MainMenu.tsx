import React, { Component } from 'react';
import { Icon, defaultSuomifiTheme, Button } from 'suomifi-ui-components';

import commonContent from '../../locale/fi/common.json';
import MainMenuItem from 'components/MainMenuItem';
import { MainNavData } from 'components/MainNavData';
import { menuShadow } from './utils/shadow';

class MainMenu extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  private isOpen = (): boolean => this.state.isOpen;

  private toggleOpen = (): void => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  public render(): JSX.Element {
    const { mainNavData } = this.props;

    return (
      <div style={{ position: 'relative' }}>
        <Button
          aria-label={commonContent['open.navigation.main']}
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
            <Icon icon="close" color={defaultSuomifiTheme.colors.depthDark1} />
          ) : (
            <Icon icon="menu" color={defaultSuomifiTheme.colors.depthDark1} />
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
              background: defaultSuomifiTheme.colors.whiteBase,
              border: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
              boxShadow: menuShadow,
            }}
          >
            <nav aria-label={commonContent['navigation.main']}>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {mainNavData.items.map((item) => (
                  <li key={item.to}>
                    <MainMenuItem to={item.to}>{item.label}</MainMenuItem>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
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
