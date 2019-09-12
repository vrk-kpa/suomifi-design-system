import React, { Component } from 'react';
import { GatsbyImageProps } from 'gatsby-image';

import ButtonsMobileFI from 'components/images/ButtonsMobileFI';

interface Props extends GatsbyImageProps {
  imgKey: string;
}

export class Image extends Component<Props> {
  private images = {
    ButtonsMobileFI: ButtonsMobileFI,
  };

  public render(): JSX.Element {
    const { imgKey, ...rest } = this.props;
    const Comp = this.images[imgKey];

    return <Comp {...rest} />;
  }
}
