import { graphql } from 'gatsby';

export const fragment = graphql`
  fragment AllLocalesFragment on Query {
    locales: allLocale(filter: { lng: { eq: $lng } }) {
      ...LocaleFragment
    }
  }
`;
