import React, { ReactNode } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import ComponentExample from './ComponentExample'

const ComponentDescription = ({
  title,
  description,
  children
}: Props): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <div
        style={{
          borderBottom: '1px solid #C9CDCF',
          marginBottom: '3rem'
        }}>
        <h2>{title}</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '1rem'
          }}>
          {children}
        </div>
        <div style={{ marginTop: '1rem' }}>{description}</div>
        <ComponentExample>{children}</ComponentExample>
      </div>
    )}
  </NamespacesConsumer>
)

interface Props {
  title: string
  description: string
  children: ReactNode
}

export default ComponentDescription
