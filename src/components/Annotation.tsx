import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

const Annotation = ({ title, description }: Props): JSX.Element => (
  <div
    style={{
      margin: '2rem 0',
      padding: '20px',
      borderTop: `1px solid ${suomifiTheme.colors.accentBase}`,
      borderBottom: `1px solid ${suomifiTheme.colors.accentBase}`
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
