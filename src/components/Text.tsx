import React from 'react'
import { Text as OrigText } from 'suomifi-ui-components'

import { addResponsiveness } from 'components/ResponsiveComponentsUtil'

export class Text extends OrigText {
  public render(): JSX.Element {
    // TODO put back when smallScreen style updated in component: return getResponsiveComponent(OrigText)(this.props)
    return <OrigText {...this.props} />
  }
}
addResponsiveness(Text, OrigText)

// TODO remove when smallScreen style updated in component
Text.bold = OrigText.bold
