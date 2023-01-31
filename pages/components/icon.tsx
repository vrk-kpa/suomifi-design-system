import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {
  defaultSuomifiTheme,
  Block,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
  Link,
  IconProps,
  StaticIconProps,
  Icon as SuomifiIcon,
  StaticIcon as SuomifiStaticIcon,
} from 'suomifi-ui-components';

/**
 * Wrapper to show all icons as bigger for better visiblity
 */
const Icon = (props: IconProps): JSX.Element => {
  const newProps = { ...props, width: '2em', height: '2em' };
  return <SuomifiIcon {...newProps} />;
};
Icon.displayName = 'Icon';

const StaticIcon = (props: StaticIconProps): JSX.Element => {
  const newProps = { ...props, width: '4em', height: '4em' };
  return <SuomifiStaticIcon {...newProps} />;
};
StaticIcon.displayName = 'StaticIcon';

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
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Icon"
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

          <ComponentExample
            style={{
              justifyContent: 'flex-start',
              padding: 0,
              border: 'none',
            }}
          >
            <Icon icon="check" ariaLabel={t('basic_icons.example.arialabel')} />
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('icon_page.info_icons.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('icon_page.info_icons.description')}
          </Paragraph>

          <ComponentExample
            style={{
              justifyContent: 'flex-start',
              padding: 0,
              border: 'none',
            }}
          >
            <Icon
              icon="helpFilled"
              color={defaultSuomifiTheme.colors.highlightBase}
              style={{ margin: `0 ${defaultSuomifiTheme.spacing.xs}` }}
              ariaLabel={t('icon_page.info_icons.example1_arialabel')}
            />
            <Icon
              icon="help"
              color={defaultSuomifiTheme.colors.highlightBase}
              style={{ margin: `0 ${defaultSuomifiTheme.spacing.xs}` }}
              ariaLabel={t('icon_page.info_icons.example2_arialabel')}
            />
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('icon_page.additional_info_icons.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('icon_page.additional_info_icons.description')}
          </Paragraph>

          <ComponentExample
            style={{
              justifyContent: 'flex-start',
              padding: 0,
              border: 'none',
            }}
          >
            <Icon
              icon="errorFilled"
              color={defaultSuomifiTheme.colors.highlightBase}
              style={{ margin: `0 ${defaultSuomifiTheme.spacing.xs}` }}
              ariaLabel={t(
                'icon_page.additional_info_icons.example1_arialabel',
              )}
            />
            <Icon
              icon="info"
              color={defaultSuomifiTheme.colors.highlightBase}
              style={{ margin: `0 ${defaultSuomifiTheme.spacing.xs}` }}
              ariaLabel={t(
                'icon_page.additional_info_icons.example2_arialabel',
              )}
            />
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('icon_page.illustrative_icons.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('icon_page.illustrative_icons.description')}
          </Paragraph>

          <ComponentExample
            style={{
              justifyContent: 'flex-start',
              padding: 0,
              border: 'none',
            }}
          >
            <StaticIcon
              icon="collaboration"
              ariaLabel={t('icon_page.illustrative_icons.example_arialabel')}
            />
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('icon_page.attachment_icons.title')}
          </Heading>

          <ComponentExample
            style={{
              justifyContent: 'flex-start',
              padding: 0,
              border: 'none',
            }}
          >
            <StaticIcon
              icon="doc"
              ariaLabel={t('icon_page.attachment_icons.example_arialabel')}
            />
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('icon_page.sign_language_icons.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('icon_page.sign_language_icons.description')}
          </Paragraph>

          <ComponentExample
            style={{
              justifyContent: 'flex-start',
              padding: 0,
              border: 'none',
            }}
          >
            <Icon
              icon="signLanguageContent"
              color="#00B6EC"
              ariaLabel={t('icon_page.sign_language_icons.example_arialabel')}
            />
          </ComponentExample>
        </Block>
        <ExternalLink
          href="https://www.kuurojenliitto.fi/fi/artikkelit/viittomakieliset-palvelut-symboli"
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
