import React from 'react';
import { defaultTokens } from 'suomifi-ui-components';

import { Heading, Text } from 'components/ResponsiveComponents';

const NoteBox = ({ title, items }: Props): JSX.Element => (
  <section
    style={{
      background: defaultTokens.colors.highlightLight50,
      margin: `${defaultTokens.spacing.l} 0`,
      padding: defaultTokens.spacing.m,
      border: `1px solid ${defaultTokens.colors.depthLight13}`,
    }}
  >
    <Heading.h3 as="h2">{title}</Heading.h3>
    <ul style={{ margin: 0, padding: `0 0 0 ${defaultTokens.spacing.m}` }}>
      {items.map(
        (item, index) =>
          !!item && (
            <li key={index} style={{ margin: defaultTokens.spacing.m }}>
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
