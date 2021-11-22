import React from 'react';
import { graphql } from 'gatsby';

import componentsContent from '../../../locale/fi/components.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { Example } from 'examples/components';
import { Example as ExampleAdvanced } from 'examples/componentsAdvanced';
import { Example as ExampleTheme } from 'examples/componentsTheme';
import { getExample, CodeExampleData } from 'components/CodeExampleUtil';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';

const Page = ({ data }: { data: CodeExampleData }): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={componentsContent['info.title']} />
    <Heading variant="h1">{componentsContent['info.title']}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{componentsContent.intro}</Text>
    </Paragraph>

    {componentsContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}

    <ComponentDescription
      mainTitle={componentsContent['usage.title']}
      description={componentsContent['usage.description']}
      exampleFirst
      showOnlyCodeString
      codeString={getExample(data, 'components')}
    >
      <ComponentExample>
        <Example />
      </ComponentExample>
    </ComponentDescription>

    <ComponentDescription
      mainTitle={componentsContent['theme.title']}
      description={componentsContent['theme.description']}
      exampleFirst
      showOnlyCodeString
      codeString={getExample(data, 'componentsTheme')}
    >
      <ComponentExample>
        <ExampleTheme />
      </ComponentExample>
    </ComponentDescription>

    <ComponentDescription
      mainTitle={componentsContent['advancedUsage.title']}
      description={componentsContent['advancedUsage.description']}
      exampleFirst
      showOnlyCodeString
      codeString={getExample(data, 'componentsAdvanced')}
    >
      <ComponentExample>
        <ExampleAdvanced />
      </ComponentExample>
    </ComponentDescription>
  </Layout>
);

export default Page;

export const query = graphql`
  query {
    ...ExamplesFragment
  }
`;
