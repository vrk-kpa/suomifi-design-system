import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

import { Heading, Text } from 'components/ResponsiveComponents'

const NoteBox = ({ title, items }: Props): JSX.Element => (
  <section
    style={{
      background: suomifiTheme.colors.highlightLight50,
      margin: '2rem 0',
      padding: '20px',
      border: `1px solid ${suomifiTheme.colors.depthLight13}`
    }}>
    <Heading.h3>{title}</Heading.h3>
    <ul style={{ margin: 0, padding: '0 0 0 2rem' }}>
      {items.map(
        (item, index) =>
          !!item && (
            <li key={index} style={{ marginTop: '1rem' }}>
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
