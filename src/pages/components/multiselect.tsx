import React from 'react';

import multiSelectContent from '../../../locale/fi/multiselect.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import NotificationBox from 'components/NotificationBox';
import { MultiSelect } from 'components/ExampleComponents';

const Page: React.FC = (): React.ReactElement => {
  const tools = [
    {
      price: 230,
      tax: false,
      labelText: multiSelectContent['example.tools.jackhammer'],
      uniqueItemId: 'jh2435626',
    },
    {
      price: 15,
      tax: true,
      labelText: multiSelectContent['example.tools.hammer'],
      uniqueItemId: 'h9823523',
    },
    {
      price: 36,
      tax: false,
      labelText: multiSelectContent['example.tools.sledgehammer'],
      uniqueItemId: 'sh908293482',
    },
    {
      price: 50,
      tax: true,
      labelText: multiSelectContent['example.tools.spade'],
      uniqueItemId: 's82502335',
    },
    {
      price: 150,
      tax: false,
      labelText: multiSelectContent['example.tools.powersaw'],
      disabled: true,
      uniqueItemId: 'ps9081231',
    },
    {
      price: 115,
      tax: true,
      labelText: multiSelectContent['example.tools.shovel'],
      uniqueItemId: 's05111511',
    },
    {
      price: 85,
      tax: false,
      labelText: multiSelectContent['example.tools.ironStick'],
      uniqueItemId: 'is3451261',
    },
    {
      price: 50,
      tax: true,
      labelText: multiSelectContent['example.tools.rake'],
      uniqueItemId: 'r09282626',
    },
    {
      price: 450,
      tax: false,
      labelText: multiSelectContent['example.tools.motorsaw'],
      disabled: true,
      uniqueItemId: 'ms6126266',
    },
  ];

  const defaultSelectedTools = [
    {
      price: 150,
      tax: false,
      labelText: multiSelectContent['example.tools.powersaw'],
      disabled: true,
      uniqueItemId: 'ps9081231',
    },
  ];

  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={multiSelectContent.title} />
      <Heading variant="h1">{multiSelectContent.title}</Heading>
      <NotificationBox
        notificationText={multiSelectContent['note.accessibility']}
      />

      <Paragraph variant="lead">
        <Text variant="lead">{multiSelectContent.intro}</Text>
      </Paragraph>

      <ComponentDescription>
        <ComponentExample>
          <MultiSelect
            labelText={multiSelectContent['example.label']}
            hintText={multiSelectContent['example.hintText']}
            items={tools}
            defaultSelectedItems={defaultSelectedTools}
            chipListVisible
            ariaChipActionLabel={multiSelectContent['example.chipActionLabel']}
            removeAllButtonLabel={
              multiSelectContent['example.removeAllSelections']
            }
            visualPlaceholder={multiSelectContent['example.visualPlaceholder']}
            noItemsText={multiSelectContent['example.noItems']}
            ariaSelectedAmountText={
              multiSelectContent['example.selectedAmountText']
            }
            ariaOptionsAvailableText={
              multiSelectContent['example.optionsAvailableText']
            }
            ariaOptionChipRemovedText={
              multiSelectContent['example.optionChipRemovedText']
            }
          />
        </ComponentExample>
      </ComponentDescription>

      <NoteBox
        title={multiSelectContent['note.title']}
        items={multiSelectContent['note.items']}
      />

      {multiSelectContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={(section as any).paragraphs}
          links={section.links}
        />
      ))}
    </Layout>
  );
};

export default Page;
