import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import * as textareaContent from '../../../locale/fi/textarea.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Textarea } from 'components/ExampleComponents';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={textareaContent.title} />
    <Heading variant="h1">{textareaContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{textareaContent.intro}</Text>
    </Paragraph>

    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <Textarea
          labelText={textareaContent['example.regular.label']}
          hintText={textareaContent['example.regular.hintText']}
          visualPlaceholder={textareaContent['example.regular.placeholder']}
        />
      </ComponentExample>
    </ComponentDescription>

    <NoteBox
      title={textareaContent['note.title']}
      items={textareaContent['note.items']}
    />

    {textareaContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={(section as any).paragraphs}
        links={section.links}
      />
    ))}

    <ComponentDescription
      mainTitle={textareaContent['example.error.title']}
      description={textareaContent['example.error.description']}
      exampleFirst
      filterProps={[]}
    >
      <ComponentExample>
        <Textarea
          labelText={textareaContent['example.error.label']}
          status="error"
          hintText={textareaContent['example.error.hintText']}
          visualPlaceholder={textareaContent['example.error.placeholder']}
          statusText={textareaContent['example.error.statusText']}
        />
      </ComponentExample>
    </ComponentDescription>

    <ComponentDescription
      mainTitle={textareaContent['example.disabled.title']}
      description={textareaContent['example.disabled.description']}
      exampleFirst
      filterProps={[]}
    >
      <ComponentExample>
        <Textarea
          labelText={textareaContent['example.disabled.label']}
          disabled
        />
      </ComponentExample>
    </ComponentDescription>
  </Layout>
);

export default Page;
