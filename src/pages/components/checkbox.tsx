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
import ComponentExample from 'components/ComponentExample';
import Section, { Props as SectionProps } from 'components/Section';
import { Checkbox, suomifiDesignTokens } from 'suomifi-ui-components';

Checkbox.displayName = 'Checkbox';

const Page = (): JSX.Element => (
  <Translation ns={['checkbox']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        <ComponentDescription>
          <ComponentExample
            style={{ marginBottom: suomifiDesignTokens.spacing.s }}
          >
            <Checkbox>{t('example.default.content')}</Checkbox>
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
          mainTitle={t('example.large.title')}
          description={t('example.large.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <Checkbox variant="large">{t('example.large.content')}</Checkbox>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('example.hintstate.title')}
          description={t('example.hintstate.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <Checkbox
              hintText={t('example.hintstate.hintText')}
              status="error"
              statusText={t('example.hintstate.statusText')}
            >
              {t('example.hintstate.content')}
            </Checkbox>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('example.disabled.title')}
          description={t('example.disabled.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <Checkbox disabled>{t('example.disabled.content')}</Checkbox>
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
