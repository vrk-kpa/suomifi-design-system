import type { NextPage } from "next";
import Head from "next/head";

import { Heading } from "suomifi-ui-components";

const Demo: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>DS site POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading variant="h1">Suomi.fi DS site revamp POC</Heading>
      </main>

      <footer></footer>
    </div>
  );
};

export default Demo;
