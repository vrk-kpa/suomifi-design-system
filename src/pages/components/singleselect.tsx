import React from 'react';

import singleSelectContent from '../../../locale/fi/singleselect.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { SingleSelect } from 'components/ExampleComponents';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={singleSelectContent.title} />
    <Heading variant="h1">{singleSelectContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{singleSelectContent.intro}</Text>
    </Paragraph>

    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        test
      </ComponentExample>
    </ComponentDescription>

    <NoteBox
      title={singleSelectContent['note.title']}
      items={singleSelectContent['note.items']}
    />

    {singleSelectContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}
  </Layout>
);

export default Page;
