import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

import { Heading, Text } from 'components/ResponsiveComponents'
import { Desktop, Mobile, Tablet } from 'components/Responsive'

const Content = ({
  title,
  description,
  center = false,
  compact = false
}: Props & { center?: boolean; compact?: boolean }): JSX.Element => (
  <div
    style={{
      margin: 0,
      padding: compact ? '2rem 1rem 5rem 1rem' : '6rem 1rem 8rem 1rem',
      background: suomifiTheme.colors.brandBase,
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
        justifyContent: center ? 'center' : 'space-between'
      }}>
      <div
        style={{
          flex: center ? '1 1 100%' : '1 1 70%',
          textAlign: center ? 'center' : 'initial'
        }}>
        <Heading.h1hero color='whiteBase' style={{ textAlign: 'inherit' }}>
          {title}
        </Heading.h1hero>
        {description && (
          <p style={{ margin: compact ? '1.5rem 0 0 0' : '3rem 0 0 0' }}>
            <Text.lead color='whiteBase'>{description}</Text.lead>
          </p>
        )}
      </div>
    </div>
  </div>
)

const Hero = ({ title, description }: Props): JSX.Element => (
  <>
    <Desktop>
      <Content title={title} description={description} />
    </Desktop>
    <Tablet>
      <Content title={title} description={description} />
    </Tablet>
    <Mobile>
      <Content title={title} description={description} center compact />
    </Mobile>
  </>
)

interface Props {
  title: string
  description: string
}

export default Hero
