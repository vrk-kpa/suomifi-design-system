import React from 'react';

import checkboxContent from '../../../locale/fi/checkbox.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import { Checkbox } from 'components/ExampleComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import Section from 'components/Section';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={checkboxContent.title} />
    <Heading variant="h1">{checkboxContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{checkboxContent.intro}</Text>
    </Paragraph>

    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <Checkbox>{checkboxContent['example.default.content']}</Checkbox>
      </ComponentExample>
    </ComponentDescription>

    <NoteBox
      title={checkboxContent['note.title']}
      items={checkboxContent['note.items']}
    />

    {checkboxContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={(section as any).paragraphs}
        links={section.links}
      />
    ))}

    <ComponentDescription
      mainTitle={checkboxContent['example.large.title']}
      description={checkboxContent['example.large.description']}
      exampleFirst
      filterProps={[]}
    >
      <ComponentExample>
        <Checkbox variant="large">
          {checkboxContent['example.large.content']}
        </Checkbox>
      </ComponentExample>
    </ComponentDescription>

    <ComponentDescription
      mainTitle={checkboxContent['example.hintstate.title']}
      description={checkboxContent['example.hintstate.description']}
      exampleFirst
      filterProps={[]}
    >
      <ComponentExample>
        <Checkbox
          hintText={checkboxContent['example.hintstate.hintText']}
          status="error"
          statusText={checkboxContent['example.hintstate.statusText']}
        >
          {checkboxContent['example.hintstate.content']}
        </Checkbox>
      </ComponentExample>
    </ComponentDescription>

    <ComponentDescription
      mainTitle={checkboxContent['example.disabled.title']}
      description={checkboxContent['example.disabled.description']}
      exampleFirst
      filterProps={[]}
    >
      <ComponentExample>
        <Checkbox disabled>
          {checkboxContent['example.disabled.content']}
        </Checkbox>
      </ComponentExample>
    </ComponentDescription>
  </Layout>
);

export default Page;
