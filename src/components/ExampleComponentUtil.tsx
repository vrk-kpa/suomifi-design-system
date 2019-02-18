import React, { ReactNode } from 'react'

const getComponentWithDisplayName = (
  Comp: Function,
  displayName: string
): Function => {
  const Wrapper = (props): JSX.Element => <Comp {...props} />
  Wrapper.displayName = displayName
  return Wrapper
}

export const getVariants = (
  Comp: ReactNode,
  displayName: string
): Record<string, Function> =>
  Object.keys(Comp)
    .map(key => ({
      [key]: getComponentWithDisplayName(Comp[key], `${displayName}.${key}`)
    }))
    .reduce((obj, item) => ({ ...obj, ...item }), {})
