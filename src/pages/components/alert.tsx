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
    <Heading variant="h2">{alertContent.alertHeading}</Heading>
    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <Alert smallScreen closeText={alertContent.closeButton}>
          {alertContent.contentParagrah}
        </Alert>
      </ComponentExample>
    </ComponentDescription>
    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <Alert status="warning" closeText={alertContent.closeButton}>
          {alertContent.contentParagrah}
        </Alert>
      </ComponentExample>
    </ComponentDescription>
    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <Alert status="error" closeText={alertContent.closeButton}>
          {alertContent.contentParagrah}
        </Alert>
      </ComponentExample>
    </ComponentDescription>
    <Heading variant="h2">{alertContent.inlineAlertHeading}</Heading>
    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <InlineAlert smallScreen>{alertContent.contentParagrah}</InlineAlert>
      </ComponentExample>
    </ComponentDescription>
    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <InlineAlert status="warning">
          {alertContent.contentParagrah}
        </InlineAlert>
      </ComponentExample>
    </ComponentDescription>
    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <InlineAlert status="error">{alertContent.contentParagrah}</InlineAlert>
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
  </Layout>
);

export default Page;
