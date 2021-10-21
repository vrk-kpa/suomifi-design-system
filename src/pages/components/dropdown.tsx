import React from 'react';

import dropdownContent from '../../../locale/fi/dropdown.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import { Dropdown, DropdownItem } from 'components/ExampleComponents';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={dropdownContent.title} />
    <Heading variant="h1">{dropdownContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{dropdownContent.intro}</Text>
    </Paragraph>

    <ComponentDescription
      mainTitle={dropdownContent['example.title']}
      description={dropdownContent['example.description']}
    >
      <ComponentExample>
        <Dropdown name="Dropdown" labelText={dropdownContent['example.label']}>
          <DropdownItem value="1">
            {dropdownContent['example.option1']}
          </DropdownItem>
          <DropdownItem value="2">
            {dropdownContent['example.option2']}
          </DropdownItem>
          <DropdownItem value="3">
            {dropdownContent['example.option3']}
          </DropdownItem>
        </Dropdown>
      </ComponentExample>
    </ComponentDescription>

    <NoteBox
      title={dropdownContent['note.title']}
      items={dropdownContent['note.items']}
    />

    {dropdownContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}

    <ComponentDescription
      mainTitle={dropdownContent['example1.title']}
      description={dropdownContent['example1.description']}
    >
      <ComponentExample>
        <Dropdown
          visualPlaceholder={dropdownContent['example1.placeholder']}
          alwaysShowVisualPlaceholder
          labelText={dropdownContent['example1.label']}
          onChange={(action) => console.log(action, 'selected')}
        >
          <DropdownItem value="Toiminto1">
            {dropdownContent['example1.option1']}
          </DropdownItem>
          <DropdownItem value="Toiminto2">
            {dropdownContent['example1.option2']}
          </DropdownItem>
        </Dropdown>
      </ComponentExample>
    </ComponentDescription>
  </Layout>
);

export default Page;
