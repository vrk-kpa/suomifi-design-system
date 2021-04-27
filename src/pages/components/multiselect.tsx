import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import {
  Combobox as OrigCombobox,
  ComboboxData,
  ComboboxProps,
} from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import NotificationBox from 'components/NotificationBox';

const Combobox = function <T extends ComboboxData>(
  props: ComboboxProps<T>,
): JSX.Element {
  return <OrigCombobox {...props} />;
};
Combobox.displayName = 'Combobox';

const Page: React.FC = (): React.ReactElement => {
  return (
    <Translation ns={['multiselect']}>
      {(t) => {
        const tools = [
          {
            price: 230,
            tax: false,
            labelText: t('example.tools.jackhammer'),
            uniqueItemId: 'jh2435626',
          },
          {
            price: 15,
            tax: true,
            labelText: t('example.tools.hammer'),
            uniqueItemId: 'h9823523',
          },
          {
            price: 36,
            tax: false,
            labelText: t('example.tools.sledgehammer'),
            uniqueItemId: 'sh908293482',
          },
          {
            price: 50,
            tax: true,
            labelText: t('example.tools.spade'),
            uniqueItemId: 's82502335',
          },
          {
            price: 150,
            tax: false,
            labelText: t('example.tools.powersaw'),
            disabled: true,
            uniqueItemId: 'ps9081231',
          },
          {
            price: 115,
            tax: true,
            labelText: t('example.tools.shovel'),
            uniqueItemId: 's05111511',
          },
          {
            price: 85,
            tax: false,
            labelText: t('example.tools.ironStick'),
            uniqueItemId: 'is3451261',
          },
          {
            price: 50,
            tax: true,
            labelText: t('example.tools.rake'),
            uniqueItemId: 'r09282626',
          },
          {
            price: 450,
            tax: false,
            labelText: t('example.tools.motorsaw'),
            disabled: true,
            uniqueItemId: 'ms6126266',
          },
        ];

        const defaultSelectedTools = [
          {
            price: 150,
            tax: false,
            labelText: t('example.tools.powersaw'),
            disabled: true,
            uniqueItemId: 'ps9081231',
          },
        ];

        return (
          <Layout sideNavData={sideNavData(t)}>
            <SEO title={t('title')} />
            <Heading variant="h1">{t('title')}</Heading>
            <NotificationBox />

            <Paragraph.lead>
              <Text.lead>{t('intro')}</Text.lead>
            </Paragraph.lead>

            <ComponentDescription>
              <ComponentExample>
                <Combobox
                  labelText={t('example.label')}
                  items={tools}
                  chipListVisible
                  chipActionLabel={t('example.chipActionLabel')}
                  removeAllButtonLabel={t('example.removeAllSelections')}
                  visualPlaceholder={t('example.visualPlaceholder')}
                  emptyItemsLabel={t('example.noItems')}
                  defaultSelectedItems={defaultSelectedTools}
                />
              </ComponentExample>
            </ComponentDescription>

            <NoteBox title={t('note.title')} items={t('note.items')} />

            {t<SectionProps[]>('sections').map((section, index) => (
              <Section
                key={index}
                mainTitle={section.title}
                paragraphs={section.paragraphs}
                links={section.links}
              />
            ))}
          </Layout>
        );
      }}
    </Translation>
  );
};

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
