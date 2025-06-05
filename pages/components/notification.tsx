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
  Link,
  Notification,
  defaultSuomifiTheme,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();

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
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('notification_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section">
          <ComponentExample
            style={{
              marginBottom: defaultSuomifiTheme.spacing.s,
              display: 'block',
            }}
          >
            <Notification
              closeText={t('notification_page.example.info.close_button')}
              headingText={t('notification_page.example.info.heading')}
            >
              {t('notification_page.example.info.paragraph')}
            </Notification>
            <Notification
              status="error"
              closeText={t('notification_page.example.error.close_button')}
              headingText={t('notification_page.example.error.heading')}
              mt="l"
            >
              {t('notification_page.example.error.paragraph')}
            </Notification>
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
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('notification_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('notification_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('notification_page.size_and_usage.text_2')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('notification_page.example.info.section_heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('notification_page.example.info.description')}
          </Paragraph>

          <ComponentExample
            style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
          >
            <Notification
              closeText={t('notification_page.example.info.close_button')}
              headingText={t('notification_page.example.info.heading')}
              actionElements={
                <Link href="#">
                  {t('notification_page.example.info.action_link')}
                </Link>
              }
            >
              {t('notification_page.example.info.paragraph')}
            </Notification>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
