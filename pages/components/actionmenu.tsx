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
  ActionMenu,
  ActionMenuItem,
  ActionMenuDivider,
  IconCopy,
  IconEdit,
  IconGrid,
  IconRemove,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('actionmenu_page.heading')} | Suomi.fi Design System</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('actionmenu_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/ActionMenu"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('actionmenu_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section">
          <ComponentExample>
            <ActionMenu
              buttonText={t('actionmenu_page.example.label')}
              name="ActionMenu"
              aria-label={t('actionmenu_page.example.label')}
            >
              <ActionMenuItem>
                {t('actionmenu_page.example.option1')}
              </ActionMenuItem>
              <ActionMenuItem>
                {t('actionmenu_page.example.option2')}
              </ActionMenuItem>
              <ActionMenuItem>
                {t('actionmenu_page.example.option3')}
              </ActionMenuItem>
              <ActionMenuItem>
                {t('actionmenu_page.example.option4')}
              </ActionMenuItem>
            </ActionMenu>
          </ComponentExample>
        </Block>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('actionmenu_page.accessibility_list.point_1')}</li>
              <li>{t('actionmenu_page.accessibility_list.point_2')}</li>
              <li>{t('actionmenu_page.accessibility_list.point_3')}</li>
              <li>{t('actionmenu_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('actionmenu_page.what_does_the_component_contain.heading')}
          </Heading>

          <ul>
            <li>
              {t('actionmenu_page.what_does_the_component_contain.text_1')}
            </li>
            <li>
              {t('actionmenu_page.what_does_the_component_contain.text_2')}
            </li>
            <li>
              {t('actionmenu_page.what_does_the_component_contain.text_3')}
            </li>
            <li>
              {t('actionmenu_page.what_does_the_component_contain.text_4')}
            </li>
          </ul>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('actionmenu_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('actionmenu_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('actionmenu_page.size_and_usage.text_2')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('actionmenu_page.size_and_usage.text_3')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('actionmenu_page.example.example1.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('actionmenu_page.example.example1.description')}
          </Paragraph>

          <ComponentExample>
            <ActionMenu buttonText={t('actionmenu_page.example.label')}>
              <ActionMenuItem
                onClick={() => console.log('Copy')}
                icon={<IconCopy />}
              >
                {t('actionmenu_page.example.option1')}
              </ActionMenuItem>
              <ActionMenuItem
                onClick={() => console.log('Edit')}
                icon={<IconEdit />}
              >
                {t('actionmenu_page.example.option2')}
              </ActionMenuItem>
              <ActionMenuItem
                onClick={() => console.log('Move')}
                icon={<IconGrid />}
              >
                {t('actionmenu_page.example.option3')}
              </ActionMenuItem>
              <ActionMenuDivider />
              <ActionMenuItem
                onClick={() => console.log('Remove')}
                icon={<IconRemove />}
              >
                {t('actionmenu_page.example.option4')}
              </ActionMenuItem>
            </ActionMenu>
          </ComponentExample>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl mt-xl">
            {t('actionmenu_page.example.example2.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('actionmenu_page.example.example2.description')}
          </Paragraph>

          <ComponentExample>
            <ActionMenu
              name="ActionMenu"
              aria-label={t('actionmenu_page.example.label')}
            >
              <ActionMenuItem>
                {t('actionmenu_page.example.option1')}
              </ActionMenuItem>
              <ActionMenuItem>
                {t('actionmenu_page.example.option2')}
              </ActionMenuItem>
              <ActionMenuItem>
                {t('actionmenu_page.example.option3')}
              </ActionMenuItem>
              <ActionMenuItem>
                {t('actionmenu_page.example.option4')}
              </ActionMenuItem>
            </ActionMenu>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
