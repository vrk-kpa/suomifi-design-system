import { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import { suomifiDesignTokens } from 'suomifi-design-tokens';
import { Heading, Block, Text, Paragraph } from 'suomifi-ui-components';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import SpacingShowcase from '../../components/SpacingShowcase/SpacingShowcase';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/styles-sidenav';

const StylesIndexPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t('styles.spacing')} ${t('common.title_suffix')}`}</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.styles')}
        navIcon="magicWand"
      >
        <Heading variant="h1" className="mb-xl">
          {t('spacing.heading')}
        </Heading>
        <Block mb="xl">
          <Text variant="lead">{t('spacing.ingress')}</Text>
        </Block>
        <Paragraph mb="xl">{t('spacing.paragraph_1')}</Paragraph>
        <Block mb="xxxl">
          <SpacingShowcase values="normal" />
        </Block>
        <Paragraph mb="l">{t('spacing.paragraph_2')}</Paragraph>
        <Block mb="xxl">
          <ComponentExample
            filterPropsInExample={['style', 'className']}
            style={{ flexDirection: 'column' }}
            showCode
          >
            <Block
              className="flex justify-center align-center"
              style={{
                border: `1px dashed ${suomifiDesignTokens.colors.depthLight1}`,
              }}
              pt="xxl"
              pb="m"
              pl="s"
              pr="xl"
            >
              {t('spacing.block_text_1')}
            </Block>
            <Block
              className="flex justify-center align-center"
              style={{
                border: `1px dashed ${suomifiDesignTokens.colors.depthLight1}`,
              }}
              padding="s"
              mt="xl"
            >
              {t('spacing.block_text_2')}
            </Block>
          </ComponentExample>
        </Block>
        <Block mb="l">
          <Heading variant="h2">{t('spacing.inset_heading')}</Heading>
        </Block>
        <Paragraph mb="xl">{t('spacing.paragraph_3')}</Paragraph>
        <SpacingShowcase values="inset" />
      </SideNavLayout>
    </>
  );
};

export default StylesIndexPage;
