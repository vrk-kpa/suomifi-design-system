import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import {
  Dropdown,
  DropdownItem as OrigDropdownItem,
  DropdownItemProps,
} from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import NotificationBox from 'components/NotificationBox';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

Dropdown.displayName = 'Dropdown';
const DropdownItem = (props: DropdownItemProps): JSX.Element => {
  return <OrigDropdownItem {...props} />;
};

DropdownItem.displayName = 'DropdownItem';

const Page = (): JSX.Element => (
  <Translation ns={['dropdown']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading variant="h1">{t('title')}</Heading>
        <NotificationBox notificationText={t('notification.content')} />

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        <ComponentDescription
          mainTitle={t('example.title')}
          description={t('example.description')}
        >
          <ComponentExample>
            <Dropdown name="Dropdown" labelText={t('example.label')}>
              <DropdownItem value="1">{t('example.option1')}</DropdownItem>
              <DropdownItem value="2">{t('example.option2')}</DropdownItem>
              <DropdownItem value="3">{t('example.option3')}</DropdownItem>
            </Dropdown>
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

        <ComponentDescription
          mainTitle={t('example1.title')}
          description={t('example1.description')}
        >
          <ComponentExample>
            <Dropdown
              visualPlaceholder={t('example1.placeholder')}
              alwaysShowVisualPlaceholder
              labelText={t('example1.label')}
              onChange={(action) => console.log(action, 'selected')}
            >
              <DropdownItem value="Toiminto1">
                {t('example1.option1')}
              </DropdownItem>
              <DropdownItem value="Toiminto2">
                {t('example1.option2')}
              </DropdownItem>
            </Dropdown>
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
