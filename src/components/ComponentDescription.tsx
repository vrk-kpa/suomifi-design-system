import React, { ReactNode } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import ComponentExample from './ComponentExample'

const getWithoutWrappers = (children: any): ReactNode[] =>
  React.Children.map(children, child =>
    child.type === 'div' ? getWithoutWrappers(child.props.children) : child
  )

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
          marginBottom: '3rem',
          paddingBottom: '1rem'
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
        {getWithoutWrappers(children).map((child, index) => (
          <ComponentExample key={index}>{child}</ComponentExample>
        ))}
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
