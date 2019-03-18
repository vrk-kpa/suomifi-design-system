import React, { ReactNode } from 'react'

const ComponentExample = ({ style, children }: Props): JSX.Element => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '.8rem',
      marginBottom: '1rem',
      ...style
    }}>
    {children}
  </div>
)

interface Props {
  style?: object
  children: ReactNode
}

ComponentExample.displayName = 'div'

export default ComponentExample
