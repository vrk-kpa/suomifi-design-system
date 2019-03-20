import React, { ReactNode } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import ComponentCode from './ComponentCode'
import Collapse from './Collapse'

const getWithoutWrappers = (children: any): ReactNode[] =>
  React.Children.map(children, child =>
    !!child.type && (child.type === 'div' || child.type.displayName === 'div')
      ? getWithoutWrappers(child.props.children)
      : child
  )

const ComponentDescription = ({
  title,
  description,
  children
}: Props): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <div style={{ marginBottom: '3rem' }}>
        <h3>{title}</h3>
        <div>{children}</div>
        <div style={{ padding: '1rem 0 0 0' }}>{description}</div>
        <div style={{ padding: '1.2rem 0', borderBottom: '1px solid #C9CDCF' }}>
          <Collapse label={t('common:react')}>
            {getWithoutWrappers(children).map((child, index) => (
              <ComponentCode key={index}>{child}</ComponentCode>
            ))}
          </Collapse>
        </div>
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
