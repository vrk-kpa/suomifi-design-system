import React, { ComponentClass } from 'react'
import { Heading as OrigHeading, Text as OrigText } from 'suomifi-ui-components'

import { Desktop, MobileOrTablet } from 'components/Responsive'

const getResponsiveComponent = (Comp: Function): Function => {
  const Wrapper = (props): JSX.Element => (
    <>
      <Desktop>
        <Comp {...props} />
      </Desktop>
      <MobileOrTablet>
        <Comp smallScreen {...props} />
      </MobileOrTablet>
    </>
  )

  return Wrapper
}

const getVariants = (Comp: ComponentClass): Record<string, Function> =>
  Object.keys(Comp)
    .map(key => ({
      [key]: getResponsiveComponent(Comp[key])
    }))
    .reduce((obj, item) => ({ ...obj, ...item }), {})

const addResponsiveness = (
  DestComp: ComponentClass,
  SourceComp: ComponentClass
): void => {
  Object.assign(DestComp, {
    ...getVariants(SourceComp)
  })
}

export class Heading extends OrigHeading {
  public render(): JSX.Element {
    return getResponsiveComponent(OrigHeading)(this.props)
  }
}
addResponsiveness(Heading, OrigHeading)

export class Text extends OrigText {
  public render(): JSX.Element {
    return getResponsiveComponent(OrigText)(this.props)
  }
}
addResponsiveness(Text, OrigText)
