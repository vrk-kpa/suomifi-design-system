import React from 'react'
import { Link } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import { Heading, Text } from './ResponsiveComponents'

const linkStyle = [
  {
    padding: '.5rem 1rem',
    border: `1px solid ${suomifiTheme.colors.whiteBase}`,
    borderRadius: '2px',
    color: suomifiTheme.colors.whiteBase,
    textDecoration: 'none'
  },
  `&:focus { ${suomifiTheme.outlines.basic} }`
]

const Annotation = ({ title, description, link }: Props): JSX.Element => (
  <div
    style={{
      margin: 0,
      padding: '1rem',
      background: suomifiTheme.colors.highlightBase,
      display: 'flex',
      justifyContent: 'center'
    }}>
    <div
      style={{
        width: '100%',
        maxWidth: 900,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <div style={{ flex: '1 1 70%' }}>
        <Heading.h2 color='whiteBase'>{title}</Heading.h2>
        {description && (
          <p style={{ margin: '1rem 2rem 0 0' }}>
            <Text color='whiteBase'>{description}</Text>
          </p>
        )}
      </div>
      {link && !!link.text && !!link.url && (
        <div style={{ margin: '1.5rem 0 1rem 0' }}>
          <Text smallScreen>
            {link.url.startsWith('/') ? (
              <Link to={link.url} css={linkStyle}>
                {link.text}
              </Link>
            ) : (
              <a
                href={link.url}
                css={linkStyle}
                rel='noopener noreferrer'
                target='_blank'>
                {link.text}
              </a>
            )}
          </Text>
        </div>
      )}
    </div>
  </div>
)

interface Props {
  title: string
  description: string
  link?: Link
}

interface Link {
  text: string
  url: string
}

export default Annotation
