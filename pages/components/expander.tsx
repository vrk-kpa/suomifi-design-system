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
  Dropdown,
  DropdownItem,
  Expander,
  ExpanderTitleButton,
  ExpanderContent,
  ExpanderGroup,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('expander_page.heading')} | Suomi.fi Design System</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('expander_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Expander"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('expander_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section">
          <ComponentExample>
            <Expander>
              <ExpanderTitleButton>
                {t('expander_page.example.expander.title')}
              </ExpanderTitleButton>
              <ExpanderContent>
                {t('expander_page.example.expander.content')}
              </ExpanderContent>
            </Expander>
          </ComponentExample>
        </Block>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('expander_page.accessibility_list.point_1')}</li>
              <li>{t('expander_page.accessibility_list.point_2')}</li>
              <li>{t('expander_page.accessibility_list.point_3')}</li>
              <li>{t('expander_page.accessibility_list.point_4')}</li>
              <li>{t('expander_page.accessibility_list.point_5')}</li>
              <li>{t('expander_page.accessibility_list.point_6')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('expander_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('expander_page.what_does_the_component_contain.text')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('expander_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('expander_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Paragraph className="my-xl">
            {t('expander_page.example.nopadding.description')}
          </Paragraph>

          <ComponentExample>
            <Expander>
              <ExpanderTitleButton>
                {t('expander_page.example.expander.title')}
              </ExpanderTitleButton>
              <ExpanderContent noPadding>
                <p
                  style={{
                    margin: 0,
                    padding: defaultSuomifiTheme.spacing.s,
                    background: defaultSuomifiTheme.colors.brandBase,
                    color: defaultSuomifiTheme.colors.whiteBase,
                  }}
                >
                  {t('expander_page.example.expander.content')}
                </p>
              </ExpanderContent>
            </Expander>
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('expander_page.example.single.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('expander_page.example.single.description')}
          </Paragraph>

          <ComponentExample>
            <Expander>
              <ExpanderTitleButton>
                {t('expander_page.example.expander.title')}
              </ExpanderTitleButton>
              <ExpanderContent>
                {t('expander_page.example.expander.content')}
              </ExpanderContent>
            </Expander>
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('expander_page.example.group.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('expander_page.example.group.description')}
          </Paragraph>

          <ComponentExample>
            <ExpanderGroup
              openAllText={t('expander_page.example.group.open')}
              closeAllText={t('expander_page.example.group.close')}
            >
              <Expander>
                <ExpanderTitleButton>
                  {t('expander_page.example.group.title')}
                </ExpanderTitleButton>
                <ExpanderContent>
                  {t('expander_page.example.expander.content')}
                </ExpanderContent>
              </Expander>
              <Expander>
                <ExpanderTitleButton>
                  {t('expander_page.example.expander.title')}
                </ExpanderTitleButton>
                <ExpanderContent>
                  {t('expander_page.example.expander.content')}
                </ExpanderContent>
              </Expander>
              <Expander>
                <ExpanderTitleButton>
                  {t('expander_page.example.expander.title')}
                </ExpanderTitleButton>
                <ExpanderContent>
                  {t('expander_page.example.expander.content')}
                </ExpanderContent>
              </Expander>
            </ExpanderGroup>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
