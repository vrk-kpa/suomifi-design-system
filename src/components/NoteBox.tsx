import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

const NoteBox = ({ title, items }: Props): JSX.Element => (
  <section
    style={{
      background: suomifiTheme.colors.highlightLight50,
      margin: '2rem 0',
      padding: '20px',
      border: '1px solid #C5CBD2' // TODO depthLight13
    }}>
    <h3 style={{ marginTop: 0, fontSize: '22px', fontWeight: 600 }}>{title}</h3>
    <ul style={{ margin: 0, padding: '0 0 0 2rem' }}>
      {items.map(
        (item, index) =>
          !!item && (
            <li key={index} style={{ marginTop: '1rem' }}>
              {item}
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
