import React, { ReactNode, CSSProperties } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

const Highlighter = ({
  style,
  children,
}: {
  style?: CSSProperties;
  children: ReactNode;
}): JSX.Element => (
  <SyntaxHighlighter
    language="jsx"
    customStyle={{
      margin: 0,
      padding: 0,
      background: 'none',
      fontSize: '1rem',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      overflow: 'hidden',
      ...style,
    }}
    // clear default styles to allow e.g. wrap
    codeTagProps={{ style: {} }}
  >
    {children}
  </SyntaxHighlighter>
);

const ComponentCode = ({
  javascript,
  style,
  filterProps,
  children,
}: Props): JSX.Element => (
  <div style={{ padding: defaultSuomifiTheme.spacing.s, ...style }}>
    {!!javascript && (
      <Highlighter style={{ marginBottom: !children ? 0 : '1rem' }}>
        {javascript}
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

interface Props {
  javascript?: string;
  style?: CSSProperties;
  filterProps?: string[];
  children?: ReactNode;
}

export default ComponentCode;
