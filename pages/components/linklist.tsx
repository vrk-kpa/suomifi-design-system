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
  Link as ExampleLink,
  LinkList,
  LinkListItem,
} from 'suomifi-ui-components';

const LinkListPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('link_list_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('link_list_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/LinkList"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('link_list_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample>
          <Block variant="div">
            <Heading variant="h3" id="link-list-heading-default">
              {t('link_list_page.example.default.list_heading')}
            </Heading>
            <LinkList ariaLabelledBy="link-list-heading-default">
              <LinkListItem>
                <ExampleLink href="#">
                  {t('link_list_page.example.default.link_1')}
                </ExampleLink>
              </LinkListItem>
              <LinkListItem>
                <ExampleLink href="#">
                  {t('link_list_page.example.default.link_2')}
                </ExampleLink>
              </LinkListItem>
              <LinkListItem>
                <ExampleLink href="#">
                  {t('link_list_page.example.default.link_3')}
                </ExampleLink>
              </LinkListItem>
            </LinkList>
          </Block>
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('link_list_page.accessibility_list.point_1')}</li>
              <li>{t('link_list_page.accessibility_list.point_2')}</li>
              <li>{t('link_list_page.accessibility_list.point_3')}</li>
            </ul>
          </InfoBox>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('link_list_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('link_list_page.what_does_the_component_contain.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('link_list_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('link_list_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default LinkListPage;
