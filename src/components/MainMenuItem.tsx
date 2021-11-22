import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { defaultSuomifiTheme } from 'suomifi-ui-components';
import { Link } from 'gatsby';
import { isFrontPage } from 'components/LinkUtil';
import { focusOutline } from './utils/outline';

const StyledLink = styled(Link)`
  display: 'flex';
  align-items: 'center';
  justify-content: 'space-between';
  height: '3.2rem';
  padding-left: ${defaultSuomifiTheme.spacing.s};
  padding-right: ${defaultSuomifiTheme.spacing.s};
  border-bottom: 1px solid ${defaultSuomifiTheme.colors.depthSecondary};
  color: ${defaultSuomifiTheme.colors.highlightBase};
  text-decoration: 'none';
  white-space: 'nowrap';
  &:hover {
    background: ${defaultSuomifiTheme.colors.depthSecondary};
    color: ${defaultSuomifiTheme.colors.brandBase};
    ${focusOutline}
  }
`;
class MainMenuItem extends Component<Props> {
  public render(): JSX.Element {
    const { to, children } = this.props;

    return (
      <StyledLink
        to={to}
        getProps={({ isCurrent, isPartiallyCurrent }) => {
          if (!isFrontPage(to) && isPartiallyCurrent && !isCurrent) {
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
      </StyledLink>
    );
  }
}

interface Props {
  to: string;
  children: ReactNode;
}

export default MainMenuItem;
