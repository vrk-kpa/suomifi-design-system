import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import { Image } from 'components/Image';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import LinkList from 'components/LinkList';
import { Props as LinkProps } from 'components/Link';
import BulletedList, {
  ListItem as BulletedListItem,
} from 'components/BulletedList';

const Section = ({
  mainTitle,
  title,
  paragraphs,
  links,
}: Props): JSX.Element => (
  <section>
    {!!mainTitle && <Heading variant="h2">{mainTitle}</Heading>}
    {!!title && <Heading variant="h3">{title}</Heading>}
    {paragraphs.map((paragraph, index) => (
      <div key={index}>
        {!!paragraph['image.key'] && (
          <div aria-hidden>
            <Image
              imgKey={paragraph['image.key']}
              alt={paragraph['image.alt']}
            />
          </div>
        )}
        {!!paragraph.text && (
          <Paragraph>
            <Text>{paragraph.text}</Text>
          </Paragraph>
        )}
        <div style={{ margin: `${defaultSuomifiTheme.spacing.xl} 0` }}>
          <BulletedList items={paragraph.listItems} />
        </div>
      </div>
    ))}
    <div style={{ margin: `${defaultSuomifiTheme.spacing.xl} 0` }}>
      <LinkList links={links} />
    </div>
  </section>
);

export interface Props {
  mainTitle?: string;
  title?: string;
  paragraphs: ParagraphProps[];
  links?: LinkProps[];
}

interface ParagraphProps {
  'image.key'?: string;
  'image.alt'?: string;
  text: string;
  listItems?: BulletedListItem[];
}

export default Section;
