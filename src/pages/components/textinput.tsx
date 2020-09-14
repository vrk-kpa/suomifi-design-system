import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { TextInput } from 'components/ExampleComponents';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import NotificationBox from 'components/NotificationBox';
import { suomifiDesignTokens } from 'suomifi-ui-components';

const Page = (): JSX.Element => (
  <Translation ns={['textinput']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>
        <NotificationBox />

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        <ComponentDescription>
          <ComponentExample
            style={{ marginBottom: suomifiDesignTokens.spacing.s }}
          >
            <TextInput labelText={t('example.regular.label')} />
          </ComponentExample>
        </ComponentDescription>

        <NoteBox title={t('note.title')} items={t('note.items')} />

        <ComponentDescription
          mainTitle={t('example.success.title')}
          description={t('example.success.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <TextInput
              labelText={t('example.success.label')}
              status="success"
            />
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('example.error.title')}
          description={t('example.error.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <TextInput
              labelText={t('example.error.label')}
              status="error"
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
            <TextInput labelText={t('example.disabled.label')} disabled />
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
