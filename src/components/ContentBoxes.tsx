import React from 'react';
import {
  defaultSuomifiTheme,
  StaticIcon,
  IllustrativeIconKeys,
  DoctypeIconKeys,
} from 'suomifi-ui-components';

import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import LinkList from 'components/LinkList';
import { Props as LinkProps } from 'components/Link';

const Block = ({ block }: { block: Block }): JSX.Element => (
  <>
    {!!block.icon && (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '70px',
          height: '70px',
          marginBottom: defaultSuomifiTheme.spacing.xl,
          border: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
          borderRadius: '50%',
          fontSize: '50px',
        }}
      >
        <StaticIcon icon={block.icon} />
      </div>
    )}
    {!!block.title && <Heading variant="h2">{block.title}</Heading>}
    {block.paragraphs.map((paragraph, index) => (
      <div key={index}>
        {!!paragraph.text && (
          <Paragraph>
            <Text>{paragraph.text}</Text>
          </Paragraph>
        )}
      </div>
    ))}
    <div style={{ margin: `${defaultSuomifiTheme.spacing.s} 0` }}>
      <LinkList links={block.links} />
    </div>
  </>
);

const ContentBoxes = ({
  wrapAll,
  hasFrame,
  mainTitle,
  blocks,
}: Props): JSX.Element => (
  <section
    style={{
      background: hasFrame ? defaultSuomifiTheme.colors.whiteBase : 'none',
      padding: `${defaultSuomifiTheme.spacing.xl} ${defaultSuomifiTheme.spacing.s} 0`,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div style={{ maxWidth: 1140 }}>
      <Heading
        variant="h1"
        style={{
          textAlign: 'left',
          margin: `0 0 0 ${defaultSuomifiTheme.spacing.s}`,
        }}
      >
        {mainTitle}
      </Heading>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: `${defaultSuomifiTheme.spacing.xl} 0 0 0`,
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: wrapAll ? 900 : 1140,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: wrapAll ? 'center' : 'space-evenly',
          }}
        >
          {blocks.map((block, index) => (
            <article
              key={index}
              style={{
                flex: wrapAll ? '100%' : '30%',
                margin: defaultSuomifiTheme.spacing.s,
              }}
            >
              <Block block={block} />
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export interface Props {
  wrapAll?: boolean;
  hasFrame?: boolean;
  mainTitle: string;
  blocks: Block[];
}

interface Block {
  icon?: IllustrativeIconKeys | DoctypeIconKeys;
  title: string;
  paragraphs: ParagraphProps[];
  links: LinkProps[];
}

interface ParagraphProps {
  text: string;
}

export default ContentBoxes;
