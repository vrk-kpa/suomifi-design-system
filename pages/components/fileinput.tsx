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
  defaultSuomifiTheme,
  FileInput,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('file_input_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('file_input_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/FileInput"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('file_input_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <FileInput
            labelText={t('file_input_page.example.label')}
            hintText={t('file_input_page.example.hint_text')}
            inputButtonText={t('file_input_page.example.input_button_text')}
            dragAreaText={t('file_input_page.example.drag_area_text')}
            removeFileText={t('file_input_page.example.remove_file_text')}
            addedFileAriaText={t(
              'file_input_page.example.added_file_aria_text',
            )}
          />
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('file_input_page.accessibility_list.point_1')}</li>
              <li>{t('file_input_page.accessibility_list.point_2')}</li>
              <li>{t('file_input_page.accessibility_list.point_3')}</li>
              <li>{t('file_input_page.accessibility_list.point_4')}</li>
              <li>{t('file_input_page.accessibility_list.point_5')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('file_input_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('file_input_page.what_does_the_component_contain.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('file_input_page.what_does_the_component_contain.text_2')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('file_input_page.what_does_the_component_contain.text_3')}
          </Paragraph>
        </Block>

        <Block variant="section" className="my-xl">
          <Heading variant="h2" className="mb-xl">
            {t('file_input_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('file_input_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('file_input_page.size_and_usage.text_2')}
          </Paragraph>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
