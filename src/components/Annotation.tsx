import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

import { Heading, Text } from 'components/ResponsiveComponents'
import Link, { Props as LinkProps } from 'components/Link'
import { Desktop, Mobile, Tablet } from 'components/Responsive'

const linkStyle = {
  padding: '.5rem 1rem',
  border: `1px solid ${suomifiTheme.colors.whiteBase}`,
  borderRadius: '2px',
  '&:link,:visited,:focus,:hover,:active': {
    fontSize: '16px',
    color: suomifiTheme.colors.whiteBase,
    textDecoration: 'none'
  }
}

const Content = ({
  title,
  description,
  link,
  center = false
}: Props & { center?: boolean }): JSX.Element => (
  <div
    style={{
      width: '100%',
      maxWidth: 900,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: center ? 'center' : 'space-between'
    }}>
    <div
      style={{
        flex: center ? '1 1 100%' : '1 1 70%',
        textAlign: center ? 'center' : 'initial'
      }}>
      <Heading.h2 color='whiteBase' style={{ textAlign: 'inherit' }}>
        {title}
      </Heading.h2>
      {description && (
        <p style={{ margin: '1rem 0 0 0' }}>
          <Text color='whiteBase'>{description}</Text>
        </p>
      )}
    </div>
    {link && !!link.text && !!link.url && (
      <div
        style={{
          margin: '1.5rem 0 1rem 0',
          marginLeft: center ? 0 : '2rem'
        }}>
        <Link text={link.text} url={link.url} style={linkStyle} />
      </div>
    )}
  </div>
)

const Annotation = ({ title, description, link }: Props): JSX.Element => (
  <div
    style={{
      margin: 0,
      padding: '1rem',
      background: suomifiTheme.colors.highlightBase,
      display: 'flex',
      justifyContent: 'center'
    }}>
    <Desktop>
      <Content title={title} description={description} link={link} />
    </Desktop>
    <Tablet>
      <Content title={title} description={description} link={link} />
    </Tablet>
    <Mobile>
      <Content title={title} description={description} link={link} center />
    </Mobile>
  </div>
)

interface Props {
  title: string
  description: string
  link?: LinkProps
}

export default Annotation
