import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import {
  Heading,
  Text,
  Paragraph,
  Block,
  ExternalLink,
} from 'suomifi-ui-components';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/patterns-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import { TableWithFilters } from '../../components/TableWithFilters/TableWithFilters';

const TableWithFiltersPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>
          {`${t('table_with_filters.heading')} | Suomi.fi Design System`}
        </title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.patterns')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('table_with_filters.heading')}</Heading>
        <Block my="xl">
          <Text variant="lead">{t('table_with_filters.ingress')}</Text>
        </Block>

        <Block mb="xxxl">
          <Heading variant="h2" className="mb-l">
            {t('table_with_filters.reference_implementation.heading')}
          </Heading>
          <Paragraph mb="l">
            {t('table_with_filters.reference_implementation.paragraph')}
          </Paragraph>
          <ExternalLink
            labelNewWindow={t('common.opens_in_a_new_tab')}
            href="https://github.com/vrk-kpa/suomifi-design-system/tree/develop/components/TableWithFilters/TableWithFilters.tsx"
          >
            {t('table_with_filters.reference_implementation.link_text')}
          </ExternalLink>
          <Block mt="xxl">
            <TableWithFilters />
          </Block>
        </Block>

        <Block variant="section" my="xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('table_with_filters.accessibility_list.point_1')}</li>
              <li>{t('table_with_filters.accessibility_list.point_2')}</li>
              <li>{t('table_with_filters.accessibility_list.point_3')}</li>
              <li>{t('table_with_filters.accessibility_list.point_4')}</li>
              <li>{t('table_with_filters.accessibility_list.point_5')}</li>
              <li>{t('table_with_filters.accessibility_list.point_6')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block mb="l">
          <Heading variant="h2">
            {t('table_with_filters.components_text')}
          </Heading>
          <ul>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Table"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.table')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Pagination"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.pagination')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Dropdown"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.dropdown')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/TextInput"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.text_input')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Button"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.button')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Block"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.block')}
              </ExternalLink>
            </li>
          </ul>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default TableWithFiltersPage;
