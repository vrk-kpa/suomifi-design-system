import { graphql } from 'gatsby'

export const query = graphql`
  fragment AllLocalesFragment on Query {
    locales: allLocale(filter: { lng: { eq: $lng } }) {
      ...LocaleFragment
    }
  }
`
