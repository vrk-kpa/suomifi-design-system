import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import Section, { Props as SectionProps } from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Textarea, suomifiDesignTokens } from 'suomifi-ui-components';

Textarea.displayName = 'Textarea';

const Page = (): JSX.Element => (
  <Translation ns={['textarea']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading variant="h1">{t('title')}</Heading>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        <ComponentDescription>
          <ComponentExample
            style={{ marginBottom: suomifiDesignTokens.spacing.s }}
          >
            <Textarea
              labelText={t('example.regular.label')}
              hintText={t('example.regular.hintText')}
              visualPlaceholder={t('example.regular.placeholder')}
            />
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

        <ComponentDescription
          mainTitle={t('example.error.title')}
          description={t('example.error.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <Textarea
              labelText={t('example.error.label')}
              status="error"
              hintText={t('example.error.hintText')}
              visualPlaceholder={t('example.error.placeholder')}
              statusText={t('example.error.statusText')}
            />
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('example.disabled.title')}
          description={t('example.disabled.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <Textarea labelText={t('example.disabled.label')} disabled />
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
  }
`;
