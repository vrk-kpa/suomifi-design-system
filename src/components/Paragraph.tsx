import React, { Component, CSSProperties, ReactNode } from 'react';
import {
  Paragraph as OrigParagraph,
  defaultSuomifiTheme,
} from 'suomifi-ui-components';

import {
  addResponsiveness,
  getResponsiveComponent,
} from 'components/ResponsiveComponentsUtil';

class CustomParagraph extends Component<Props> {
  public render(): JSX.Element {
    const { smallScreen, variant, style, ...passProps } = this.props;

    const spacingStyle = {
      margin:
        variant === 'secondary'
          ? `${defaultSuomifiTheme.spacing.s} 0`
          : `${defaultSuomifiTheme.spacing.xl} 0`,
      lineHeight:
        variant === 'lead' && smallScreen
          ? '28px'
          : variant === 'lead'
          ? '30px'
          : variant === 'secondary'
          ? '24px'
          : '27px',
    };

    return (
      <OrigParagraph
        style={{
          ...spacingStyle,
          ...style,
        }}
        {...passProps}
      />
    );
  }
}

interface Props {
  smallScreen?: boolean;
  style?: CSSProperties;
  variant?: 'lead' | 'secondary';
  children: ReactNode;
}

export class Paragraph extends CustomParagraph {
  public render(): JSX.Element {
    return getResponsiveComponent(CustomParagraph)(this.props);
  }
}
addResponsiveness(Paragraph, CustomParagraph);
