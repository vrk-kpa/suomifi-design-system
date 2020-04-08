import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import i18next from 'i18next';
import Layout from 'components/layout';
import SEO from 'components/seo';
import { LanguageMenu, LanguageMenuItem } from 'components/ExampleComponents';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const Page = (): JSX.Element => {
  const [language, setLanguage] = useState(
    i18next.t('languagemenu:example.menuitem1short'),
  );
  const pageContent = (
    <NamespacesConsumer ns={['languagemenu']}>
      {(t) => (
        <Layout sideNavData={sideNavData(t)}>
          <SEO title={t('title')} />
          <Heading.h1>{t('title')}</Heading.h1>

          <Paragraph.lead>
            <Text.lead>{t('intro')}</Text.lead>
          </Paragraph.lead>

          <ComponentDescription>
            <ComponentExample>
              <LanguageMenu name={language}>
                <LanguageMenuItem
                  onSelect={() => setLanguage(t('example.menuitem1short'))}
                  selected={language === t('example.menuitem1short')}
                >
                  {t('example.menuitem1')}
                </LanguageMenuItem>
                <LanguageMenuItem
                  onSelect={() => setLanguage(t('example.menuitem2short'))}
                  selected={language === t('example.menuitem2short')}
                >
                  {t('example.menuitem2')}
                </LanguageMenuItem>
                <LanguageMenuItem
                  onSelect={() => setLanguage(t('example.menuitem3short'))}
                  selected={language === t('example.menuitem3short')}
                >
                  {t('example.menuitem3')}
                </LanguageMenuItem>
              </LanguageMenu>
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
  return pageContent;
};
export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
