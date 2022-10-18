import React from 'react';
import { defaultSuomifiTheme, Text, Heading } from 'suomifi-ui-components';

import typographyContent from '../../../locale/fi/typography.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/styles';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import {
  Heading as ResponsiveHeading,
  Text as ResponsiveText,
  Paragraph,
} from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';

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
  <Layout sideNavData={sideNavData}>
    <SEO title={typographyContent.title} />
    <ResponsiveHeading variant="h1">
      {typographyContent.title}
    </ResponsiveHeading>

    <Paragraph variant="lead">
      <ResponsiveText variant="lead">{typographyContent.intro}</ResponsiveText>
    </Paragraph>

    <NoteBox
      title={typographyContent['note.title']}
      items={typographyContent['note.items']}
    />

    {typographyContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}
    <ExampleBlock
      title={typographyContent['heading.title']}
      description={typographyContent['heading.description']}
    >
      <Heading
        variant="h1hero"
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Headline h1 hero, line height: ${defaultSuomifiTheme.values.typography.heading1Hero.lineHeight.value}${defaultSuomifiTheme.values.typography.heading1Hero.lineHeight.unit}`}
      </Heading>
      <Heading
        variant="h1hero"
        smallScreen
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Headline h1 hero small, line height: ${defaultSuomifiTheme.values.typography.heading1HeroSmallScreen.lineHeight.value}${defaultSuomifiTheme.values.typography.heading1HeroSmallScreen.lineHeight.unit}`}
      </Heading>
      <Heading
        variant="h1"
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Headline h1, line height: ${
          defaultSuomifiTheme.values.typography.heading1.lineHeight.value
        }${
          defaultSuomifiTheme.values.typography.heading1.lineHeight.unit || ''
        }`}
      </Heading>
      <Heading
        variant="h1"
        smallScreen
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Headline h1 small, line height: ${defaultSuomifiTheme.values.typography.heading1SmallScreen.lineHeight.value}${defaultSuomifiTheme.values.typography.heading1SmallScreen.lineHeight.unit}`}
      </Heading>
      <Heading
        variant="h2"
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Headline h2, line height: ${
          defaultSuomifiTheme.values.typography.heading2.lineHeight.value
        }${
          defaultSuomifiTheme.values.typography.heading2.lineHeight.unit || ''
        }`}
      </Heading>
      <Heading
        variant="h2"
        smallScreen
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Headline h2 small, line height: ${defaultSuomifiTheme.values.typography.heading2SmallScreen.lineHeight.value}${defaultSuomifiTheme.values.typography.heading2SmallScreen.lineHeight.unit}`}
      </Heading>
      <Heading
        variant="h3"
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Headline h3, line height: ${
          defaultSuomifiTheme.values.typography.heading3.lineHeight.value
        }${
          defaultSuomifiTheme.values.typography.heading3.lineHeight.unit || ''
        }`}
      </Heading>
      <Heading
        variant="h3"
        smallScreen
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Headline h3 small, line height: ${defaultSuomifiTheme.values.typography.heading3SmallScreen.lineHeight.value}${defaultSuomifiTheme.values.typography.heading3SmallScreen.lineHeight.unit}`}
      </Heading>
      <Heading
        variant="h4"
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Headline h4, line height: ${
          defaultSuomifiTheme.values.typography.heading4.lineHeight.value
        }${
          defaultSuomifiTheme.values.typography.heading4.lineHeight.unit || ''
        }`}
      </Heading>
      <Heading
        variant="h4"
        smallScreen
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Headline h4 small, line height: ${defaultSuomifiTheme.values.typography.heading4SmallScreen.lineHeight.value}${defaultSuomifiTheme.values.typography.heading4SmallScreen.lineHeight.unit}`}
      </Heading>
      <Heading
        variant="h5"
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Headline h5, line height: ${
          defaultSuomifiTheme.values.typography.heading5.lineHeight.value
        }${
          defaultSuomifiTheme.values.typography.heading5.lineHeight.unit || ''
        }`}
      </Heading>
    </ExampleBlock>

    <ExampleBlock
      title={typographyContent['textstyles.title']}
      description={typographyContent['textstyles.description']}
    >
      <Text
        variant="lead"
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Lead text, line height: ${
          defaultSuomifiTheme.values.typography.leadText.lineHeight.value
        }${
          defaultSuomifiTheme.values.typography.leadText.lineHeight.unit || ''
        }`}
      </Text>
      <Text
        variant="lead"
        smallScreen
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Lead text small, line height: ${
          defaultSuomifiTheme.values.typography.leadTextSmallScreen.lineHeight
            .value
        }${
          defaultSuomifiTheme.values.typography.leadTextSmallScreen.lineHeight
            .unit || ''
        }`}
      </Text>
      <Text style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}>
        {`Body text, line height: ${
          defaultSuomifiTheme.values.typography.bodyText.lineHeight.value
        }${
          defaultSuomifiTheme.values.typography.bodyText.lineHeight.unit || ''
        }`}
      </Text>
      <Text
        smallScreen
        style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
      >
        {`Body text small, line height: ${
          defaultSuomifiTheme.values.typography.bodyTextSmall.lineHeight.value
        }${
          defaultSuomifiTheme.values.typography.bodyTextSmall.lineHeight.unit ||
          ''
        }`}
      </Text>
    </ExampleBlock>
  </Layout>
);

export default Page;
