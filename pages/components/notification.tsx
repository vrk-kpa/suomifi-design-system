import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import { useState } from 'react';
import {
  Block,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
  MultiSelect,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();

  const tools = [
    {
      price: 230,
      tax: false,
      labelText: t('notification_page.example.tools.jackhammer'),
      uniqueItemId: 'jh2435626',
    },
    {
      price: 15,
      tax: true,
      labelText: t('notification_page.example.tools.hammer'),
      uniqueItemId: 'h9823523',
    },
    {
      price: 36,
      tax: false,
      labelText: t('notification_page.example.tools.sledgehammer'),
      uniqueItemId: 'sh908293482',
    },
    {
      price: 50,
      tax: true,
      labelText: t('notification_page.example.tools.spade'),
      uniqueItemId: 's82502335',
    },
    {
      price: 150,
      tax: false,
      labelText: t('notification_page.example.tools.powersaw'),
      disabled: true,
      uniqueItemId: 'ps9081231',
    },
    {
      price: 115,
      tax: true,
      labelText: t('notification_page.example.tools.shovel'),
      uniqueItemId: 's05111511',
    },
    {
      price: 85,
      tax: false,
      labelText: t('notification_page.example.tools.ironstick'),
      uniqueItemId: 'is3451261',
    },
    {
      price: 50,
      tax: true,
      labelText: t('notification_page.example.tools.rake'),
      uniqueItemId: 'r09282626',
    },
    {
      price: 450,
      tax: false,
      labelText: t('notification_page.example.tools.motorsaw'),
      disabled: true,
      uniqueItemId: 'ms6126266',
    },
  ];

  const defaultSelectedTools = [
    {
      price: 150,
      tax: false,
      labelText: t('notification_page.example.tools.powersaw'),
      disabled: true,
      uniqueItemId: 'ps9081231',
    },
  ];

  return (
    <>
      <Head>
        <title>{t('notification_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('notification_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Notification"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('notification_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section">
          <ComponentExample>
            <MultiSelect
              labelText={t('notification_page.example.label')}
              hintText={t('notification_page.example.hint_text')}
              items={tools}
              defaultSelectedItems={defaultSelectedTools}
              chipListVisible
              ariaChipActionLabel={t(
                'notification_page.example.chip_action_label',
              )}
              removeAllButtonLabel={t(
                'notification_page.example.remove_all_selections',
              )}
              visualPlaceholder={t(
                'notification_page.example.visual_placeholder',
              )}
              noItemsText={t('notification_page.example.no_items')}
              ariaSelectedAmountText={t(
                'notification_page.example.selected_amount_text',
              )}
              ariaOptionsAvailableText={t(
                'notification_page.example.options_available_text',
              )}
              ariaOptionChipRemovedText={t(
                'notification_page.example.option_chip_removed_text',
              )}
            />
          </ComponentExample>
        </Block>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('notification_page.accessibility_list.point_1')}</li>
              <li>{t('notification_page.accessibility_list.point_2')}</li>
              <li>{t('notification_page.accessibility_list.point_3')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('notification_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('notification_page.what_does_the_component_contain.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('notification_page.what_does_the_component_contain.text_2')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('notification_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('notification_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
