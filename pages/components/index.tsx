import type { NextPage } from "next";
import Head from "next/head";

import { Block, Heading } from "suomifi-ui-components";
import CardLayout from "../../layouts/CardLayout/CardLayout";
import { navItems } from "../../utils/components-sidenav";

const FrontPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Komponentit | Suomi.fi Design System</title>
      </Head>
      <CardLayout navItems={navItems}>
        <Heading variant="h1"> Komponenttien käyttöohje</Heading>
      </CardLayout>
    </>
  );
};

export default FrontPage;
