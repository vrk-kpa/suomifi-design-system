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
        {children}
        <div style={{ marginTop: '1rem' }}>{description}</div>
        <ComponentExample>{children}</ComponentExample>
      </div>
    )}
  </NamespacesConsumer>
)

interface Props {
  title?: string
  description: string
  children: ReactNode
}

export default ComponentDescription
