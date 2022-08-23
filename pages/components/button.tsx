import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import {
  Heading,
  Text,
  Paragraph,
  Block,
  Button,
  ExternalLink,
} from 'suomifi-ui-components';
import CardLayout from '../../layouts/CardLayout/CardLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';

const ButtonPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('')}</title>
      </Head>
      <CardLayout navItems={navItems}>
        <Heading variant="h1">{t('button_page.heading')}</Heading>
        <ExternalLink
          href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Button"
          labelNewWindow={t('common.opens_in_a_new_tab')}
        >
          {t('common.see_technical_documentation_of_component')}
        </ExternalLink>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('button_page.ingress')}</Text>
        </Paragraph>
        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('button_page.accessibility_list.point_1')}</li>
              <li>{t('button_page.accessibility_list.point_2')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2">
            {t('button_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('button_page.what_does_the_component_contain.text')}
          </Paragraph>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('button_page.size_and_usage.heading')}
          </Heading>
          <ComponentExample
            variant="mobile_device"
            filterPropsInExample={['className']}
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
