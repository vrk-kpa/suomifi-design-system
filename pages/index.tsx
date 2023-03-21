import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';

import {
  Block,
  Heading,
  Paragraph,
  RouterLink,
  ExternalLink,
} from 'suomifi-ui-components';
import HeroBlock from '../components/HeroBlock/HeroBlock';
import PlainLayout from '../layouts/PlainLayout/PlainLayout';
import Link from 'next/link';

const FrontPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('front_page.front_page')} | Suomi.fi Design System</title>
      </Head>
      <Block variant="div" className="w-100">
        <HeroBlock />
        <PlainLayout>
          <Block py="xxl">
            <Block mb="xxl">
              <Heading variant="h1">{t('front_page.heading')}</Heading>
            </Block>
            <Block mb="xl">
              <Heading variant="h2">{t('front_page.sub_heading_1')}</Heading>
            </Block>
            <Block>
              <Paragraph marginBottomSpacing="l">
                {t('front_page.paragraph_1')}
              </Paragraph>
              <Link href="/info" passHref>
                <RouterLink>{t('front_page.link_1')}</RouterLink>
              </Link>
            </Block>
            <Block mb="xl" mt="xxl">
              <Heading variant="h2">{t('front_page.sub_heading_2')}</Heading>
            </Block>
            <Block>
              <Paragraph>{t('front_page.paragraph_2')}</Paragraph>
            </Block>
            <Block mt="xl">
              <Paragraph marginBottomSpacing="l">
                {t('front_page.paragraph_3')}
              </Paragraph>
              <Link href="/components" passHref>
                <RouterLink>{t('front_page.link_2')}</RouterLink>
              </Link>
              <br />
              <ExternalLink
                labelNewWindow={t('common.opens_in_a_new_tab')}
                href="https://vrk-kpa.github.io/suomifi-ui-components"
              >
                {t('front_page.link_3')}
              </ExternalLink>
            </Block>
            <Block mt="xxxl">
              <Paragraph marginBottomSpacing="l">
                {t('front_page.paragraph_4')}
              </Paragraph>
              <Link href="/info" passHref>
                <RouterLink>{t('front_page.link_4')}</RouterLink>
              </Link>
            </Block>
          </Block>
        </PlainLayout>
      </Block>
    </>
  );
};

export default FrontPage;
