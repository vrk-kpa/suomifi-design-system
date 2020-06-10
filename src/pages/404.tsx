import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Link from 'components/Link';

const Page = (): JSX.Element => (
  <Translation ns={['404']}>
    {(t) => (
      <Layout>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>
        <Paragraph>
          <Text>{t('intro')}</Text>
        </Paragraph>
        <div>
          <Link text={t('common:to.homepage')} url="/" />
        </div>
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
