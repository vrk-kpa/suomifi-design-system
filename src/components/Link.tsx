import React, { CSSProperties } from 'react'
import { Link as GatsbyLink } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import { Text } from './ResponsiveComponents'

// TODO: use suomifi-link when it supports passing components, so can be used with gatsby-link
const linkStyle = [
  {
    color: suomifiTheme.colors.highlightBase,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  `&:focus { ${suomifiTheme.outlines.basic} }`
]

const Link = ({ text, url, style }: Props): JSX.Element => (
  <Text>
    {url.startsWith('/') ? (
      <GatsbyLink to={url} css={linkStyle.concat(style)}>
        {text}
      </GatsbyLink>
    ) : (
      <a
        href={url}
        css={linkStyle.concat(style)}
        rel='noopener noreferrer'
        target='_blank'>
        {text}
      </a>
    )}
  </Text>
)

interface Props {
  text: string
  url: string
  style?: CSSProperties
}

export default Link