import React, { ReactNode, CSSProperties } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Highlighter = ({
  style,
  children,
}: {
  style?: CSSProperties;
  children: (string | string[]) & ReactNode;
}): JSX.Element => (
  <SyntaxHighlighter
    language="jsx"
    customStyle={{
      margin: 0,
      padding: 0,
      background: 'none',
      fontSize: '0.85rem',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      ...style,
    }}
    // clear default styles to allow e.g. wrap
    codeTagProps={{ style: {} }}
    wrapLongLines={true}
  >
    {children}
  </SyntaxHighlighter>
);

interface ComponentCodeProps {
  style?: CSSProperties;
  filterProps?: string[];
  children?: ReactNode;
  codeString?: string;
}

const ComponentCode = ({
  style,
  filterProps,
  children,
  codeString,
}: ComponentCodeProps): JSX.Element => (
  <div className="py-xs" style={style}>
    {!!codeString && (
      <Highlighter style={{ marginBottom: !children ? 0 : '1rem' }}>
        {codeString}
      </Highlighter>
    )}
    {!!children && (
      <Highlighter>
        {reactElementToJSXString(children, {
          filterProps: filterProps || ['id', 'style', 'aria-label'],
          showFunctions: true,
          functionValue: () => '...',
        })}
      </Highlighter>
    )}
  </div>
);

export default ComponentCode;
