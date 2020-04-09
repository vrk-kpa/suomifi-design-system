import React from 'react';
import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { Dropdown } from 'components/ExampleComponents';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['dropdown']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        <ComponentDescription
          mainTitle={t('example.title')}
          description={t('example.description')}
        >
          <ComponentExample>
            <Dropdown name="Dropdown">
              <Dropdown.item onSelect={() => console.log(t('example.option1'))}>
                {t('example.option1')}
              </Dropdown.item>
              <Dropdown.item onSelect={() => console.log(t('example.option2'))}>
                {t('example.option2')}
              </Dropdown.item>
              <Dropdown.item onSelect={() => console.log(t('example.option3'))}>
                {t('example.option3')}
              </Dropdown.item>
            </Dropdown>
          </ComponentExample>
        </ComponentDescription>

        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t('sections').map((section, index) => (
          <Section
            key={index}
            mainTitle={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
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
