import React from 'react';
import Responsive, { MediaQueryProps } from 'react-responsive';

export const Desktop = (props: MediaQueryProps): JSX.Element => (
  <Responsive {...props} minWidth={992} />
);
export const MobileOrTablet = (props: MediaQueryProps): JSX.Element => (
  <Responsive {...props} maxWidth={991} />
);
export const Tablet = (props: MediaQueryProps): JSX.Element => (
  <Responsive {...props} minWidth={768} maxWidth={991} />
);
export const Mobile = (props: MediaQueryProps): JSX.Element => (
  <Responsive {...props} maxWidth={767} />
);
