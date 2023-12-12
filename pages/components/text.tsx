import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {
  Block,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('text_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('text_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Text"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('text_page.text_documentation_link_text')}
          </ExternalLink>
          <br />
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Paragraph"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('text_page.paragraph_documentation_link_text')}
          </ExternalLink>
        </Block>

        <Block variant="section" className="mt-xl">
          <Heading variant="h2" className="mb-xl">
            {t('text_page.title_body')}
          </Heading>

          <Paragraph className="mt-xl">
            <Text>{t('text_page.text_1')}</Text>
          </Paragraph>

          <Paragraph className="my-xl">
            <Text>{t('text_page.text_2')}</Text>
          </Paragraph>

          <Paragraph className="my-xl">
            <Text>{t('text_page.text_3')}</Text>
          </Paragraph>

          <Paragraph className="my-xl">
            <Text>{t('text_page.text_4')}</Text>
          </Paragraph>

          <ComponentExample
            style={{
              flexFlow: 'column',
              alignItems: 'flex-start',
            }}
            showCode
            filterPropsInExample={['mb']}
          >
            <Paragraph mb="l">
              {t('text_page.paragraph_example_text')}
            </Paragraph>
            <Text>Body text</Text>
            <Text variant="bold">Body Text Bold</Text>
            <Text smallScreen>Body Text Small</Text>
            <Text variant="bold" smallScreen>
              Body Text Small Bold
            </Text>
          </ComponentExample>
        </Block>

        <Block variant="section" className="mt-xl">
          <Heading variant="h2" className="mb-xl">
            {t('text_page.lead_title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('text_page.lead_description')}
          </Paragraph>

          <ComponentExample
            style={{
              flexFlow: 'column',
              alignItems: 'flex-start',
            }}
            showCode
          >
            <Text variant="lead">Lead Text</Text>
            <Text variant="lead" smallScreen>
              Lead Text Small
            </Text>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
