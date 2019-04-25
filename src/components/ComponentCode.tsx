import React, { ReactNode, CSSProperties } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const Highlighter = ({
  style,
  children
}: {
  style?: CSSProperties
  children: ReactNode
}): JSX.Element => (
  <SyntaxHighlighter
    language='jsx'
    customStyle={{
      margin: 0,
      padding: 0,
      background: 'none',
      fontSize: '1rem',
      whiteSpace: 'pre-wrap',
      overflow: 'hidden',
      ...style
    }}
    codeTagProps={{ style: {} }}>
    {children}
  </SyntaxHighlighter>
)

const ComponentCode = ({ javascript, style, children }: Props): JSX.Element => (
  <div style={{ padding: '1rem', background: '#F6F6F7', ...style }}>
    {!!javascript && (
      <Highlighter style={{ marginBottom: !children ? 0 : '1rem' }}>
        {javascript}
      </Highlighter>
    )}
    {!!children && (
      <Highlighter>
        {reactElementToJSXString(children, {
          filterProps: ['id', 'style', 'aria-label'],
          showFunctions: true,
          functionValue: () => '...'
        })}
      </Highlighter>
    )}
  </div>
)

interface Props {
  javascript?: string
  style?: CSSProperties
  children?: ReactNode
}

export default ComponentCode
