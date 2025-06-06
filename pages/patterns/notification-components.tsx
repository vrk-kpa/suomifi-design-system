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
import InfoBox from '../../components/InfoBox/InfoBox';

const TableWithFiltersPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>
          {`${t('notification-components.heading')} | Suomi.fi Design System`}
        </title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.patterns')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('notification-components.heading')}</Heading>
        <Block my="xl">
          <Text variant="lead">{t('notification-components.ingress')}</Text>
        </Block>

        <Block mb="xxxl">
          <Table
            caption={t('notification-components.table.heading')}
            columns={[
              {
                labelText: '',
                key: 'component',
              },
              {
                labelText: t(
                  'notification-components.table.notification_target',
                ),
                key: 'notificationTarget',
                className: 'testing-class',
              },
              {
                labelText: t(
                  'notification-components.table.appears_dynamically',
                ),
                key: 'appearsDynamically',
              },
              {
                labelText: t('notification-components.table.location'),
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
                  'notification-components.table.alert.target',
                ),
                appearsDynamically: t(
                  'notification-components.table.alert.appears',
                ),
                location: t('notification-components.table.alert.location'),
              },
              {
                id: '2',
                component: (
                  <Link href="/components/inlinealert">
                    {t('components.inline_alert')}
                  </Link>
                ),
                notificationTarget: t(
                  'notification-components.table.inline_alert.target',
                ),
                appearsDynamically: t(
                  'notification-components.table.inline_alert.appears',
                ),
                location: t(
                  'notification-components.table.inline_alert.location',
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
                  'notification-components.table.notification.target',
                ),
                appearsDynamically: t(
                  'notification-components.table.notification.appears',
                ),
                location: t(
                  'notification-components.table.notification.location',
                ),
              },
              {
                id: '4',
                component: (
                  <Link href="/components/toast">{t('components.toast')}</Link>
                ),
                notificationTarget: t(
                  'notification-components.table.toast.target',
                ),
                appearsDynamically: t(
                  'notification-components.table.toast.appears',
                ),
                location: t('notification-components.table.toast.location'),
              },
            ]}
            className="notification-components-table"
          />
        </Block>

        <Block variant="section" my="xl"></Block>
      </SideNavLayout>
    </>
  );
};

export default TableWithFiltersPage;
