import React, { ComponentClass } from 'react';

type SourceOrDestinationComp = ComponentClass | Function;

const getComponentWithDisplayName = (
  Comp: Function,
  displayName: string,
): Function => {
  const Wrapper = (props): JSX.Element => <Comp {...props} />;
  Wrapper.displayName = displayName;
  return Wrapper;
};

const getVariants = (
  Comp: SourceOrDestinationComp,
  displayName: string,
): Record<string, Function> =>
  Object.keys(Comp)
    .map((key) => ({
      [key]: getComponentWithDisplayName(Comp[key], `${displayName}.${key}`),
    }))
    .reduce((obj, item) => ({ ...obj, ...item }), {});

export const addDisplayNames = (
  DestComp: SourceOrDestinationComp,
  SourceComp: SourceOrDestinationComp,
  displayName: string,
): void => {
  Object.assign(DestComp, {
    displayName,
    ...getVariants(SourceComp, displayName),
  });
};
