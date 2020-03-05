import React, { ReactNode } from 'react';
import { NamespacesConsumer } from 'react-i18next';
import { Expander, suomifiDesignTokens } from 'suomifi-ui-components';
import ComponentCode from 'components/ComponentCode';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const getWithoutWrappers = (children: any): ReactNode[] =>
  React.Children.map(children, child =>
    !!child.type && (child.type === 'div' || child.type.displayName === 'div')
      ? getWithoutWrappers(child.props.children)
      : child,
  );

const ComponentDescription = ({
  mainTitle,
  title,
  description,
  exampleFirst,
  noCode,
  codeString,
  showOnlyCodeString,
  filterProps,
  children,
}: Props): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <div
        style={{
          marginBottom: suomifiDesignTokens.spacing.l,
          borderBottom: `1px solid ${suomifiDesignTokens.colors.depthLight13}`,
        }}
      >
        <div style={{ margin: `${suomifiDesignTokens.spacing.l} 0` }}>
          {!!mainTitle && <Heading.h2>{mainTitle}</Heading.h2>}
          {!!title && <Heading.h3>{title}</Heading.h3>}
        </div>
        {!!exampleFirst && <div>{children}</div>}
        {!!description && (
          <Paragraph>
            <Text>{description}</Text>
          </Paragraph>
        )}
        {!exampleFirst && <div>{children}</div>}
        {!noCode && (
          <div style={{ margin: `${suomifiDesignTokens.spacing.l} 0` }}>
            <Expander title={t('common:react')} noPadding>
              {codeString && <ComponentCode javascript={codeString} />}
              {!showOnlyCodeString &&
                getWithoutWrappers(children).map((child, index) => (
                  <ComponentCode
                    key={index}
                    filterProps={filterProps}
                    style={{
                      paddingTop: index === 0 && !codeString ? '1rem' : 0,
                    }}
                  >
                    {child}
                  </ComponentCode>
                ))}
            </Expander>
          </div>
        )}
      </div>
    )}
  </NamespacesConsumer>
);

interface Props {
  mainTitle?: string;
  title?: string;
  description?: string;
  exampleFirst?: boolean;
  noCode?: boolean;
  codeString?: string;
  showOnlyCodeString?: boolean;
  filterProps?: string[];
  children: ReactNode;
}

export default ComponentDescription;
