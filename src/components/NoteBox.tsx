import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import { Heading, Text } from 'components/ResponsiveComponents';

const NoteBox = ({ title, items }: Props): JSX.Element => (
  <section
    style={{
      background: defaultSuomifiTheme.colors.highlightLight3,
      margin: `${defaultSuomifiTheme.spacing.xl} 0`,
      padding: defaultSuomifiTheme.spacing.m,
      border: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
    }}
  >
    <Heading variant="h3" as="h2">
      {title}
    </Heading>
    <ul
      style={{ margin: 0, padding: `0 0 0 ${defaultSuomifiTheme.spacing.s}` }}
    >
      {items.map(
        (item, index) =>
          !!item && (
            <li key={index} style={{ margin: defaultSuomifiTheme.spacing.m }}>
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
