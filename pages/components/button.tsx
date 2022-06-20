import { NextPage } from "next";
import Head from "next/head";
import { Heading, Text, Paragraph } from "suomifi-ui-components";
import CardLayout from "../../layouts/CardLayout/CardLayout";
import { navItems } from "../../utils/components-sidenav";

const ButtonPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Painike (Button) | Suomi.fi Design System</title>
      </Head>
      <CardLayout navItems={navItems}>
        <Heading variant="h1">Painike (Button)</Heading>
        <Paragraph className="mt-xl mb-xl">
          <Text variant="lead">
            Suomi.fi Design System tarjoaa kokoelman saavutettavia,
            uudelleenkäytettäviä ja dokumentoituja käyttöliittymäkomponentteja.
            Komponentit on toteutettu Suomi.fi-identiteetin mukaisina
            React-komponentteina.
          </Text>
        </Paragraph>
      </CardLayout>
    </>
  );
};

export default ButtonPage;
