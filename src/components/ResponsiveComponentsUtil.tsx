import React, { ComponentClass } from 'react';

import { Desktop, MobileOrTablet } from 'components/Responsive';

export const getResponsiveComponent = (Comp: Function): Function => {
  const Wrapper = (props): JSX.Element => (
    <>
      <Desktop>
        <Comp {...props} />
      </Desktop>
      <MobileOrTablet>
        <Comp smallScreen {...props} />
      </MobileOrTablet>
    </>
  );

  return Wrapper;
};

const getVariants = (Comp: ComponentClass): Record<string, Function> =>
  Object.keys(Comp)
    .map(key => ({
      [key]: getResponsiveComponent(Comp[key]),
    }))
    .reduce((obj, item) => ({ ...obj, ...item }), {});

export const addResponsiveness = (
  DestComp: ComponentClass,
  SourceComp: ComponentClass,
): void => {
  Object.assign(DestComp, {
    ...getVariants(SourceComp),
  });
};
