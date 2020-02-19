import React from 'react';
import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { Heading as SuomifiHeading } from 'components/ExampleComponents';
import { suomifiDesignTokens } from 'suomifi-ui-components';

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['heading']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t('sections').map((section, index) => (
          <Section
            key={index}
            mainTitle={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
          />
        ))}
        <ComponentDescription
          mainTitle={t('example.title')}
          exampleFirst={false}
        >
          <ComponentExample
            style={{
              flexFlow: 'column',
              alignItems: 'flex-start',
            }}
          >
            <SuomifiHeading.h1hero
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading 1 with hero styling
            </SuomifiHeading.h1hero>
            <SuomifiHeading.h1
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading h1
            </SuomifiHeading.h1>
            <SuomifiHeading.h2
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading h2
            </SuomifiHeading.h2>
            <SuomifiHeading.h3
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading h3
            </SuomifiHeading.h3>
            <SuomifiHeading.h4
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading h4
            </SuomifiHeading.h4>
            <SuomifiHeading.h5
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading h5
            </SuomifiHeading.h5>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription>
          <ComponentExample
            style={{
              flexFlow: 'column',
              alignItems: 'flex-start',
            }}
          >
            <SuomifiHeading.h1hero
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading 1 hero small screen
            </SuomifiHeading.h1hero>
            <SuomifiHeading.h1
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading h1 small screen
            </SuomifiHeading.h1>
            <SuomifiHeading.h2
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading h2 small screen
            </SuomifiHeading.h2>
            <SuomifiHeading.h3
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading h3 small screen
            </SuomifiHeading.h3>
            <SuomifiHeading.h4
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading h4 small screen
            </SuomifiHeading.h4>
            <SuomifiHeading.h5
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.s} 0` }}
            >
              Heading h5 small screen
            </SuomifiHeading.h5>
          </ComponentExample>
        </ComponentDescription>
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
