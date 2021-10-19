import React from 'react';

import headingContent from '../../../locale/fi/dropdown.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
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
  <Layout sideNavData={sideNavData}>
    <SEO title={headingContent.title} />
    <ResponsiveHeading variant="h1">{headingContent.title}</ResponsiveHeading>

    <Paragraph variant="lead">
      <Text variant="lead">{headingContent.intro}</Text>
    </Paragraph>

    <NoteBox
      title={headingContent['note.title']}
      items={headingContent['note.items']}
    />

    {headingContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={(section as any).paragraphs}
        links={section.links}
      />
    ))}
    <ComponentDescription
      mainTitle={headingContent['example.title']}
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
);

export default Page;
