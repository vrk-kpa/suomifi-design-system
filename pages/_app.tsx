import '../styles/globals.scss';
import '../GrandOne/GrandOnePage.scss';
import type { AppProps } from 'next/app';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Block, SkipLink } from 'suomifi-ui-components';
import Head from 'next/head';

import { useTranslation } from 'next-export-i18n';
import { useRouter } from 'next/router';

function SuomifiDesignSystemSiteApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  const router = useRouter();
  const path = router.pathname;
  console.log(router.pathname);
  return (
    <Block className="app">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SkipLink href="#main">{t('common.skip_to_main_content')}</SkipLink>
      {(path.startsWith('/components') ||
        path.startsWith('/styles') ||
        path.startsWith('/info')) && (
        <SkipLink href="#sidenav">
          {t('common.skip_to_side_navigation')}
        </SkipLink>
      )}
      {!path.startsWith('/grand-one') ? (
        <>
          <Header />
          <Block id="content">
            <Component {...pageProps} />
          </Block>
          <Footer />
        </>
      ) : (
        <Block>
          <Component {...pageProps} />
        </Block>
      )}
    </Block>
  );
}

export default SuomifiDesignSystemSiteApp;
