import React from 'react';
import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Paragraph } from 'components/ResponsiveComponents';
import { Text } from 'components/ExampleComponents';

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
    <NamespacesConsumer ns={['text']}>
      {t => (
        <Layout sideNavData={sideNavData(t)}>
          <SEO title={t('title')} />
          <Heading.h1>{t('title')}</Heading.h1>

          <Paragraph>
            <Text.lead>{t('intro')}</Text.lead>
          </Paragraph>

          {t('sections').map((section, index) => (
            <Section
              key={index}
              mainTitle={section.title}
              paragraphs={section.paragraphs}
              links={section.links}
            />
          ))}

          <ExampleBlock
            title={t('body.title')}
            description={t('body.description')}
          >
            <Text>Body text</Text>
            <Text.bold>Body Text Bold</Text.bold>
            <Text smallScreen>Body Text Small</Text>
            <Text.bold smallScreen>Body Text Small Bold</Text.bold>
          </ExampleBlock>

          <ExampleBlock
            title={t('lead.title')}
            description={t('lead.description')}
          >
            <Text.lead>Lead Text</Text.lead>
            <Text.lead smallScreen>Lead Text Small</Text.lead>
          </ExampleBlock>
        </Layout>
      )}
    </NamespacesConsumer>
  );
};

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
