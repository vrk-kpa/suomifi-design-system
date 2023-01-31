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
  Link as ExampleLink,
  ExternalLink as ExampleExternalLink,
  ServiceNavigation,
  ServiceNavigationItem,
  RouterLink,
  StaticChip,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('service_navigation_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('service_navigation_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/ServiceNavigation"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('service_navigation_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample style={{ justifyContent: 'flex-start' }}>
          <div style={{ width: '300px' }}>
            <ServiceNavigation
              aria-label={t('service_navigation_page.example.arialabel')}
            >
              <ServiceNavigationItem>
                <RouterLink
                  href="#"
                  aria-label={t(
                    'service_navigation_page.example.navitem1.arialabel',
                  )}
                >
                  {t('service_navigation_page.example.navitem1')}
                  <StaticChip style={{ marginLeft: '15px' }} aria-hidden>
                    16
                  </StaticChip>
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink href="#">
                  {t('service_navigation_page.example.navitem2')}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem selected>
                <RouterLink href="#" aria-current="page">
                  {t('service_navigation_page.example.navitem3')}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink asComponent="button">
                  {t('service_navigation_page.example.navitem4')}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink href="#">
                  {t('service_navigation_page.example.navitem5')}
                </RouterLink>
              </ServiceNavigationItem>
            </ServiceNavigation>
          </div>
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('service_navigation_page.accessibility_list.point_1')}</li>
              <li>{t('service_navigation_page.accessibility_list.point_2')}</li>
              <li>{t('service_navigation_page.accessibility_list.point_3')}</li>
              <li>{t('service_navigation_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t(
              'service_navigation_page.what_does_the_component_contain.heading',
            )}
          </Heading>
          <Paragraph className="my-xl">
            {t(
              'service_navigation_page.what_does_the_component_contain.text_1',
            )}
          </Paragraph>

          <Paragraph className="my-xl">
            {t(
              'service_navigation_page.what_does_the_component_contain.text_2',
            )}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('service_navigation_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('service_navigation_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('service_navigation_page.size_and_usage.text_2')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('service_navigation_page.size_and_usage.text_3')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('service_navigation_page.example.smallscreen.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('service_navigation_page.example.smallscreen.paragraph')}
          </Paragraph>

          <ComponentExample variant="mobile_device">
            <ServiceNavigation
              aria-label={t('service_navigation_page.example.arialabel')}
              variant="smallScreen"
              smallScreenExpandButtonText={t(
                'service_navigation_page.example.smallscreen.buttontext',
              )}
              initiallyExpanded={false}
            >
              <ServiceNavigationItem>
                <RouterLink
                  href="#"
                  aria-label={t(
                    'service_navigation_page.example.navitem1.arialabel',
                  )}
                >
                  {t('service_navigation_page.example.navitem1')}
                  <StaticChip style={{ marginLeft: '15px' }} aria-hidden>
                    16
                  </StaticChip>
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink href="#">
                  {t('service_navigation_page.example.navitem2')}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem selected>
                <RouterLink href="#" aria-current="page">
                  {t('service_navigation_page.example.navitem3')}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink href="#">
                  {t('service_navigation_page.example.navitem4')}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink href="#">
                  {t('service_navigation_page.example.navitem5')}
                </RouterLink>
              </ServiceNavigationItem>
            </ServiceNavigation>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
