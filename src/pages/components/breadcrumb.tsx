import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { Breadcrumb } from 'components/ExampleComponents';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const Page = (): JSX.Element => (
  <Translation ns={['breadcrumb']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading variant="h1">{t('title')}</Heading>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        <ComponentDescription
          mainTitle={t('default.title')}
          description={t('default.description')}
        >
          <ComponentExample>
            <Breadcrumb aria-label="breadcrumb">
              <Breadcrumb.link href="/">{t('default.link1')}</Breadcrumb.link>
              <Breadcrumb.link href="/alasivu">
                {t('default.link2')}
              </Breadcrumb.link>
              <Breadcrumb.link current>{t('default.link3')}</Breadcrumb.link>
            </Breadcrumb>
          </ComponentExample>
        </ComponentDescription>

        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t<SectionProps[]>('sections').map((section, index) => (
          <Section
            key={index}
            mainTitle={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
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
