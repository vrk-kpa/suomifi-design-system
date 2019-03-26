import React, { ReactNode } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const ComponentExample = ({ children }: Props): JSX.Element => (
  <SyntaxHighlighter
    language='jsx'
    customStyle={{
      margin: '1rem 0 0 0',
      padding: 0,
      background: '#F6F6F7',
      fontSize: '1rem'
    }}>
    {reactElementToJSXString(children, {
      filterProps: ['id', 'style', 'aria-label'],
      showFunctions: true,
      functionValue: () => '...'
    })}
  </SyntaxHighlighter>
)

interface Props {
  children: ReactNode
}

export default ComponentExample
