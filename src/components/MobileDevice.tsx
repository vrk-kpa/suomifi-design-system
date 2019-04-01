import React, { ReactNode, CSSProperties } from 'react'

const MobileDevice = ({ style, children }: Props): JSX.Element => (
  <div
    style={{
      width: '13rem',
      border: '.1rem solid #636769',
      borderBottom: 0,
      borderRadius: '1.5rem 1.5rem 0 0',
      boxShadow: '0 0 .2rem #636769',
      padding: '2.5rem 1rem 0 1rem',
      margin: 0,
      background: '#C9CDCF'
    }}>
    <div
      style={{
        position: 'relative',
        top: '-1.25rem',
        margin: '0 auto',
        width: '3.5rem',
        height: '.25rem',
        background: '#636769',
        borderRadius: '.125rem'
      }}
    />
    <div
      style={{
        overflow: 'hidden',
        height: '100%',
        background: 'white',
        ...style
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
