import type { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import styled from 'styled-components';
import {
  Block,
  Button,
  Heading,
  Paragraph,
  SuomifiThemeProvider,
  Text,
  defaultSuomifiTheme,
  ExternalLink,
} from 'suomifi-ui-components';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import {
  themeExampleJSX,
  basicExample,
  advancedExample,
} from '../../utils/complicatedCodeExamples';

const customTheme = {
  gradients: {
    highlightBaseToHighlightDark1: 'linear-gradient(to top, orange, red);',
    highlightLight1ToHighlightBase: 'linear-gradient(to top, crimson, red);',
  },
  colors: {
    highlightDark1: 'darkred',
    highlightBase: 'blue',
    highlightLight1: 'green',
  },
};

const CustomButton = styled(Button)({
  background: '#09ae88',
  '&:hover': { background: '#e97025' },
  '&:active': { background: '#faaf00' },
});

const ComponentsIndexPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('main_nav.components')} | Suomi.fi Design System</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1" className="mb-xl">
          {t('components.component_usage_info')}
        </Heading>

        <Paragraph className="my-xl">
          <Text variant="lead">{t('components_main_page.ingress')}</Text>
        </Paragraph>

        <Paragraph className="my-xl">
          <Text>{t('components_main_page.text')}</Text>
        </Paragraph>

        <ExternalLink
          href="https://github.com/vrk-kpa/suomifi-ui-components"
          labelNewWindow={t('common.opens_in_a_new_tab')}
        >
          {t('components_main_page.link_text')}
        </ExternalLink>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('components_main_page.usage.title')}
          </Heading>
          <Paragraph className="mb-xl">
            {t('components_main_page.usage.description')}
          </Paragraph>

          <ComponentExample codeString={basicExample}>
            <Button>Example</Button>
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('components_main_page.theme.title')}
          </Heading>

          <Paragraph className="my-xl">
            <Text>{t('components_main_page.theme.description')}</Text>
          </Paragraph>

          <ComponentExample codeString={themeExampleJSX}>
            <SuomifiThemeProvider theme={customTheme}>
              <Button>Theme</Button>
            </SuomifiThemeProvider>
          </ComponentExample>
        </Block>

        <Block variant="section"></Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('components_main_page.advanced_usage.title')}
          </Heading>

          <Paragraph className="my-xl">
            <Text>{t('components_main_page.advanced_usage.description')}</Text>
          </Paragraph>
          <ComponentExample
            codeString={advancedExample}
            style={{ gap: defaultSuomifiTheme.spacing.m }}
          >
            <CustomButton>Styled</CustomButton>
            <Button className="button--custom">Classname</Button>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default ComponentsIndexPage;
