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
import { StaticForm } from '../../components/StaticForm/StaticForm';

const StaticFormPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('static_form.heading')} | Suomi.fi Design System</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.patterns')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('static_form.heading')}</Heading>
        <Block my="xl">
          <Text variant="lead">{t('static_form.ingress')}</Text>
        </Block>

        <Block mb="xxxl">
          <Heading variant="h2" className="mb-l">
            {t('static_form.reference_implementation.heading')}
          </Heading>
          <Paragraph mb="l">
            {t('static_form.reference_implementation.paragraph')}
          </Paragraph>
          <ExternalLink
            labelNewWindow={t('common.opens_in_a_new_tab')}
            href="https://github.com/vrk-kpa/suomifi-design-system/tree/develop/components/StaticForm/StaticForm.tsx"
          >
            {t('static_form.reference_implementation.link_text')}
          </ExternalLink>
          <Block mt="xxl">
            <StaticForm />
          </Block>
        </Block>

        <Block variant="section" my="xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('static_form.accessibility_list.point_1')}</li>
              <li>{t('static_form.accessibility_list.point_2')}</li>
              <li>{t('static_form.accessibility_list.point_3')}</li>
              <li>{t('static_form.accessibility_list.point_4')}</li>
              <li>{t('static_form.accessibility_list.point_5')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block mb="l">
          <Heading variant="h2">{t('static_form.components_text')}</Heading>
          <ul>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/ErrorSummary"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.error_summary')}
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

export default StaticFormPage;
