import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import { suomifiDesignTokens } from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/styles';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import {
  Heading as SuomifiHeading,
  Text as SuomifiText,
} from 'components/ExampleComponents';

interface ExampleBlockProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ExampleBlock = ({
  title,
  description,
  children,
}: ExampleBlockProps): JSX.Element => (
  <ComponentDescription
    mainTitle={title}
    description={description}
    exampleFirst={false}
  >
    <ComponentExample
      style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {children}
    </ComponentExample>
  </ComponentDescription>
);

const Page = (): JSX.Element => (
  <Translation ns={['typography']}>
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
        <ExampleBlock
          title={t('heading.title')}
          description={t('heading.description')}
        >
          <SuomifiHeading
            variant="h1hero"
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Headline h1 hero, line height: ${suomifiDesignTokens.values.typography.heading1Hero.lineHeight.value}${suomifiDesignTokens.values.typography.heading1Hero.lineHeight.unit}`}
          </SuomifiHeading>
          <SuomifiHeading
            variant="h1hero"
            smallScreen
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Headline h1 hero small, line height: ${suomifiDesignTokens.values.typography.heading1HeroSmallScreen.lineHeight.value}${suomifiDesignTokens.values.typography.heading1HeroSmallScreen.lineHeight.unit}`}
          </SuomifiHeading>
          <SuomifiHeading
            variant="h1"
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Headline h1, line height: ${
              suomifiDesignTokens.values.typography.heading1.lineHeight.value
            }${
              suomifiDesignTokens.values.typography.heading1.lineHeight.unit ||
              ''
            }`}
          </SuomifiHeading>
          <SuomifiHeading
            variant="h1"
            smallScreen
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Headline h1 small, line height: ${suomifiDesignTokens.values.typography.heading1SmallScreen.lineHeight.value}${suomifiDesignTokens.values.typography.heading1SmallScreen.lineHeight.unit}`}
          </SuomifiHeading>
          <SuomifiHeading
            variant="h2"
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Headline h2, line height: ${
              suomifiDesignTokens.values.typography.heading2.lineHeight.value
            }${
              suomifiDesignTokens.values.typography.heading2.lineHeight.unit ||
              ''
            }`}
          </SuomifiHeading>
          <SuomifiHeading
            variant="h2"
            smallScreen
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Headline h2 small, line height: ${suomifiDesignTokens.values.typography.heading2SmallScreen.lineHeight.value}${suomifiDesignTokens.values.typography.heading2SmallScreen.lineHeight.unit}`}
          </SuomifiHeading>
          <SuomifiHeading
            variant="h3"
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Headline h3, line height: ${
              suomifiDesignTokens.values.typography.heading3.lineHeight.value
            }${
              suomifiDesignTokens.values.typography.heading3.lineHeight.unit ||
              ''
            }`}
          </SuomifiHeading>
          <SuomifiHeading
            variant="h3"
            smallScreen
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Headline h3 small, line height: ${suomifiDesignTokens.values.typography.heading3SmallScreen.lineHeight.value}${suomifiDesignTokens.values.typography.heading3SmallScreen.lineHeight.unit}`}
          </SuomifiHeading>
          <SuomifiHeading
            variant="h4"
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Headline h4, line height: ${
              suomifiDesignTokens.values.typography.heading4.lineHeight.value
            }${
              suomifiDesignTokens.values.typography.heading4.lineHeight.unit ||
              ''
            }`}
          </SuomifiHeading>
          <SuomifiHeading
            variant="h4"
            smallScreen
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Headline h4 small, line height: ${suomifiDesignTokens.values.typography.heading4SmallScreen.lineHeight.value}${suomifiDesignTokens.values.typography.heading4SmallScreen.lineHeight.unit}`}
          </SuomifiHeading>
          <SuomifiHeading
            variant="h5"
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Headline h5, line height: ${
              suomifiDesignTokens.values.typography.heading5.lineHeight.value
            }${
              suomifiDesignTokens.values.typography.heading5.lineHeight.unit ||
              ''
            }`}
          </SuomifiHeading>
        </ExampleBlock>

        <ExampleBlock
          title={t('textstyles.title')}
          description={t('textstyles.description')}
        >
          <SuomifiText.lead
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Lead text, line height: ${
              suomifiDesignTokens.values.typography.leadText.lineHeight.value
            }${
              suomifiDesignTokens.values.typography.leadText.lineHeight.unit ||
              ''
            }`}
          </SuomifiText.lead>
          <SuomifiText.lead
            smallScreen
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Lead text small, line height: ${
              suomifiDesignTokens.values.typography.leadTextSmallScreen
                .lineHeight.value
            }${
              suomifiDesignTokens.values.typography.leadTextSmallScreen
                .lineHeight.unit || ''
            }`}
          </SuomifiText.lead>
          <SuomifiText
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Body text, line height: ${
              suomifiDesignTokens.values.typography.bodyText.lineHeight.value
            }${
              suomifiDesignTokens.values.typography.bodyText.lineHeight.unit ||
              ''
            }`}
          </SuomifiText>
          <SuomifiText
            smallScreen
            style={{ margin: `${suomifiDesignTokens.spacing.xs} 0` }}
          >
            {`Body text small, line height: ${
              suomifiDesignTokens.values.typography.bodyTextSmall.lineHeight
                .value
            }${
              suomifiDesignTokens.values.typography.bodyTextSmall.lineHeight
                .unit || ''
            }`}
          </SuomifiText>
        </ExampleBlock>
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
