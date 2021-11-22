import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { defaultSuomifiTheme } from 'suomifi-ui-components';
import { focusOutline } from './utils/outline';
import { isFrontPage } from 'components/LinkUtil';

const StyledLink = styled(Link)`
  padding: ${defaultSuomifiTheme.spacing.insetM};
  line-height: 2.8rem;
  white-space: nowrap;
  color: ${defaultSuomifiTheme.colors.blackBase};
  text-decoration: none;
  &:hover {
    border-bottom: 4px solid ${defaultSuomifiTheme.colors.highlightBase};
  }
  &:focus {
    ${focusOutline};
  }
`;

const NavItem = ({ to, children }: Props): JSX.Element => (
  <StyledLink
    to={to}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      if (isCurrent || (!isFrontPage(to) && isPartiallyCurrent)) {
        return {
          style: {
            borderBottom: `4px solid ${defaultSuomifiTheme.colors.highlightBase}`,
          },
        };
      }
    }}
  >
    {children}
  </StyledLink>
);

interface Props {
  to: string;
  children: ReactNode;
}

export default NavItem;
