import React from 'react';

import * as blockContent from '../../../locale/fi/block.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { Block } from 'components/ExampleComponents';
import NotificationBox from 'components/NotificationBox';

const Page: React.FC = (): React.ReactElement => {
  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={blockContent.title} />
      <Heading variant="h1">{blockContent.title}</Heading>
      <NotificationBox />

      <Paragraph variant="lead">
        <Text variant="lead">{blockContent.intro}</Text>
      </Paragraph>

      <ComponentDescription>
        <ComponentExample>
          <Block margin="m" variant="main">
            {blockContent['example.content']}
          </Block>
        </ComponentExample>
      </ComponentDescription>

      <NoteBox
        title={blockContent['note.title']}
        items={blockContent['note.items']}
      />

      {blockContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={(section as any).paragraphs}
          links={section.links}
        />
      ))}
    </Layout>
  );
};

export default Page;
