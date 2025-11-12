import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import {
  Heading,
  Text,
  Paragraph,
  Block,
  ExternalLink,
  Table,
  Link,
} from 'suomifi-ui-components';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/patterns-sidenav';
import AriaLiveExample from '../../components/AriaLiveExample/AriaLiveExample';

const TableWithFiltersPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('notification_components.site_title')}</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.patterns')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('notification_components.heading')}</Heading>
        <Block my="xl">
          <Text variant="lead">{t('notification_components.ingress')}</Text>
        </Block>

        <Block mb="xxl">
          <Heading variant="h2" id="table-heading">
            {t('notification_components.table.heading')}
          </Heading>
          <Table
            mt="l"
            aria-labelledby="table-heading"
            columns={[
              {
                labelText: '',
                key: 'component',
              },
              {
                labelText: t(
                  'notification_components.table.notification_target',
                ),
                key: 'notificationTarget',
                className: 'testing-class',
              },
              {
                labelText: t(
                  'notification_components.table.appears_dynamically',
                ),
                key: 'appearsDynamically',
              },
              {
                labelText: t('notification_components.table.location'),
                key: 'location',
              },
            ]}
            data={[
              {
                id: '1',
                component: (
                  <Link href="/components/alert">{t('components.alert')}</Link>
                ),
                notificationTarget: t(
                  'notification_components.table.alert.target',
                ),
                appearsDynamically: t(
                  'notification_components.table.alert.appears',
                ),
                location: t('notification_components.table.alert.location'),
              },
              {
                id: '2',
                component: (
                  <Link href="/components/inlinealert">
                    {t('components.inline_alert')}
                  </Link>
                ),
                notificationTarget: t(
                  'notification_components.table.inline_alert.target',
                ),
                appearsDynamically: t(
                  'notification_components.table.inline_alert.appears',
                ),
                location: t(
                  'notification_components.table.inline_alert.location',
                ),
              },
              {
                id: '3',
                component: (
                  <Link href="/components/notification">
                    {t('components.notification')}
                  </Link>
                ),
                notificationTarget: t(
                  'notification_components.table.notification.target',
                ),
                appearsDynamically: t(
                  'notification_components.table.notification.appears',
                ),
                location: t(
                  'notification_components.table.notification.location',
                ),
              },
              {
                id: '4',
                component: (
                  <Link href="/components/toast">{t('components.toast')}</Link>
                ),
                notificationTarget: t(
                  'notification_components.table.toast.target',
                ),
                appearsDynamically: t(
                  'notification_components.table.toast.appears',
                ),
                location: t('notification_components.table.toast.location'),
              },
            ]}
            className="notification-components-table"
          />
        </Block>

        <Block variant="section" mb="xl">
          <Heading variant="h2" mb="l">
            {t('notification_components.arialive.heading')}
          </Heading>
          <Paragraph mb="l">
            {t('notification_components.arialive.text_1')}
          </Paragraph>
          <Paragraph mb="l">
            {t('notification_components.arialive.text_2')}
          </Paragraph>
          <ExternalLink
            labelNewWindow={t('common.opens_in_a_new_tab')}
            href="https://github.com/vrk-kpa/suomifi-design-system/tree/develop/components/AriaLiveExample/AriaLiveExample.tsx"
          >
            {t('notification_components.reference_implementation.link_text')}
          </ExternalLink>
        </Block>
        <Block mb="xxxl" variant="section">
          <AriaLiveExample />
        </Block>
      </SideNavLayout>
    </>
  );
};

export default TableWithFiltersPage;
