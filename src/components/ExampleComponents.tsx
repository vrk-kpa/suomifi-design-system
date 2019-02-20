import React, { Component } from 'react'
import { Button as OrigButton, ButtonProps } from 'suomifi-ui-components'
import { getVariants } from './ExampleComponentUtil'

export class Button extends Component<ButtonProps> {
  public static displayName = 'Button'

  private static variants = getVariants(OrigButton, Button.displayName)
  public static negative = Button.variants.negative
  public static secondary = Button.variants.secondary
  public static secondarySmall = Button.variants.secondarySmall
  public static secondaryNoborder = Button.variants.secondaryNoborder
  public static tertiary = Button.variants.tertiary

  public render(): JSX.Element {
    return <OrigButton {...this.props} />
  }
}
