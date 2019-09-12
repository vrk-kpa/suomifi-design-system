import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';

const Image = (props: GatsbyImageProps): JSX.Element => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "buttonsMobileFI.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.image.childImageSharp.fluid} {...props} />}
  />
);

export default Image;
