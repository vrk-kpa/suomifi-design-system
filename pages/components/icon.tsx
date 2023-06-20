import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import {
  defaultSuomifiTheme,
  Block,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
  Link,
  IconCheck,
  IconCollaboration,
  IconDoc,
  IconErrorFilled,
  IconHelp,
  IconHelpFilled,
  IconInfo,
  IconSignLanguageContent,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('icon_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('icon_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Introduction/Icons"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('icon_page.ingress')}</Text>
        </Paragraph>

        <Link href="../../styles/icons">
          {t('icon_page.all_icons_page_link_title')}
        </Link>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('icon_page.accessibility_list.point_1')}</li>
              <li>{t('icon_page.accessibility_list.point_2')}</li>
              <li>{t('icon_page.accessibility_list.point_3')}</li>
              <li>{t('icon_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('icon_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('icon_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('icon_page.basic_icons.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('icon_page.basic_icons.description')}
          </Paragraph>
          <IconCheck
            ariaLabel={t('icon_page.basic_icons.example_arialabel')}
            style={{
              width: '2em',
              height: '2em',
            }}
          />
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('icon_page.info_icons.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('icon_page.info_icons.description')}
          </Paragraph>

          <IconHelpFilled
            color={defaultSuomifiTheme.colors.highlightBase}
            style={{
              margin: `0 ${defaultSuomifiTheme.spacing.xs}`,
              width: '2em',
              height: '2em',
            }}
            ariaLabel={t('icon_page.info_icons.example1_arialabel')}
          />
          <IconHelp
            color={defaultSuomifiTheme.colors.highlightBase}
            style={{
              margin: `0 ${defaultSuomifiTheme.spacing.xs}`,
              width: '2em',
              height: '2em',
            }}
            ariaLabel={t('icon_page.info_icons.example2_arialabel')}
          />
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('icon_page.additional_info_icons.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('icon_page.additional_info_icons.description')}
          </Paragraph>

          <IconErrorFilled
            color={defaultSuomifiTheme.colors.highlightBase}
            style={{
              margin: `0 ${defaultSuomifiTheme.spacing.xs}`,
              width: '2em',
              height: '2em',
            }}
            ariaLabel={t('icon_page.additional_info_icons.example1_arialabel')}
          />
          <IconInfo
            color={defaultSuomifiTheme.colors.highlightBase}
            style={{
              margin: `0 ${defaultSuomifiTheme.spacing.xs}`,
              width: '2em',
              height: '2em',
            }}
            ariaLabel={t('icon_page.additional_info_icons.example2_arialabel')}
          />
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('icon_page.illustrative_icons.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('icon_page.illustrative_icons.description')}
          </Paragraph>
          <IconCollaboration
            ariaLabel={t('icon_page.illustrative_icons.example_arialabel')}
            style={{ width: '4em', height: '4em' }}
          />
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('icon_page.attachment_icons.title')}
          </Heading>

          <IconDoc
            ariaLabel={t('icon_page.attachment_icons.example_arialabel')}
            style={{ width: '4em', height: '4em' }}
          />
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('icon_page.sign_language_icons.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('icon_page.sign_language_icons.description')}
          </Paragraph>
          <IconSignLanguageContent
            color="#00B6EC"
            ariaLabel={t('icon_page.sign_language_icons.example_arialabel')}
            style={{ width: '2em', height: '2em' }}
          />
        </Block>
        <ExternalLink
          href="https://kuurojenliitto.fi/logot-ja-tunnukset/"
          labelNewWindow={t('common.opens_in_a_new_tab')}
          style={{ marginBottom: '30px', marginTop: '30px', display: 'block' }}
        >
          {t('icon_page.sign_language_icons.link_title')}
        </ExternalLink>
      </SideNavLayout>
    </>
  );
};

export default Page;
