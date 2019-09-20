import { graphql } from 'gatsby';

export const fragment = graphql`
  fragment ExamplesFragment on Query {
    examples: allRawCode {
      edges {
        node {
          name
          content
        }
      }
    }
  }
`;
