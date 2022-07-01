import { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Heading,
  Text,
  Paragraph,
  Block,
  Button,
  ExternalLink,
  Icon,
  Toast,
} from "suomifi-ui-components";
import CardLayout from "../../layouts/CardLayout/CardLayout";
import { navItems } from "../../utils/components-sidenav";
import InfoBox from "../../components/InfoBox/InfoBox";
import ComponentExample from "../../components/ComponentExample/ComponentExample";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeToBeUsed = locale ? locale : "fi";
  return {
    props: {
      ...(await serverSideTranslations(localeToBeUsed)),
    },
  };
};

const ButtonPage: NextPage = () => {
  const { t } = useTranslation(["common", "buttonPage"]);

  return (
    <>
      <Head>
        <title>{t("buttonPage:site_title")}</title>
      </Head>
      <CardLayout navItems={navItems}>
        <Heading variant="h1">{t("buttonPage:heading")}</Heading>
        <ExternalLink
          href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Button"
          labelNewWindow={t("common:opens_in_a_new_tab")}
        >
          {t("common:see_technical_documentation_of_component")}
        </ExternalLink>
        <Paragraph className="my-xl">
          <Text variant="lead">{t("buttonPage:ingress")}</Text>
        </Paragraph>
        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t("common:accessibility_and_usability")}
            </Heading>
            <ul>
              <li>{t("buttonPage:accessibility_list.point_1")}</li>
              <li>{t("buttonPage:accessibility_list.point_2")}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2">
            {t("buttonPage:what_does_the_component_contain.heading")}
          </Heading>
          <Paragraph className="my-xl">
            {t("buttonPage:what_does_the_component_contain.text")}
          </Paragraph>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t("buttonPage:size_and_usage.heading")}
          </Heading>
          <ComponentExample
            variant="mobile_device"
            filterPropsInExample={["className"]}
          >
            <Button fullWidth>Ensisijainen</Button>
            <Button fullWidth variant="link" className="mt-l">
              Linkki
            </Button>
            <Button fullWidth variant="secondary" className="mt-l">
              Toissijainen
            </Button>
          </ComponentExample>
        </Block>
      </CardLayout>
    </>
  );
};

export default ButtonPage;
