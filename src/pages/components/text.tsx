import React from 'react';

import textContent from '../../../locale/fi/text.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import {
  Heading,
  Paragraph,
  Text as ResponsiveText,
} from 'components/ResponsiveComponents';
import { Text } from 'suomifi-ui-components';

interface ExampleBlockProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ExampleBlock = ({
  title,
  description,
  children,
}: ExampleBlockProps): JSX.Element => (
  <ComponentDescription
    mainTitle={title}
    description={description}
    exampleFirst={false}
    filterProps={[]}
  >
    <ComponentExample
      style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {children}
    </ComponentExample>
  </ComponentDescription>
);

const Page: React.FC = (): React.ReactElement => {
  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={textContent.title} />
      <Heading variant="h1">{textContent.title}</Heading>

      <Paragraph variant="lead">
        <ResponsiveText variant="lead">{textContent.intro}</ResponsiveText>
      </Paragraph>

      {textContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={section.paragraphs}
          links={section.links}
        />
      ))}

      <ExampleBlock
        title={textContent['body.title']}
        description={textContent['body.description']}
      >
        <Text>Body text</Text>
        <Text variant="bold">Body Text Bold</Text>
        <Text smallScreen>Body Text Small</Text>
        <Text variant="bold" smallScreen>
          Body Text Small Bold
        </Text>
      </ExampleBlock>

      <ExampleBlock
        title={textContent['lead.title']}
        description={textContent['lead.description']}
      >
        <Text variant="lead">Lead Text</Text>
        <Text variant="lead" smallScreen>
          Lead Text Small
        </Text>
      </ExampleBlock>
    </Layout>
  );
};

export default Page;
