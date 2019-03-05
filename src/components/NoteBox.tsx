import React from 'react'

const NoteBox = ({ title, items }: Props): JSX.Element => (
  <div
    style={{
      background: '#E9F0F8',
      margin: '2rem 0',
      padding: '20px',
      border: '1px solid #C5CBD2'
    }}>
    <div style={{ fontSize: '22px', fontWeight: 600 }}>{title}</div>
    <ul style={{ margin: 0, padding: '0 0 0 2rem' }}>
      {items.map(item => (
        <li key={item} style={{ marginTop: '1rem' }}>
          {item}
        </li>
      ))}
    </ul>
  </div>
)

interface Props {
  title: string
  items: string[]
}

export default NoteBox
