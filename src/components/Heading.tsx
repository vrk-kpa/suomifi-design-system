import { Heading as OrigHeading } from 'suomifi-ui-components'

import {
  addResponsiveness,
  getResponsiveComponent
} from 'components/ResponsiveComponentsUtil'

export class Heading extends OrigHeading {
  public render(): JSX.Element {
    return getResponsiveComponent(OrigHeading)(this.props)
  }
}
addResponsiveness(Heading, OrigHeading)
