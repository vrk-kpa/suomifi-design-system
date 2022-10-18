import { Component } from 'react';
import { Text as OrigText, TextProps } from 'suomifi-ui-components';

import { getResponsiveComponent } from 'components/ResponsiveComponentsUtil';

export class Text extends Component<TextProps> {
  public render(): JSX.Element {
    return getResponsiveComponent(OrigText)(this.props);
  }
}
