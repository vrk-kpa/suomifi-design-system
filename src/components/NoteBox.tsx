import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

import { Heading, Text } from 'components/ResponsiveComponents'

const NoteBox = ({ title, items }: Props): JSX.Element => (
  <section
    style={{
      background: suomifiTheme.colors.highlightLight50,
      margin: `${suomifiTheme.spacing.l} 0`,
      padding: suomifiTheme.spacing.m,
      border: `1px solid ${suomifiTheme.colors.depthLight13}`
    }}>
    <Heading.h3 as='h2'>{title}</Heading.h3>
    <ul style={{ margin: 0, padding: `0 0 0 ${suomifiTheme.spacing.m}` }}>
      {items.map(
        (item, index) =>
          !!item && (
            <li key={index} style={{ margin: suomifiTheme.spacing.m }}>
              <Text>{item}</Text>
            </li>
          )
      )}
    </ul>
  </section>
)

interface Props {
  title: string
  items: string[]
}

export default NoteBox
