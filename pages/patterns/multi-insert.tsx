import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import {
  Heading,
  Text,
  Paragraph,
  Block,
  RouterLink,
  ExternalLink,
} from 'suomifi-ui-components';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/patterns-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import Link from 'next/link';
import { MultiInsert } from '../../components/MultiInsert/MultiInsert';

const MultiInsertPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('multi-insert.heading')} | Suomi.fi Design System</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.patterns')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('multi-insert.heading')}</Heading>
        <Block my="xl">
          <Text variant="lead">{t('multi-insert.ingress')}</Text>
        </Block>
        <Block mb="l">
          <Paragraph>{t('multi-insert.components_text')}</Paragraph>
          <ul>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Block"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.block')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/button"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.button')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Label"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.label')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/HintText"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.hint_text')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Toast"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.toast')}
              </ExternalLink>
            </li>
            <li>{t('multi-insert.and_other_needed_components')}</li>
          </ul>
        </Block>
        <Block variant="section" my="xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('multi-insert.accessibility_list.point_1')}</li>
              <li>{t('multi-insert.accessibility_list.point_2')}</li>
              <li>{t('multi-insert.accessibility_list.point_3')}</li>
              <li>{t('multi-insert.accessibility_list.point_4')}</li>
              <li>{t('multi-insert.accessibility_list.point_5')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block my="xl">
          <Heading variant="h2">{t('multi-insert.focus.heading')}</Heading>
          <Block mt="l">
            <ul>
              <li>{t('multi-insert.focus.point_1')}</li>
              <li>
                {t('multi-insert.focus.point_2')}
                <ul>
                  <li>{t('multi-insert.focus.point_2-1')}</li>
                  <li>{t('multi-insert.focus.point_2-2')}</li>
                  <li>{t('multi-insert.focus.point_2-3')}</li>
                </ul>
              </li>
            </ul>
          </Block>
        </Block>
        <Block>
          <Heading variant="h2" className="mb-l">
            {t('multi-insert.reference_implementation.heading')}
          </Heading>
          <Paragraph marginBottomSpacing="l">
            {t('multi-insert.reference_implementation.paragraph')}
          </Paragraph>
          <ExternalLink
            labelNewWindow={t('common.opens_in_a_new_tab')}
            href="https://github.com/vrk-kpa/suomifi-design-system/tree/develop/components/MultiInsert/MultiInsert.tsx"
          >
            {t('multi-insert.reference_implementation.link_text')}
          </ExternalLink>
          <Block mt="xxl">
            <MultiInsert />
          </Block>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default MultiInsertPage;
