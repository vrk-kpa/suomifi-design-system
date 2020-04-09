import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ContentBoxes, {
  Props as ContentBoxProps,
} from 'components/ContentBoxes';
import Hero from 'components/Hero';

const Page = (): JSX.Element => (
  <Translation ns={['home']}>
    {(t) => (
      <Layout hasFrame={false}>
        <SEO title={t('title')} />

        <Hero title={t('intro.title')} description={t('intro.description')} />

        {t<ContentBoxProps[]>('sections').map((section, index) => (
          <ContentBoxes
            key={index}
            wrapAll
            mainTitle={section.mainTitle}
            blocks={section.blocks}
          />
        ))}
      </Layout>
    )}
  </Translation>
);

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
