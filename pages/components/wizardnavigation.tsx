import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import {
  Heading,
  Text,
  Paragraph,
  Block,
  ExternalLink,
  WizardNavigation,
  WizardNavigationItem,
  RouterLink,
} from 'suomifi-ui-components';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';

const WizardNavigationPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('wizard_navigation_page.site_title')}</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('wizard_navigation_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-design-system/components/wizardnavigation/"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('wizard_navigation_page.ingress')}</Text>
        </Paragraph>
        <ComponentExample
          variant="normal"
          justifyContent="left"
          filterPropsInExample={['className']}
        >
          <WizardNavigation
            heading={t('wizard_navigation_page.component_example.title')}
            aria-label={t('wizard_navigation_page.component_example.title')}
          >
            <WizardNavigationItem status="completed">
              <RouterLink href="#">
                {t('wizard_navigation_page.component_example.step_1')}
              </RouterLink>
            </WizardNavigationItem>
            <WizardNavigationItem status="default">
              <RouterLink href="#">
                {t('wizard_navigation_page.component_example.step_2')}
              </RouterLink>
            </WizardNavigationItem>
            <WizardNavigationItem status="current">
              <RouterLink aria-current="step" href="#">
                {t('wizard_navigation_page.component_example.step_3')}
              </RouterLink>
            </WizardNavigationItem>
            <WizardNavigationItem status="coming">
              <RouterLink aria-disabled role="link" tabIndex={0}>
                {t('wizard_navigation_page.component_example.step_4')}
              </RouterLink>
            </WizardNavigationItem>
            <WizardNavigationItem status="coming">
              <RouterLink aria-disabled role="link" tabIndex={0}>
                {t('wizard_navigation_page.component_example.step_5')}
              </RouterLink>
            </WizardNavigationItem>
          </WizardNavigation>
        </ComponentExample>
        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('wizard_navigation_page.accessibility_list.point_1')}</li>
              <li>{t('wizard_navigation_page.accessibility_list.point_2')}</li>
              <li>{t('wizard_navigation_page.accessibility_list.point_3')}</li>
              <li>{t('wizard_navigation_page.accessibility_list.point_4')}</li>
              <li>{t('wizard_navigation_page.accessibility_list.point_5')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2">
            {t(
              'wizard_navigation_page.what_does_the_component_contain.heading',
            )}
          </Heading>
          <Paragraph className="my-xl">
            {t('wizard_navigation_page.what_does_the_component_contain.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('wizard_navigation_page.what_does_the_component_contain.text_2')}
          </Paragraph>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('wizard_navigation_page.usage_and_positioning.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('wizard_navigation_page.usage_and_positioning.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('wizard_navigation_page.usage_and_positioning.text_2')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('wizard_navigation_page.usage_and_positioning.text_3')}
          </Paragraph>
        </Block>
        <Block>
          <Heading variant="h2" className="mb-xl">
            {t('wizard_navigation_page.small_screen.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('wizard_navigation_page.small_screen.text_1')}
          </Paragraph>
          <ComponentExample
            variant="mobile_device"
            filterPropsInExample={['className']}
          >
            <WizardNavigation
              heading={t('wizard_navigation_page.component_example.title')}
              aria-label={t('wizard_navigation_page.component_example.title')}
              variant="smallScreen"
            >
              <WizardNavigationItem status="completed">
                <RouterLink href="#">
                  {t('wizard_navigation_page.component_example.step_1')}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="default">
                <RouterLink href="#">
                  {t('wizard_navigation_page.component_example.step_2')}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="current">
                <RouterLink aria-current="step" href="#">
                  {t('wizard_navigation_page.component_example.step_3')}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="coming">
                <RouterLink aria-disabled role="link" tabIndex={0}>
                  {t('wizard_navigation_page.component_example.step_4')}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="coming">
                <RouterLink aria-disabled role="link" tabIndex={0}>
                  {t('wizard_navigation_page.component_example.step_5')}
                </RouterLink>
              </WizardNavigationItem>
            </WizardNavigation>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default WizardNavigationPage;
