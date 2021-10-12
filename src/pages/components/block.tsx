import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { Block } from 'components/ExampleComponents';
import NotificationBox from 'components/NotificationBox';

const Page: React.FC = (): React.ReactElement => {
  return (
    <Translation ns={['block']}>
      {(t) => (
        <Layout sideNavData={sideNavData(t)}>
          <SEO title={t('title')} />
          <Heading variant="h1">{t('title')}</Heading>
          <NotificationBox />

          <Paragraph variant="lead">
            <Text variant="lead">{t('intro')}</Text>
          </Paragraph>

          <ComponentDescription>
            <ComponentExample>
              <Block margin="m" variant="main">
                {t('example.content')}
              </Block>
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
};

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
