import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import stylesContent from '../../../locale/fi/styles.json';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/styles';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { Example } from 'examples/styles';
import { getExample, CodeExampleData } from 'components/CodeExampleUtil';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';

const Page = ({ data }: { data: CodeExampleData }): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={stylesContent.title} />
    <Heading variant="h1">{stylesContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{stylesContent.intro}</Text>
    </Paragraph>

    {stylesContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}

    <ComponentDescription
      mainTitle={stylesContent['usage.title']}
      description={stylesContent['usage.description']}
      exampleFirst
      showOnlyCodeString
      codeString={getExample(data, 'styles')}
    >
      <ComponentExample>
        <Example />
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
