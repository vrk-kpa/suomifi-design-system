import React, { Component, ReactNode, MouseEvent } from 'react';
import { suomifiDesignTokens, Icon, Button } from 'suomifi-ui-components';
import { Link } from '@wapps/gatsby-plugin-i18next';
import { focusOutline } from './utils/outline';
import { isFrontPage } from 'components/LinkUtil';

class SideNavItem extends Component<Props> {
  private toggleOpen = (event: MouseEvent) => {
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
      <Link
        to={to}
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '3.2rem',
            paddingLeft: level + '.2rem',
            paddingRight: suomifiDesignTokens.spacing.s,
            borderBottom: `1px solid ${suomifiDesignTokens.colors.depthSecondary}`,
            color: suomifiDesignTokens.colors.highlightBase,
            textDecoration: 'none',
            textTransform: level === 1 ? 'uppercase' : 'none',
            '&:hover': {
              background: suomifiDesignTokens.colors.depthSecondary,
              color: suomifiDesignTokens.colors.brandBase,
            },
          },
          `&:focus { ${focusOutline} }`,
        ]}
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
                background: suomifiDesignTokens.colors.depthSecondary,
                color: suomifiDesignTokens.colors.brandBase,
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
              color={suomifiDesignTokens.colors.depthDark1}
            />
          </Button>
        )}
      </Link>
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
