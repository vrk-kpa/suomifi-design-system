import React from 'react';
import { suomifiDesignTokens } from 'suomifi-ui-components';

import { Heading, Text } from 'components/ResponsiveComponents';

const NoteBox = ({ title, items }: Props): JSX.Element => (
  <section
    style={{
      background: suomifiDesignTokens.colors.highlightLight50,
      margin: `${suomifiDesignTokens.spacing.l} 0`,
      padding: suomifiDesignTokens.spacing.m,
      border: `1px solid ${suomifiDesignTokens.colors.depthLight13}`,
    }}
  >
    <Heading.h3 as="h2">{title}</Heading.h3>
    <ul
      style={{ margin: 0, padding: `0 0 0 ${suomifiDesignTokens.spacing.m}` }}
    >
      {items.map(
        (item, index) =>
          !!item && (
            <li key={index} style={{ margin: suomifiDesignTokens.spacing.m }}>
              <Text>{item}</Text>
            </li>
          ),
      )}
    </ul>
  </section>
);

interface Props {
  title: string;
  items: string[];
}

export default NoteBox;
