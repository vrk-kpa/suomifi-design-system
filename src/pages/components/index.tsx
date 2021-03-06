import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { Example } from 'examples/components';
import { Example as ExampleAdvanced } from 'examples/componentsAdvanced';
import { getExample, CodeExampleData } from 'components/CodeExampleUtil';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section, { Props as SectionProps } from 'components/Section';

const Page = ({ data }: { data: CodeExampleData }): JSX.Element => (
  <Translation ns={['components']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('info.title')} />
        <Heading variant="h1">{t('info.title')}</Heading>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        {t<SectionProps[]>('sections').map((section, index) => (
          <Section
            key={index}
            mainTitle={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
          />
        ))}

        <ComponentDescription
          mainTitle={t('usage.title')}
          description={t('usage.description')}
          exampleFirst
          showOnlyCodeString
          codeString={getExample(data, 'components')}
        >
          <ComponentExample>
            <Example />
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('advancedUsage.title')}
          description={t('advancedUsage.description')}
          exampleFirst
          showOnlyCodeString
          codeString={getExample(data, 'componentsAdvanced')}
        >
          <ComponentExample>
            <ExampleAdvanced />
          </ComponentExample>
        </ComponentDescription>
      </Layout>
    )}
  </Translation>
);

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
    ...ExamplesFragment
  }
`;
