import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { suomifiDesignTokens } from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { Heading } from 'components/ResponsiveComponents';
import Section, { Props as SectionProps } from 'components/Section';

const Page = (): JSX.Element => (
  <Translation ns={['accessibility-statement']}>
    {(t) => (
      <Layout>
        <div style={{ padding: `0 ${suomifiDesignTokens.spacing.xl}` }}>
          <SEO title={t('title')} />
          <Heading variant="h1">{t('title')}</Heading>
          {t<SectionProps[]>('sections').map((section, index) => (
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
  </Translation>
);
export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
