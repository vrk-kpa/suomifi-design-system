import { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import {
  Heading,
  Block,
  Text,
  Paragraph,
  ExternalLink,
} from 'suomifi-ui-components';
import { suomifiDesignTokens } from 'suomifi-design-tokens';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import {
  styleExampleFromTokens,
  styleExampleFromUIComps,
} from '../../utils/complicatedCodeExamples';
import { navItems } from '../../utils/styles-sidenav';

const StylesIndexPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('main_nav.styles')} | Suomi.fi Design System</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.styles')}
        navIcon="magicWand"
      >
        <Heading variant="h1" className="mb-xl">
          {t('styles.styles_usage_info')}
        </Heading>
        <Block mb="l">
          <Text variant="lead">{t('styles_main_page.ingress')}</Text>
        </Block>
        <Paragraph mb="l">{t('styles_main_page.paragraph_1')}</Paragraph>
        <Block mb="l">
          <ExternalLink
            href="https://github.com/vrk-kpa/suomifi-design-tokens"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            GitHub
          </ExternalLink>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('styles_main_page.style_usage')}
          </Heading>
          <Paragraph mb="l">
            {t('styles_main_page.style_usage_paragraph_1')}
          </Paragraph>
          <ComponentExample codeString={styleExampleFromTokens} showCode>
            <div
              style={{
                margin: suomifiDesignTokens.spacing.xl,
                padding: suomifiDesignTokens.spacing.s,
                background: suomifiDesignTokens.colors.highlightBase,
                fontSize:
                  suomifiDesignTokens.values.typography.bodyText.fontSize
                    .value + 'px',
                color: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              {t('styles_main_page.styled_element')}
            </div>
          </ComponentExample>
          <Block my="l">
            <Paragraph>
              {t('styles_main_page.style_usage_paragraph_2')}
            </Paragraph>
          </Block>
          <ComponentExample codeString={styleExampleFromUIComps} showCode />
        </Block>
      </SideNavLayout>
    </>
  );
};

export default StylesIndexPage;
