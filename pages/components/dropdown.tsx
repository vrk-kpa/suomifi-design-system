import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {
  Block,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
  Dropdown,
  DropdownItem,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('dropdown_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('dropdown_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Dropdown"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('dropdown_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section">
          <ComponentExample>
            <Dropdown
              name="Dropdown"
              visualPlaceholder={t('dropdown_page.example.placeholder')}
              labelText={t('dropdown_page.example.label')}
            >
              <DropdownItem value="1">
                {t('dropdown_page.example.option1')}
              </DropdownItem>
              <DropdownItem value="2">
                {t('dropdown_page.example.option2')}
              </DropdownItem>
              <DropdownItem value="3">
                {t('dropdown_page.example.option3')}
              </DropdownItem>
              <DropdownItem value="4">
                {t('dropdown_page.example.option4')}
              </DropdownItem>
            </Dropdown>
          </ComponentExample>
        </Block>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('dropdown_page.accessibility_list.point_1')}</li>
              <li>{t('dropdown_page.accessibility_list.point_2')}</li>
              <li>{t('dropdown_page.accessibility_list.point_3')}</li>
              <li>{t('dropdown_page.accessibility_list.point_4')}</li>
              <li>{t('dropdown_page.accessibility_list.point_5')}</li>
              <li>{t('dropdown_page.accessibility_list.point_6')}</li>
              <li>{t('dropdown_page.accessibility_list.point_7')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('dropdown_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('dropdown_page.what_does_the_component_contain.text')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('dropdown_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('dropdown_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
