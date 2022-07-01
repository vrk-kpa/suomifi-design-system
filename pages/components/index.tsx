import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import {
  Block,
  Button,
  Heading,
  Paragraph,
  SuomifiThemeProvider,
} from "suomifi-ui-components";
import ComponentExample from "../../components/ComponentExample/ComponentExample";
import CardLayout from "../../layouts/CardLayout/CardLayout";
import { navItems } from "../../utils/components-sidenav";
import { themeExampleJSX } from "../../utils/complicatedCodeExamples";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeToBeUsed = locale ? locale : "fi";
  return {
    props: {
      ...(await serverSideTranslations(localeToBeUsed)),
    },
  };
};

const customTheme = {
  gradients: {
    highlightBaseToHighlightDark1: "linear-gradient(to top, orange, red);",
    highlightLight1ToHighlightBase: "linear-gradient(to top, crimson, red);",
  },
  colors: {
    highlightDark1: "darkred",
    highlightBase: "blue",
    highlightLight1: "green",
  },
};

const FrontPage: NextPage = () => {
  const { t } = useTranslation(["common", "componentsMainPage"]);

  return (
    <>
      <Head>
        <title>Komponentit | Suomi.fi Design System</title>
      </Head>
      <CardLayout navItems={navItems}>
        <Heading variant="h1" className="mb-xl">
          {" "}
          Komponenttien käyttöohje
        </Heading>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t("componentsMainPage:customizing_theme.heading")}
          </Heading>
          <ComponentExample codeString={themeExampleJSX}>
            <SuomifiThemeProvider theme={customTheme}>
              <Button>
                {t("componentsMainPage:customizing_theme.buttonText")}
              </Button>
            </SuomifiThemeProvider>
          </ComponentExample>
          <Paragraph className="mt-xl">
            {t("componentsMainPage:customizing_theme.text")}
          </Paragraph>
        </Block>
      </CardLayout>
    </>
  );
};

export default FrontPage;
