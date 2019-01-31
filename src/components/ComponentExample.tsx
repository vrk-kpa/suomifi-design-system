import React, { ReactNode } from 'react'
import jsxToString from 'jsx-to-string'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const ComponentExample = ({ children }: Props) => (
  <div>
    {children}
    <SyntaxHighlighter language='jsx'>
      {jsxToString(children)}
    </SyntaxHighlighter>
  </div>
)

interface Props {
  children: ReactNode
}

export default ComponentExample
