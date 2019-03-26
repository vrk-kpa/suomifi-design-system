import React from 'react'

const NoteBox = ({ title, items }: Props): JSX.Element => (
  <section
    style={{
      background: '#E9F0F8',
      margin: '2rem 0',
      padding: '20px',
      border: '1px solid #C5CBD2'
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
