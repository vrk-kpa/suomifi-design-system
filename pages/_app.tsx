import "../styles/globals.scss";
import type { AppProps } from "next/app";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Block } from "suomifi-ui-components";
import Head from "next/head";

import { appWithTranslation } from "next-i18next";

function SuomifiDesignSystemSiteApp({ Component, pageProps }: AppProps) {
  return (
    <Block className="app">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Block id="content">
        <Component {...pageProps} />
      </Block>
      <Footer />
    </Block>
  );
}

export default appWithTranslation(SuomifiDesignSystemSiteApp);
