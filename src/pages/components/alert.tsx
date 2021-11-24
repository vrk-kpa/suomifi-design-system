import React from 'react';

import alertContent from '../../../locale/fi/alert.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Alert, InlineAlert } from 'components/ExampleComponents';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={alertContent.title} />
    <Heading variant="h1">{alertContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{alertContent.intro}</Text>
    </Paragraph>
    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <Alert closeText={alertContent.closeButton}>
          {alertContent.contentParagrah}
        </Alert>
      </ComponentExample>
    </ComponentDescription>

    <NoteBox
      title={alertContent['note.title']}
      items={alertContent['note.items']}
    />

    {alertContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}
    <Heading variant="h2">{alertContent.inlineAlertHeading}</Heading>
    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <InlineAlert smallScreen>{alertContent.contentParagrah}</InlineAlert>
      </ComponentExample>
    </ComponentDescription>

    <ComponentDescription
      exampleFirst
      description={alertContent.inlineAlertWarningParagrah}
    >
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <InlineAlert status="warning">
          {alertContent.contentParagrah}
        </InlineAlert>
      </ComponentExample>
    </ComponentDescription>
    <Paragraph style={{ margin: '0 0 30px 0' }}></Paragraph>
    <ComponentDescription
      exampleFirst
      description={alertContent.inlineAlertErrorParagrah}
    >
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <InlineAlert status="error">{alertContent.contentParagrah}</InlineAlert>
      </ComponentExample>
    </ComponentDescription>
  </Layout>
);

export default Page;
