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
  SideNavigation,
  SideNavigationItem,
  RouterLink,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('side_navigation_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('side_navigation_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/SideNavigation"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('side_navigation_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample style={{ justifyContent: 'flex-start' }}>
          <div style={{ width: '350px' }}>
            <SideNavigation
              heading={t('side_navigation_page.example.title')}
              icon="piggyBank"
              aria-label={t('side_navigation_page.example.arialabel')}
            >
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="/" aria-current="location">
                    {t('side_navigation_page.example.navitem1')}
                  </RouterLink>
                }
              >
                <SideNavigationItem
                  subLevel={2}
                  content={
                    <RouterLink href="/" aria-current="location">
                      {t('side_navigation_page.example.navitem1-2-1')}
                    </RouterLink>
                  }
                >
                  <SideNavigationItem
                    subLevel={3}
                    content={
                      <RouterLink href="/">
                        {t('side_navigation_page.example.navitem1-2-1-1')}
                      </RouterLink>
                    }
                  />
                  <SideNavigationItem
                    subLevel={3}
                    selected
                    content={
                      <RouterLink href="/" aria-current="page">
                        {t('side_navigation_page.example.navitem1-2-1-2')}
                      </RouterLink>
                    }
                  />
                  <SideNavigationItem
                    subLevel={3}
                    content={
                      <RouterLink href="/">
                        {t('side_navigation_page.example.navitem1-2-1-3')}
                      </RouterLink>
                    }
                  />
                </SideNavigationItem>
                <SideNavigationItem
                  subLevel={2}
                  content={
                    <RouterLink href="/">
                      {t('side_navigation_page.example.navitem1-2-2')}
                    </RouterLink>
                  }
                />
              </SideNavigationItem>
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {t('side_navigation_page.example.navitem2')}
                  </RouterLink>
                }
              />
              <SideNavigationItem
                content={
                  <RouterLink href="#">
                    {t('side_navigation_page.example.navitem3')}
                  </RouterLink>
                }
                subLevel={1}
              />
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {t('side_navigation_page.example.navitem4')}
                  </RouterLink>
                }
              />
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {t('side_navigation_page.example.navitem5')}
                  </RouterLink>
                }
              />
            </SideNavigation>
          </div>
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('side_navigation_page.accessibility_list.point_1')}</li>
              <li>{t('side_navigation_page.accessibility_list.point_2')}</li>
              <li>{t('side_navigation_page.accessibility_list.point_3')}</li>
              <li>{t('side_navigation_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('side_navigation_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('side_navigation_page.what_does_the_component_contain.text_1')}
          </Paragraph>

          <Paragraph className="my-xl">
            {t('side_navigation_page.what_does_the_component_contain.text_2')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('side_navigation_page.what_does_the_component_contain.text_3')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('side_navigation_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('side_navigation_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('side_navigation_page.size_and_usage.text_2')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('side_navigation_page.example.smallscreen.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('side_navigation_page.example.smallscreen.description')}
          </Paragraph>

          <ComponentExample variant="mobile_device">
            <SideNavigation
              heading={t('side_navigation_page.example.title')}
              icon="piggyBank"
              aria-label={t('side_navigation_page.example.arialabel')}
              variant="smallScreen"
              initiallyExpanded={false}
            >
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="/" aria-current="location">
                    {t('side_navigation_page.example.navitem1')}
                  </RouterLink>
                }
              >
                <SideNavigationItem
                  subLevel={2}
                  content={
                    <RouterLink href="/" aria-current="location">
                      {t('side_navigation_page.example.navitem1-2-1')}
                    </RouterLink>
                  }
                >
                  <SideNavigationItem
                    subLevel={3}
                    content={
                      <RouterLink href="/">
                        {t('side_navigation_page.example.navitem1-2-1-1')}
                      </RouterLink>
                    }
                  />
                  <SideNavigationItem
                    subLevel={3}
                    selected
                    content={
                      <RouterLink href="/" aria-current="page">
                        {t('side_navigation_page.example.navitem1-2-1-2')}
                      </RouterLink>
                    }
                  />
                  <SideNavigationItem
                    subLevel={3}
                    content={
                      <RouterLink href="/">
                        {t('side_navigation_page.example.navitem1-2-1-3')}
                      </RouterLink>
                    }
                  />
                </SideNavigationItem>
                <SideNavigationItem
                  subLevel={2}
                  content={
                    <RouterLink href="/">
                      {t('side_navigation_page.example.navitem1-2-2')}
                    </RouterLink>
                  }
                />
              </SideNavigationItem>
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {t('side_navigation_page.example.navitem2')}
                  </RouterLink>
                }
              />
              <SideNavigationItem
                content={
                  <RouterLink href="#">
                    {t('side_navigation_page.example.navitem3')}
                  </RouterLink>
                }
                subLevel={1}
              />
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {t('side_navigation_page.example.navitem4')}
                  </RouterLink>
                }
              />
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {t('side_navigation_page.example.navitem5')}
                  </RouterLink>
                }
              />
            </SideNavigation>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
