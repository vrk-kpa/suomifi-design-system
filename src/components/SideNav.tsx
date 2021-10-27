import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { defaultSuomifiTheme, Icon, Button, Text } from 'suomifi-ui-components';
import { withPrefix } from 'gatsby';
import { WindowLocation } from '@reach/router';

import SideNavItem from 'components/SideNavItem';
import { SideNavData, SideNavItemData } from 'components/SideNavData';
import { Desktop, MobileOrTablet } from 'components/Responsive';

const StyledLi = styled(
  ({ level, item, children, isCurrent, isPartiallyCurrent, ...passProps }) => {
    return <li {...passProps}>{children}</li>;
  },
)`
  ${({ level, isCurrent, isPartiallyCurrent, item }) => {
    return css`
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        bottom: 0;
        border-left: ${level === 1
          ? (
              item.showAsTo
                ? isCurrent(item.to) || isPartiallyCurrent(item.showAsTo)
                : isPartiallyCurrent(item.to)
            )
            ? `4px solid ${defaultSuomifiTheme.colors.brandBase}`
            : 0
          : 0};
      }
    `;
  }}
`;

class SideNav extends Component<Props, State> {
  private SIDENAVSTATE_KEY = 'sideNavState';

  public constructor(props: Props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isOpen: {},
    };
  }

  private getSessionState = (): State => {
    return JSON.parse(sessionStorage.getItem(this.SIDENAVSTATE_KEY)) || {};
  };

  private setSessionState = (state: State): void => {
    try {
      sessionStorage.setItem(this.SIDENAVSTATE_KEY, JSON.stringify(state));
    } catch (error) {
      // ignore, just cannot store state
    }
  };

  public componentDidMount = () => {
    const sessionState = this.getSessionState();

    const currentPath = this.getCurrentPath();
    const openStatesForPath = this.getPathTree(currentPath)
      .map((path) => ({
        [path]: true,
      }))
      .reduce((obj, item) => ({ ...obj, ...item }), {});

    sessionState.isOpen = {
      ...sessionState.isOpen,
      ...openStatesForPath,
    };

    this.setState(() => {
      this.setSessionState(sessionState);
      return sessionState;
    });
  };

  private getPathTree = (path: string, res = []): string[] => {
    if (path) {
      let part = '/' + path.split('/').join('/');
      part += part.endsWith('/') ? '' : '/';
      res.push(part);

      const rest = path.split('/').slice(0, -1).join('/');
      this.getPathTree(rest, res);
    }
    return res;
  };

  private getCurrentPath = (): string => {
    const { location } = this.props;
    const match = location.pathname.match(RegExp(withPrefix('/(.*)')));
    return match && match[1];
  };

  private isPartiallyCurrent = (to: string): boolean => {
    const currentPath = this.getCurrentPath();
    return to && currentPath && currentPath.startsWith(to.substr(1));
  };

  private isCurrent = (to: string): boolean => {
    const currentPath = this.getCurrentPath();
    return to && currentPath && currentPath === to.substr(1);
  };

  private isNavOpen = (): boolean => this.state.isNavOpen;

  private toggleNavOpen = () => {
    this.setState((prevState) => {
      this.setSessionState({ ...prevState, isNavOpen: !prevState.isNavOpen });
      return {
        isNavOpen: !prevState.isNavOpen,
      };
    });
  };

  private isOpen = (to: string): boolean => this.state.isOpen[to];

  private toggleOpen = (to: string): void => {
    this.setState((prevState) => {
      prevState.isOpen[to] = !prevState.isOpen[to];
      this.setSessionState(prevState);
      return {
        isOpen: prevState.isOpen,
      };
    });
  };

  private hasChildren = (item: SideNavItemData): boolean =>
    !!item.children && item.children.length > 0;

  private Title = () => {
    const { sideNavData } = this.props;

    return (
      <div
        style={{
          padding: defaultSuomifiTheme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${defaultSuomifiTheme.colors.depthSecondary}`,
          textShadow: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ fontSize: '40px', lineHeight: '1em' }}>
            {sideNavData.icon}
          </div>
          <Text
            variant="bold"
            style={{ marginLeft: defaultSuomifiTheme.spacing.xs }}
          >
            {sideNavData.title}
          </Text>
        </div>
        <MobileOrTablet>
          <div
            style={{
              float: 'right',
              background: 'none',
              marginRight: defaultSuomifiTheme.spacing.s,
              padding: 0,
              border: 0,
              width: '16px',
              height: '16px',
              fontSize: '16px',
              transform: this.isNavOpen() ? 'rotate(.5turn)' : 'none',
            }}
          >
            <Icon
              icon="chevronDown"
              color={defaultSuomifiTheme.colors.depthDark1}
            />
          </div>
        </MobileOrTablet>
      </div>
    );
  };

  private renderNavItems = (items: SideNavItemData[], level: number) => (
    <ul
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
        listStyle: 'none',
      }}
    >
      {items.map((item) => (
        <StyledLi
          key={item.to}
          isCurrent={this.isCurrent}
          isPartiallyCurrent={this.isPartiallyCurrent}
          item={item}
          level={level}
        >
          <SideNavItem
            to={item.to}
            showAsTo={item.showAsTo}
            isPartialMatch={this.isPartiallyCurrent}
            hasChildren={this.hasChildren(item)}
            isOpen={this.isOpen}
            handleToggle={this.toggleOpen}
            level={level}
          >
            {item.label}
          </SideNavItem>
          {this.hasChildren(item) &&
            !!this.state.isOpen[item.to] &&
            this.renderNavItems(item.children, level + 1)}
        </StyledLi>
      ))}
    </ul>
  );

  public render(): JSX.Element {
    const { sideNavData } = this.props;

    return (
      <nav
        aria-label={sideNavData.title}
        style={{
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          background: `${defaultSuomifiTheme.colors.whiteBase}`,
        }}
      >
        <Desktop>
          <this.Title />
          {this.renderNavItems(sideNavData.items, 1)}
        </Desktop>
        <MobileOrTablet>
          <Button
            aria-expanded={this.isNavOpen()}
            onClick={this.toggleNavOpen}
            fullWidth
            style={{
              background: 'none',
              padding: 0,
              border: 0,
              lineHeight: '1em',
            }}
          >
            <this.Title />
          </Button>
          {this.isNavOpen() && this.renderNavItems(sideNavData.items, 1)}
        </MobileOrTablet>
      </nav>
    );
  }
}

interface Props {
  location: WindowLocation;
  sideNavData: SideNavData;
}

interface State {
  isNavOpen: boolean;
  isOpen: object;
}

export default SideNav;
