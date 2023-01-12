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
  LanguageMenu,
  LanguageMenuItem,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();

  const [language, setLanguage] = useState(
    t('language_menu_page.example.menuitem1short'),
  );
  return (
    <>
      <Head>
        <title>{t('language_menu_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('language_menu_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/LanguageMenu"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('language_menu_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section">
          <ComponentExample>
            <LanguageMenu name={language}>
              <LanguageMenuItem
                onSelect={() =>
                  setLanguage(t('language_menu_page.example.menuitem1short'))
                }
                selected={
                  language === t('language_menu_page.example.menuitem1short')
                }
              >
                {t('language_menu_page.example.menuitem1')}
              </LanguageMenuItem>
              <LanguageMenuItem
                onSelect={() =>
                  setLanguage(t('language_menu_page.example.menuitem2short'))
                }
                selected={
                  language === t('language_menu_page.example.menuitem2short')
                }
              >
                {t('language_menu_page.example.menuitem2')}
              </LanguageMenuItem>
              <LanguageMenuItem
                onSelect={() =>
                  setLanguage(t('language_menu_page.example.menuitem3short'))
                }
                selected={
                  language === t('language_menu_page.example.menuitem3short')
                }
              >
                {t('language_menu_page.example.menuitem3')}
              </LanguageMenuItem>
            </LanguageMenu>
          </ComponentExample>
        </Block>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('language_menu_page.accessibility_list.point_1')}</li>
              <li>{t('language_menu_page.accessibility_list.point_2')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('language_menu_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('language_menu_page.what_does_the_component_contain.text')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('language_menu_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('language_menu_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('language_menu_page.in_ui.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('language_menu_page.in_ui.text')}
          </Paragraph>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
