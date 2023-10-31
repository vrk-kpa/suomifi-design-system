import { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {
  Block,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
  Tooltip,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  const [anchorElement, setAnchorElement] = useState<HTMLDivElement | null>(
    null,
  );
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>{t('tooltip_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('tooltip_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Tooltip"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('tooltip_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            height: 180,
          }}
        >
          <div ref={(ref) => setAnchorElement(ref)}>
            <Text style={{ verticalAlign: 'middle' }}>
              {t('tooltip_page.example.text')}
            </Text>
            <Tooltip
              anchorElement={anchorElement}
              ariaToggleButtonLabelText={t('tooltip_page.example.aria.toggle')}
              ariaCloseButtonLabelText={t('tooltip_page.example.aria.close')}
              open={open}
              onToggleButtonClick={() => setOpen(!open)}
              onCloseButtonClick={() => setOpen(false)}
            >
              <Heading variant="h5" as="h2">
                {t('tooltip_page.example.title')}
              </Heading>
              <Text>{t('tooltip_page.example.description')}</Text>
            </Tooltip>
          </div>
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('tooltip_page.accessibility_list.point_1')}</li>
              <li>{t('tooltip_page.accessibility_list.point_2')}</li>
              <li>{t('tooltip_page.accessibility_list.point_3')}</li>
              <li>{t('tooltip_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('tooltip_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('tooltip_page.what_does_the_component_contain.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('tooltip_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('tooltip_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
