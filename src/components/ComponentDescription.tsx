import React, { ReactNode } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { Panel } from 'suomifi-ui-components'
import { css } from '@emotion/core'
import ComponentCode from './ComponentCode'

const getWithoutWrappers = (children: any): ReactNode[] =>
  React.Children.map(children, child =>
    !!child.type && (child.type === 'div' || child.type.displayName === 'div')
      ? getWithoutWrappers(child.props.children)
      : child
  )

const ComponentDescription = ({
  title,
  description,
  exampleFirst,
  noCode,
  children
}: Props): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <div style={{ marginBottom: '2rem', borderBottom: '1px solid #C9CDCF' }}>
        <h3>{title}</h3>
        {!!exampleFirst && <div>{children}</div>}
        <div style={{ padding: '1rem 0' }}>{description}</div>
        {!exampleFirst && <div>{children}</div>}
        {!noCode && (
          <div style={{ padding: '1rem 0 2rem 0' }}>
            <Panel.expansion
              css={css({ background: '#F6F6F7' })}
              title={t('common:react')}
              titleProps={{
                style: { textAlign: 'left', textTransform: 'uppercase' }
              }}>
              {getWithoutWrappers(children).map((child, index) => (
                <ComponentCode key={index}>{child}</ComponentCode>
              ))}
            </Panel.expansion>
          </div>
        )}
      </div>
    )}
  </NamespacesConsumer>
)

interface Props {
  title: string
  description: string
  exampleFirst: boolean
  noCode?: boolean
  children: ReactNode
}

export default ComponentDescription
