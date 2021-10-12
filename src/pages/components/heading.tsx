import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import {
  Heading as ResponsiveHeading,
  Text,
  Paragraph,
} from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { Heading } from 'components/ExampleComponents';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

const Page = (): JSX.Element => (
  <Translation ns={['heading']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <ResponsiveHeading variant="h1">{t('title')}</ResponsiveHeading>

        <Paragraph variant="lead">
          <Text variant="lead">{t('intro')}</Text>
        </Paragraph>

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
            <Heading
              variant="h1hero"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading 1 with hero styling
            </Heading>
            <Heading
              variant="h1"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h1
            </Heading>
            <Heading
              variant="h2"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h2
            </Heading>
            <Heading
              variant="h3"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h3
            </Heading>
            <Heading
              variant="h4"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h4
            </Heading>
            <Heading
              variant="h5"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h5
            </Heading>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription>
          <ComponentExample
            style={{
              flexFlow: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Heading
              variant="h1hero"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading 1 hero small screen
            </Heading>
            <Heading
              variant="h1"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h1 small screen
            </Heading>
            <Heading
              variant="h2"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h2 small screen
            </Heading>
            <Heading
              variant="h3"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h3 small screen
            </Heading>
            <Heading
              variant="h4"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h4 small screen
            </Heading>
            <Heading
              variant="h5"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h5 small screen
            </Heading>
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
