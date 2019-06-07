import React, { Component, CSSProperties } from 'react'
import { Paragraph as OrigParagraph, suomifiTheme } from 'suomifi-ui-components'

import {
  addResponsiveness,
  getResponsiveComponent
} from 'components/ResponsiveComponentsUtil'

class CustomParagraph extends Component<Props> {
  public static lead = (props: Props) => {
    const { smallScreen, style, ...passProps } = props
    return (
      <OrigParagraph
        style={{
          margin: `${suomifiTheme.spacing.l} 0`,
          lineHeight: smallScreen ? '28px' : '30px',
          ...style
        }}
        {...passProps}
      />
    )
  }

  public static secondary = (props: Props) => {
    const { smallScreen, style, ...passProps } = props
    return (
      <OrigParagraph
        style={{
          margin: `${suomifiTheme.spacing.m} 0`,
          lineHeight: '24px',
          ...style
        }}
        {...passProps}
      />
    )
  }

  public render(): JSX.Element {
    const { smallScreen, style, ...passProps } = this.props
    return (
      <OrigParagraph
        style={{
          margin: `${suomifiTheme.spacing.l} 0`,
          lineHeight: '27px',
          ...style
        }}
        {...passProps}
      />
    )
  }
}

interface Props {
  smallScreen?: boolean
  style?: CSSProperties
}

export class Paragraph extends CustomParagraph {
  public render(): JSX.Element {
    return getResponsiveComponent(CustomParagraph)(this.props)
  }
}
addResponsiveness(Paragraph, CustomParagraph)
