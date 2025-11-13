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
  Chip,
  StaticChip,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('chip_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('chip_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Chip"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('chip_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{
            marginBottom: defaultSuomifiTheme.spacing.s,
            flexDirection: 'column',
          }}
        >
          <Block>
            <Chip removable actionLabel={t('chip_page.example.action_label')}>
              {t('chip_page.example.chip_text')}
            </Chip>
          </Block>
          <Block>
            <StaticChip>{t('chip_page.example.static_chip_text')}</StaticChip>
          </Block>
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('chip_page.accessibility_list.point_1')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('chip_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('chip_page.what_does_the_component_contain.text_1')}
          </Paragraph>

          <Paragraph className="my-xl">
            {t('chip_page.what_does_the_component_contain.text_2')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('chip_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('chip_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('chip_page.size_and_usage.text_2')}
          </Paragraph>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
