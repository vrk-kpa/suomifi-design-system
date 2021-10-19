import React, { ReactNode } from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';
import styled from 'styled-components';

import { focusOutline } from './utils/outline';

const StyledA = styled('a')`
  position: 'absolute';
  z-index: 10000;
  left: '-1000px';
  margin: ${defaultSuomifiTheme.spacing.s};
  padding: ${defaultSuomifiTheme.spacing.xs};
  background: ${defaultSuomifiTheme.colors.highlightLight3};
  border: 1px solid ${defaultSuomifiTheme.colors.depthLight1};
  color: ${defaultSuomifiTheme.colors.blackBase};
  text-decoration: 'none';
  &:focus {
    position: 'absolute';
    left: 'auto';
    ${focusOutline};
  }
`;

const BypassLink = ({ to, children }: Props): JSX.Element => (
  <StyledA href={to}>{children}</StyledA>
);

interface Props {
  to: string;
  children: ReactNode;
}

export default BypassLink;
