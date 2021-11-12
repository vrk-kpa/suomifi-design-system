import React, { ReactNode } from 'react';
import {
  Expander,
  ExpanderTitleButton,
  ExpanderContent,
  defaultSuomifiTheme,
} from 'suomifi-ui-components';

import commonContent from '../../locale/fi/common.json';
import ComponentCode from 'components/ComponentCode';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const getWithoutWrappers = (children: any): ReactNode[] =>
  React.Children.map(children, (child) =>
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
  <div
    style={{
      marginBottom: defaultSuomifiTheme.spacing.xl,
      borderBottom: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
    }}
  >
    <div style={{ margin: `${defaultSuomifiTheme.spacing.xl} 0` }}>
      {!!mainTitle && <Heading variant="h2">{mainTitle}</Heading>}
      {!!title && <Heading variant="h3">{title}</Heading>}
    </div>
    {!!exampleFirst && <div>{children}</div>}
    {!!description && (
      <Paragraph>
        <Text>{description}</Text>
      </Paragraph>
    )}
    {!exampleFirst && <div>{children}</div>}
    {!noCode && (
      <div
        style={{
          margin: `${defaultSuomifiTheme.spacing.xl} 0`,
          padding: '0 2px 0 2px',
        }}
      >
        <Expander>
          <ExpanderTitleButton asHeading="h3">
            {commonContent.react}
          </ExpanderTitleButton>
          <ExpanderContent noPadding>
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
          </ExpanderContent>
        </Expander>
      </div>
    )}
  </div>
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
