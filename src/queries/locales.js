import { graphql } from 'gatsby'

export const query = graphql`
  fragment LocalesFragment on Query {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`
