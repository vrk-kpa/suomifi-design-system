import React from 'react'

const Annotation = ({ title, description }: Props) => (
  <div
    style={{
      margin: '2rem 0',
      padding: '20px',
      borderTop: '1px solid #EA7125',
      borderBottom: '1px solid #EA7125'
    }}>
    <div style={{ fontSize: '20px', fontWeight: 600 }}>{title}</div>
    {description ? (
      <div
        style={{
          marginTop: '1rem'
        }}>
        {description}
      </div>
    ) : null}
  </div>
)

interface Props {
  title: string
  description?: string
}

export default Annotation
