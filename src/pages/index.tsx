import React from 'react';
import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ContentBoxes from 'components/ContentBoxes';
import Hero from 'components/Hero';
import 'suomifi-ui-components/dist/main.css';

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['home']}>
    {t => (
      <Layout hasFrame={false}>
        <SEO title={t('title')} />

        <Hero title={t('intro.title')} description={t('intro.description')} />

        {t('sections').map((section, index) => (
          <ContentBoxes
            key={index}
            wrapAll
            mainTitle={section.mainTitle}
            blocks={section.blocks}
          />
        ))}
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
