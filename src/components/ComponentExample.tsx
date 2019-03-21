import React, { ReactNode, CSSProperties } from 'react'

const ComponentExample = ({ style, children }: Props): JSX.Element => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '.8rem',
      marginBottom: '1rem',
      ...style,

      background: style && style.background ? style.background : '#F6F6F7'
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
