import React, { ReactNode } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const ComponentExample = ({ children }: Props): JSX.Element => (
  <SyntaxHighlighter
    language='jsx'
    customStyle={{ margin: 0, fontSize: '1rem' }}>
    {reactElementToJSXString(children, {
      filterProps: ['style'],
      showFunctions: true,
      functionValue: () => '...'
    })}
  </SyntaxHighlighter>
)

interface Props {
  children: ReactNode
}

export default ComponentExample
