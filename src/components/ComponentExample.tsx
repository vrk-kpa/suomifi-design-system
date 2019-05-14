import React, { ReactNode, CSSProperties } from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

const ComponentExample = ({ style, children }: Props): JSX.Element => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '.8rem',
      margin: '1.5rem 0',
      ...style,
      background:
        style && style.background
          ? style.background
          : suomifiTheme.colors.depthLight30
    }}>
    {children}
  </div>
)

interface Props {
  style?: CSSProperties
  children: ReactNode
}

ComponentExample.displayName = 'div'

export default ComponentExample
