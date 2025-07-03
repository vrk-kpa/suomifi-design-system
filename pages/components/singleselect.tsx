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
  SingleSelect,
  defaultSuomifiTheme,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  const tools = [
    {
      name: 'Ammattiliikenne',
      labelText: 'Ammattiliikenne',
      uniqueItemId: 'jh2435626',
    },
    {
      name: 'Ansiotulot',
      labelText: 'Ansiotulot',
      uniqueItemId: 'h9823523',
    },
    {
      name: 'Asiakirja-_ja_tietopyynnöt',
      labelText: 'Asiakirja- ja tietopyynnöt',
      uniqueItemId: 'sh908293482',
    },
    {
      name: 'asiakkuuden_hallinta',
      labelText: 'Asiakkuuden hallinta',
      uniqueItemId: 's82502335',
    },
    {
      name: 'asuminen_ja_rakentaminen',
      labelText: 'Asuminen ja rakentaminen',
      disabled: true,
      uniqueItemId: 'ps9081231',
    },
    {
      name: 'asunto_osakkeet',
      labelText: 'Asunto-osakkeet',
      uniqueItemId: 'ps9081298',
    },
  ];
  return (
    <>
      <Head>
        <title>{t('singleselect_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('singleselect_page.heading')}</Heading>
        <Block variant="div" mt="m" mb="l">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/SingleSelect"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>

        <Paragraph className="my-xl">
          <Text variant="lead">{t('singleselect_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <SingleSelect
            labelText={t('singleselect_page.example.label_text')}
            hintText={t('singleselect_page.example.hint_text')}
            clearButtonLabel={t('singleselect_page.example.clear_button_label')}
            items={tools}
            visualPlaceholder={t(
              'singleselect_page.example.visual_placeholder',
            )}
            noItemsText={t('singleselect_page.example.noItemsText')}
            ariaOptionsAvailableText={t(
              'singleselect_page.example.aria_options_available_text',
            )}
          />
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('singleselect_page.accessibility_list.point_1')}</li>
              <li>{t('singleselect_page.accessibility_list.point_2')}</li>
              <li>{t('singleselect_page.accessibility_list.point_3')}</li>
              <li>{t('singleselect_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('singleselect_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('singleselect_page.what_does_the_component_contain.text_1')}
          </Paragraph>

          <Paragraph className="my-xl">
            {t('singleselect_page.what_does_the_component_contain.text_2')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('singleselect_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('singleselect_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
