import React from 'react';
import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NotificationBox from 'components/NotificationBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Paragraph } from 'components/ResponsiveComponents';
import { Text } from 'components/ExampleComponents';

const Page: React.FC = (): React.ReactElement => {
  return (
    <NamespacesConsumer ns={['text']}>
      {t => (
        <Layout sideNavData={sideNavData(t)}>
          <SEO title={t('title')} />
          <Heading.h1>{t('title')}</Heading.h1>

          <Paragraph.lead>
            <Text.lead>{t('intro')}</Text.lead>
          </Paragraph.lead>

          <NotificationBox />

          {t('sections').map((section, index) => (
            <Section
              key={index}
              mainTitle={section.title}
              paragraphs={section.paragraphs}
              links={section.links}
            />
          ))}

          <ComponentDescription
            mainTitle={t('body.title')}
            description={t('body.description')}
            exampleFirst={false}
            filterProps={[]}
          >
            <ComponentExample>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <Text>Body text</Text>
                <Text.bold>Body Text Bold</Text.bold>
                <Text smallScreen>Body Text Small</Text>
                <Text.bold smallScreen>Body Text Small Bold</Text.bold>
              </div>
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t('lead.title')}
            description={t('lead.description')}
            exampleFirst={false}
            filterProps={[]}
          >
            <ComponentExample>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <Text.lead>Lead Text</Text.lead>
                <Text.lead smallScreen>Lead Text Small</Text.lead>
              </div>
            </ComponentExample>
          </ComponentDescription>
        </Layout>
      )}
    </NamespacesConsumer>
  );
};

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
