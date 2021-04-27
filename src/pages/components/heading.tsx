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
import { Heading as SuomifiHeading } from 'components/ExampleComponents';
import { suomifiDesignTokens } from 'suomifi-ui-components';

const Page = (): JSX.Element => (
  <Translation ns={['heading']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading variant="h1">{t('title')}</Heading>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

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
          mainTitle={t('example.title')}
          exampleFirst={false}
        >
          <ComponentExample
            style={{
              flexFlow: 'column',
              alignItems: 'flex-start',
            }}
          >
            <SuomifiHeading
              variant="h1hero"
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading 1 with hero styling
            </SuomifiHeading>
            <SuomifiHeading
              variant="h1"
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading h1
            </SuomifiHeading>
            <SuomifiHeading
              variant="h2"
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading h2
            </SuomifiHeading>
            <SuomifiHeading
              variant="h3"
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading h3
            </SuomifiHeading>
            <SuomifiHeading
              variant="h4"
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading h4
            </SuomifiHeading>
            <SuomifiHeading
              variant="h5"
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading h5
            </SuomifiHeading>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription>
          <ComponentExample
            style={{
              flexFlow: 'column',
              alignItems: 'flex-start',
            }}
          >
            <SuomifiHeading
              variant="h1hero"
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading 1 hero small screen
            </SuomifiHeading>
            <SuomifiHeading
              variant="h1"
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading h1 small screen
            </SuomifiHeading>
            <SuomifiHeading
              variant="h2"
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading h2 small screen
            </SuomifiHeading>
            <SuomifiHeading
              variant="h3"
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading h3 small screen
            </SuomifiHeading>
            <SuomifiHeading
              variant="h4"
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading h4 small screen
            </SuomifiHeading>
            <SuomifiHeading
              variant="h5"
              smallScreen
              style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
            >
              Heading h5 small screen
            </SuomifiHeading>
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
