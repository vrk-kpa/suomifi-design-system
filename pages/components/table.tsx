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
  Table,
  TableColumn,
  Link,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  const columns: TableColumn[] = [
    {
      key: 'firstName',
      labelText: 'Etunimi',
    },
    {
      key: 'lastName',
      labelText: 'Sukunimi',
    },
    {
      key: 'hours_worked',
      labelText: 'Työtunnit',
      textAlign: 'right',
    },
    {
      key: 'title',
      labelText: 'Titteli',
    },
    {
      key: 'country',
      labelText: 'Maa',
      className: 'my-custom-class',
    },
  ];

  const data = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      hours_worked: 125,
      title: 'Kehittäjä',
      country: 'Iso-Britannia',
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Doe',
      hours_worked: 150,
      title: 'Arkkitehti',
      country: 'Norja',
    },
    {
      id: '3',
      firstName: 'Bruce',
      lastName: 'Willis',
      hours_worked: 10,
      title: 'Projektipäällikkö',
      country: 'Yhdysvallat',
    },
    {
      id: '4',
      firstName: 'Harriet',
      lastName: 'Ackermann',
      hours_worked: '45',
      title: 'Tietoturva-asiantuntija',
      country: 'Saksa',
    },
    {
      id: '5',
      firstName: 'Alexander',
      lastName: 'Stubb',
      hours_worked: 2543,
      title: 'Presidentti',
      country: 'Suomi',
    },
  ];
  return (
    <>
      <Head>
        <title>{t('table_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('table_page.heading')}</Heading>
        <Block variant="div" mt="m" mb="xxs">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Table"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Block variant="div" mb="l">
          <Link href="/patterns/table-with-filters" variant="accent">
            {t('table_with_filters.heading')}
          </Link>
        </Block>

        <Paragraph className="my-xl">
          <Text variant="lead">{t('table_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample>
          <Table
            caption={t('table_page.example.caption')}
            columns={columns}
            data={data}
          />
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('table_page.accessibility_list.point_1')}</li>
              <li>{t('table_page.accessibility_list.point_2')}</li>
              <li>
                {t('table_page.accessibility_list.point_3')}{' '}
                <Link href="/patterns/table-with-filters">
                  {t('table_with_filters.heading')}
                </Link>
              </li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('table_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('table_page.what_does_the_component_contain.text_1')}
          </Paragraph>

          <Paragraph className="my-xl">
            {t('table_page.what_does_the_component_contain.text_2')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('table_page.what_does_the_component_contain.text_3')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('table_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('table_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="mt-xl mb-s">
            {t('table_page.size_and_usage.text_2')}
          </Paragraph>
          <Block variant="div" mb="xl">
            <Link href="/patterns/table-with-filters" variant="accent">
              {t('table_with_filters.heading')}
            </Link>
          </Block>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
