import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import toastContent from '../../../locale/fi/toast.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Toast } from 'components/ExampleComponents';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';

const Page = (): JSX.Element => {
  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={toastContent.title} />
      <Heading variant="h1">{toastContent.title}</Heading>
      <Paragraph variant="lead">
        <Text variant="lead">{toastContent.intro}</Text>
      </Paragraph>

      <ComponentDescription>
        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <Toast>{toastContent['example.content']}</Toast>
        </ComponentExample>
      </ComponentDescription>

      <NoteBox
        title={toastContent['note.title']}
        items={toastContent['note.items']}
      />

      {toastContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={section.paragraphs}
          links={section.links}
        />
      ))}
    </Layout>
  );
};

export default Page;
