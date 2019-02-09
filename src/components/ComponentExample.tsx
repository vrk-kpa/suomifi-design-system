import React, { ReactNode } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const ComponentExample = ({ children }: Props): JSX.Element => (
  <div style={{ margin: '1rem 0' }}>
    {children}
    <SyntaxHighlighter language='jsx'>
      {reactElementToJSXString(children, {
        filterProps: ['style'],
        showFunctions: true,
        functionValue: () => '...'
      })}
    </SyntaxHighlighter>
  </div>
)

interface Props {
  children: ReactNode
}

export default ComponentExample
