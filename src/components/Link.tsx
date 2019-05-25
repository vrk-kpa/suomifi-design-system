import React, { CSSProperties, ReactNode } from 'react'
import { Link as GatsbyLink } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import { Text } from 'components/ResponsiveComponents'

// TODO: use suomifi-link when it supports passing components, so can be used with gatsby-link
const linkStyle = [
  {
    color: suomifiTheme.colors.highlightBase,
    fontSize: '16px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  `&:focus { ${suomifiTheme.outlines.basic} }`
]

const Link = ({ icon, text, url, style }: Props): JSX.Element => (
  <div style={{ display: 'inline-flex', alignItems: 'center' }}>
    {icon && (
      <span style={{ display: 'inline-flex', marginRight: '.5rem' }}>
        {icon}
      </span>
    )}
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
  </div>
)

export interface Props {
  icon?: ReactNode
  text: string
  url: string
  style?: CSSProperties
}

export default Link
