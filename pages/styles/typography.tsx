import { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import { Heading, Block, Text, Paragraph, Link } from 'suomifi-ui-components';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/styles-sidenav';
import { CSSProperties } from 'react';

const codeBlockStyles: CSSProperties = {
  fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
  fontSize: '13px',
  lineHeight: 1.5,
  color: 'rgb(51, 51, 51)',
  whiteSpace: 'pre-wrap',
  overflowWrap: 'normal',
  tabSize: 2,
  hyphens: 'none',
  backgroundColor: 'rgb(245, 245, 245)',
  padding: '8px 16px',
  border: '1px solid rgb(245, 245, 245)',
  overflow: 'auto',
  margin: '10px 0px',
};

const StylesIndexPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('styles.typography')} | Suomi.fi Design System</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('styles.typography')}
        navIcon="magicWand"
      >
        <Heading variant="h1" className="mb-xl">
          {t('typography.heading')}
        </Heading>
        <Block mb="xl">
          <Text variant="lead">{t('typography.ingress')}</Text>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl mt-xl">
            {t('typography.font_title')}
          </Heading>

          <Paragraph className="my-xl">{t('typography.font_text_1')}</Paragraph>

          <Link href="/fonts/SourceSansPro_TTF.zip">
            {t('typography.font_link_text')}
          </Link>

          <Paragraph className="my-l">{t('typography.font_text_2')}</Paragraph>

          <Block>
            <pre style={codeBlockStyles}>
              {
                "@import url('https://designsystem.suomi.fi/fonts/source-sans-pro.css');"
              }
            </pre>
          </Block>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl mt-xxl">
            {t('typography.body_heading')}
          </Heading>

          <Paragraph className="mt-xl mb-l">
            {t('typography.body_text')}
          </Paragraph>

          <Link href="/components/text">{t('typography.body_link_text')}</Link>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl mt-xxl">
            {t('typography.heading_heading')}
          </Heading>

          <Paragraph className="mt-xl mb-l">
            {t('typography.heading_text')}
          </Paragraph>

          <Link href="/components/heading">
            {t('typography.heading_link_text')}
          </Link>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default StylesIndexPage;
