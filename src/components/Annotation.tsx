import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

import { Heading, Text } from './ResponsiveComponents'
import Link from './Link'

const linkStyle = {
  padding: '.5rem 1rem',
  border: `1px solid ${suomifiTheme.colors.whiteBase}`,
  borderRadius: '2px',
  color: suomifiTheme.colors.whiteBase,
  fontSize: '16px',
  '&:hover': {
    textDecoration: 'none'
  }
}

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
          <Link text={link.text} url={link.url} style={linkStyle} />
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
