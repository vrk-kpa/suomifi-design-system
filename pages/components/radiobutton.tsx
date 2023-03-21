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
  RadioButton,
  RadioButtonGroup,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('radiobutton_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('radiobutton_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/RadioButton"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('radiobutton_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <RadioButtonGroup
            name="test-default-group"
            defaultValue="default-radio"
            labelText={t('radiobutton_page.example.default.title')}
          >
            <RadioButton value="default-radio">
              {t('radiobutton_page.example.default.content')}
            </RadioButton>
            <RadioButton value="default-radio2">
              {t('radiobutton_page.example.default.content2')}
            </RadioButton>
            <RadioButton value="default-radio3">
              {t('radiobutton_page.example.default.content3')}
            </RadioButton>
          </RadioButtonGroup>
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('radiobutton_page.accessibility_list.point_1')}</li>
              <li>{t('radiobutton_page.accessibility_list.point_2')}</li>
              <li>{t('radiobutton_page.accessibility_list.point_3')}</li>
              <li>{t('radiobutton_page.accessibility_list.point_4')}</li>
              <li>{t('radiobutton_page.accessibility_list.point_5')}</li>
              <li>{t('radiobutton_page.accessibility_list.point_6')}</li>
              <li>{t('radiobutton_page.accessibility_list.point_7')}</li>
              <li>{t('radiobutton_page.accessibility_list.point_8')}</li>
              <li>{t('radiobutton_page.accessibility_list.point_9')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('radiobutton_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('radiobutton_page.what_does_the_component_contain.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('radiobutton_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('radiobutton_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('radiobutton_page.example.large.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('radiobutton_page.example.large.description')}
          </Paragraph>

          <ComponentExample>
            <RadioButtonGroup
              name="test-large-group"
              defaultValue="default-radio"
              labelText={t('radiobutton_page.example.default.title')}
              groupHintText={t('radiobutton_page.example.large.group_hint')}
            >
              <RadioButton variant="large" value="default-radio">
                {t('radiobutton_page.example.default.content')}
              </RadioButton>
              <RadioButton variant="large" value="default-radio2">
                {t('radiobutton_page.example.default.content2')}
              </RadioButton>
              <RadioButton variant="large" value="default-radio3">
                {t('radiobutton_page.example.default.content3')}
              </RadioButton>
            </RadioButtonGroup>
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('radiobutton_page.example.hint.title')}
          </Heading>
          <Paragraph className="my-l">
            {t('radiobutton_page.example.hint.description')}
          </Paragraph>

          <ComponentExample>
            <RadioButtonGroup
              name="test-hint-group"
              defaultValue="default-radio"
              labelText={t('radiobutton_page.example.default.title')}
            >
              <RadioButton
                value="default-radio"
                hintText={t('radiobutton_page.example.hint.hint_text')}
              >
                {t('radiobutton_page.example.hint.content')}
              </RadioButton>
              <RadioButton
                value="default-radio2"
                hintText={t('radiobutton_page.example.hint.hint_text2')}
              >
                {t('radiobutton_page.example.hint.content2')}
              </RadioButton>
            </RadioButtonGroup>
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('radiobutton_page.example.disabled.title')}
          </Heading>
          <Paragraph className="my-l">
            {t('radiobutton_page.example.disabled.description')}
          </Paragraph>

          <ComponentExample>
            <RadioButtonGroup
              name="test-disabled-group"
              defaultValue="default-radio"
              labelText={t('radiobutton_page.example.default.title')}
            >
              <RadioButton value="default-radio" disabled>
                {t('radiobutton_page.example.default.content')}
              </RadioButton>
              <RadioButton value="default-radio2" disabled>
                {t('radiobutton_page.example.default.content2')}
              </RadioButton>
              <RadioButton value="default-radio3" disabled>
                {t('radiobutton_page.example.default.content3')}
              </RadioButton>
            </RadioButtonGroup>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
