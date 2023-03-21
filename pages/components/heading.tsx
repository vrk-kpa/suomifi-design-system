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
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('heading_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('heading_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Heading"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('heading_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('heading_page.accessibility_list.point_1')}</li>
              <li>{t('heading_page.accessibility_list.point_2')}</li>
              <li>{t('heading_page.accessibility_list.point_3')}</li>
              <li>{t('heading_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>

        <Block variant="div" mt="m">
          <ExternalLink
            href="https://www.w3.org/Translations/WCAG21-fi/"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('heading_page.link_1')}
          </ExternalLink>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('heading_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('heading_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>

        <Block variant="div" mt="m">
          <Link href="/styles/typography">{t('heading_page.link_2')}</Link>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('heading_page.example.title')}
          </Heading>

          <ComponentExample
            style={{
              flexFlow: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Heading
              variant="h1hero"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading 1 with hero styling
            </Heading>
            <Heading
              variant="h1"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h1
            </Heading>
            <Heading
              variant="h2"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h2
            </Heading>
            <Heading
              variant="h3"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h3
            </Heading>
            <Heading
              variant="h4"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h4
            </Heading>
            <Heading
              variant="h5"
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h5
            </Heading>
          </ComponentExample>
        </Block>

        <Block variant="section" mt="l">
          <ComponentExample
            style={{
              flexFlow: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Heading
              variant="h1hero"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading 1 hero small screen
            </Heading>
            <Heading
              variant="h1"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h1 small screen
            </Heading>
            <Heading
              variant="h2"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h2 small screen
            </Heading>
            <Heading
              variant="h3"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h3 small screen
            </Heading>
            <Heading
              variant="h4"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h4 small screen
            </Heading>
            <Heading
              variant="h5"
              smallScreen
              style={{ margin: `${defaultSuomifiTheme.spacing.xs} 0` }}
            >
              Heading h5 small screen
            </Heading>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
