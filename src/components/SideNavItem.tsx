import React, { Component, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { defaultSuomifiTheme, Icon, Button } from 'suomifi-ui-components';
import { Link } from 'gatsby';
import { focusOutline } from './utils/outline';
import { isFrontPage } from 'components/LinkUtil';

const StyledLink = styled(({ level, ...passProps }) => <Link {...passProps} />)`
  ${({ level }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.2rem;
    padding-left: ${level + 0.2}rem;
    padding-right: ${defaultSuomifiTheme.spacing.xs};
    border-bottom: 1px solid ${defaultSuomifiTheme.colors.depthSecondary};
    color: ${defaultSuomifiTheme.colors.highlightBase};
    text-decoration: none;
    text-transform: ${level === 1 ? 'uppercase' : 'none'};
    &:hover {
      background: ${defaultSuomifiTheme.colors.depthSecondary};
      color: ${defaultSuomifiTheme.colors.brandBase};
    }
    &:focus {
      ${focusOutline}
    }
  `}
`;
class SideNavItem extends Component<Props> {
  private toggleOpen = (event: MouseEvent | KeyboardEvent): void => {
    event.preventDefault();
    const { to, handleToggle } = this.props;
    handleToggle(to);
  };

  public render(): JSX.Element {
    const {
      to,
      showAsTo,
      isPartialMatch,
      children,
      hasChildren,
      isOpen,
      level,
    } = this.props;

    return (
      <StyledLink
        to={to}
        level={level}
        getProps={({ isCurrent, isPartiallyCurrent }) => {
          const isPartiallyCurrentPage = showAsTo
            ? isPartialMatch(showAsTo)
            : isPartiallyCurrent;

          if (!isFrontPage(to) && isPartiallyCurrentPage && !isCurrent) {
            return {
              style: {
                fontWeight: 600,
              },
            };
          }

          if (isCurrent) {
            return {
              style: {
                background: defaultSuomifiTheme.colors.depthSecondary,
                color: defaultSuomifiTheme.colors.brandBase,
                fontWeight: 600,
              },
            };
          }
        }}
      >
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
              transform: isOpen(to) ? 'rotate(.5turn)' : 'none',
            }}
            onClick={this.toggleOpen}
          >
            <Icon
              icon="chevronDown"
              color={defaultSuomifiTheme.colors.depthDark1}
            />
          </Button>
        )}
      </StyledLink>
    );
  }
}

interface Props {
  to: string;
  // use only when partially current match need to differ from actual path
  showAsTo?: string;
  isPartialMatch?: Function;
  children: ReactNode;
  hasChildren: boolean;
  isOpen: Function;
  handleToggle: Function;
  level: number;
}

export default SideNavItem;
