import React from 'react';

import searchInputContent from '../../../locale/fi/searchinput.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { defaultSuomifiTheme, SearchInput } from 'suomifi-ui-components';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={searchInputContent.title} />
    <Heading variant="h1">{searchInputContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{searchInputContent.intro}</Text>
    </Paragraph>

    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <SearchInput
          labelText={searchInputContent['exampleRegular.label']}
          clearButtonLabel={
            searchInputContent['exampleRegular.clearButtonLabel']
          }
          searchButtonLabel={
            searchInputContent['exampleRegular.searchButtonLabel']
          }
        />
      </ComponentExample>
    </ComponentDescription>

    <NoteBox
      title={searchInputContent['note.title']}
      items={searchInputContent['note.items']}
    />

    {searchInputContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}
  </Layout>
);

export default Page;
