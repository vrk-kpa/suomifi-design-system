import React from 'react';
import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { suomifiTheme } from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import Section from 'components/Section';
import { Heading } from 'components/ResponsiveComponents';

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['accessibility-statement']}>
    {t => (
      <Layout>
        <div style={{ padding: `0 ${suomifiTheme.spacing.l}` }}>
          <SEO title={t('title')} />
          <Heading variant="h1">{t('title')}</Heading>
          {t('sections').map((section, index) => (
            <Section
              key={index}
              mainTitle={section.title}
              paragraphs={section.paragraphs}
              links={section.links}
            />
          ))}
        </div>
      </Layout>
    )}
  </NamespacesConsumer>
);

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
