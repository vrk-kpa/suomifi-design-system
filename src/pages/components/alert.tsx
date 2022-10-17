import React from 'react';
import { defaultSuomifiTheme, Alert, InlineAlert } from 'suomifi-ui-components';

import alertContent from '../../../locale/fi/alert.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={alertContent.title} />
    <Heading variant="h1">{alertContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{alertContent.intro}</Text>
    </Paragraph>
    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <Alert closeText={alertContent['example.closeButton']}>
          {alertContent['example.alertInfoParagraph']}
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
    <ComponentDescription
      mainTitle={alertContent['example.inlineAlertHeading']}
      description={alertContent['example.inlineParagraph']}
    >
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <InlineAlert labelText={alertContent['example.inlineAlertInfoHeading']}>
          {alertContent['example.inlineAlertInfoParagraph']}
        </InlineAlert>
      </ComponentExample>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <InlineAlert status="warning">
          {alertContent['example.inlineAlertWarningParagraph']}
        </InlineAlert>
      </ComponentExample>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <InlineAlert
          labelText={alertContent['example.inlineAlertErrorHeading']}
          status="error"
        >
          {alertContent['example.inlineAlertErrorParagraph']}
        </InlineAlert>
      </ComponentExample>
    </ComponentDescription>
  </Layout>
);

export default Page;
