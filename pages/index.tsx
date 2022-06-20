import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Link as SuomiFiLink } from "suomifi-ui-components";

import { Block, Heading, RouterLink } from "suomifi-ui-components";

const FrontPage: NextPage = () => {
  return (
    <Block className="container">
      <Head>
        <title>Etusivu | Suomi.fi Design System</title>
      </Head>
      <Block style={{ padding: "50px 0" }}>
        <Heading variant="h1">Suomi.fi DS site revamp POC</Heading>
      </Block>
    </Block>
  );
};

export default FrontPage;
