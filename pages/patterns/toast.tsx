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
import ToastExample from '../../components/ToastExample/ToastExample';

const ToastPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('toast.site_title')}</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.patterns')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('toast.heading')}</Heading>
        <Block my="xl">
          <Text variant="lead">{t('toast.ingress')}</Text>
        </Block>

        <Block mb="xxxl">
          <Heading variant="h2" className="mb-l">
            {t('toast.reference_implementation.heading')}
          </Heading>
          <Paragraph mb="l">
            {t('toast.reference_implementation.paragraph')}
          </Paragraph>
          <ExternalLink
            labelNewWindow={t('common.opens_in_a_new_tab')}
            href="https://github.com/vrk-kpa/suomifi-design-system/tree/develop/components/ToastExample/ToastExample.tsx"
          >
            {t('toast.reference_implementation.link_text')}
          </ExternalLink>
          <Block mt="xxl">
            <ToastExample />
          </Block>
        </Block>

        <Block variant="section" my="xl">
          <Heading variant="h2" mb="l">
            {t('toast.placement.heading')}
          </Heading>
          <Paragraph mb="l">{t('toast.placement.text_1')}</Paragraph>
          <Paragraph mb="l">{t('toast.placement.text_2')}</Paragraph>
          <Paragraph mb="l">{t('toast.placement.text_3')}</Paragraph>
          <Paragraph mb="l">{t('toast.placement.text_4')}</Paragraph>
        </Block>
        <Block mb="l">
          <Heading variant="h2">{t('toast.components_text')}</Heading>
          <ul>
            <li>
              <ExternalLink
                href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Toast"
                labelNewWindow={t('common.opens_in_a_new_tab')}
              >
                {t('components.toast')}
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

export default ToastPage;
