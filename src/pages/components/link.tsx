import React from 'react';

import linkContent from '../../../locale/fi/link.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import {
  Link as ExampleLink,
  ExternalLink as ExampleExternalLink,
} from 'components/ExampleComponents';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={linkContent.title} />
    <Heading variant="h1">{linkContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{linkContent.intro}</Text>
    </Paragraph>

    <NoteBox
      title={linkContent['note.title']}
      items={linkContent['note.items']}
    />

    {linkContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}
    <ComponentDescription
      mainTitle={linkContent['exampleRegular.title']}
      description={linkContent['exampleRegular.description']}
      exampleFirst={false}
    >
      <ComponentExample>
        <ExampleLink className="test-classname" href="#">
          {linkContent['exampleRegular.linkText']}
        </ExampleLink>
      </ComponentExample>
    </ComponentDescription>

    <ComponentDescription
      mainTitle={linkContent['exampleExternal.title']}
      description={linkContent['exampleExternal.description']}
      exampleFirst={false}
    >
      <ComponentExample>
        <ExampleExternalLink
          className="test-classname"
          href="https://github.com/vrk-kpa/suomifi-ui-components"
          labelNewWindow={linkContent['exampleExternal.label']}
        >
          {linkContent['exampleExternal.linkText']}
        </ExampleExternalLink>
      </ComponentExample>
    </ComponentDescription>
  </Layout>
);

export default Page;
