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
import { Datetime } from '../../components/Datetime/Datetime';
import { DoubleDatetime } from '../../components/Datetime/DoubleDatetime';

const MultiInsertPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('datetime.heading')} | Suomi.fi Design System</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.patterns')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('datetime.heading')}</Heading>
        <Block my="xl">
          <Text variant="lead">{t('datetime.ingress')}</Text>
        </Block>

        <Block mb="xxxl">
          <Heading variant="h2" className="mb-l">
            {t('datetime.reference_implementation.heading')}
          </Heading>
          <Paragraph mb="l">
            {t('datetime.reference_implementation.paragraph')}
          </Paragraph>
          <ExternalLink
            labelNewWindow={t('common.opens_in_a_new_tab')}
            href="https://github.com/vrk-kpa/suomifi-design-system/tree/develop/components/Datetime/Datetime.tsx"
          >
            {t('datetime.reference_implementation.link_text')}
          </ExternalLink>
          <Block my="xxl">
            <Datetime />
          </Block>
        </Block>

        <Block mb="xxxl">
          <Heading variant="h2" className="mb-l">
            {t('datetime.reference_implementation.heading_complex')}
          </Heading>
          <Paragraph mb="l">
            {t('datetime.reference_implementation.complex_paragraph')}
          </Paragraph>
          <ExternalLink
            labelNewWindow={t('common.opens_in_a_new_tab')}
            href="https://github.com/vrk-kpa/suomifi-design-system/tree/develop/components/Datetime/DoubleDatetime.tsx"
          >
            {t('datetime.reference_implementation.link_text')}
          </ExternalLink>
          <Block my="xxl">
            <DoubleDatetime />
          </Block>
        </Block>

        <Block variant="section" my="xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('datetime.accessibility_list.point_1')}</li>
              <li>{t('datetime.accessibility_list.point_2')}</li>
              <li>{t('datetime.accessibility_list.point_3')}</li>
              <li>{t('datetime.accessibility_list.point_4')}</li>
              <li>
                {t('datetime.accessibility_list.point_5')}
                <ul>
                  <li>{t('datetime.accessibility_list.point_5_1')}</li>
                  <li>{t('datetime.accessibility_list.point_5_2')}</li>
                  <li>{t('datetime.accessibility_list.point_5_3')}</li>
                </ul>
              </li>
              <li>{t('datetime.accessibility_list.point_6')}</li>
            </ul>
          </InfoBox>
        </Block>

        <Block variant="section" mb="l">
          <Heading variant="h2">{t('datetime.components_text')}</Heading>
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
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/HintText"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.hint_text')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Statustext"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.status_text')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/DateInput"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.date_input')}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/TimeInput"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.time_input')}
              </ExternalLink>
            </li>
          </ul>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default MultiInsertPage;
