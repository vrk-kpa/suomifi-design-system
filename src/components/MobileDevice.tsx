import React, { ReactNode, CSSProperties } from 'react'

const MobileDevice = ({ style, children }: Props): JSX.Element => (
  <div
    style={{
      maxWidth: '20rem',
      border: '3px solid #84898C',
      borderBottom: 0,
      borderRadius: '2rem 2rem 0 0',
      padding: '3rem 1rem 0 1rem',
      margin: '1rem',
      background: '#C9CDCF'
    }}>
    <div
      style={{
        overflow: 'hidden',
        height: '100%',
        border: '2px solid #A5ACB0',
        borderBottom: 0,
        borderRadius: '.2rem',
        ...style,

        background: style && style.background ? style.background : '#F6F6F7'
      }}>
      {children}
    </div>
  </div>
)

interface Props {
  style?: CSSProperties
  children: ReactNode
}

MobileDevice.displayName = 'div'

export default MobileDevice
