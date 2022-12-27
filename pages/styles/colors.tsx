import { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import {
  Heading,
  Block,
  Paragraph,
  Text,
  ExternalLink,
} from 'suomifi-ui-components';
import { suomifiDesignTokens } from 'suomifi-design-tokens';
import { getLuminance } from 'polished';

import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/styles-sidenav';
import ColorShowcase from '../../components/ColorShowcase/ColorShowcase';
import { ColorItem, ColorTypes } from '../../interfaces/interfaces';
import InfoBox from '../../components/InfoBox/InfoBox';
import Divider from '../../components/Divider/Divider';

const colorTokens = suomifiDesignTokens.colors;
const borderForLightColor = `1px solid ${colorTokens.depthLight1}`;

const colors: any = Object.entries(colorTokens).reduce(
  // @ts-ignore
  // TODO: Figure out why Typescript complains here
  (obj: ColorTypes, [key, value]: [ColorKeys, string]) => {
    return {
      ...obj,
      [key]: {
        name: key,
        value,
        border:
          getLuminance(value) > getLuminance('#f8f8f8')
            ? borderForLightColor
            : '0',
      },
    };
  },
  {},
);

const textColors: ColorItem[] | undefined[] = [
  colors.blackBase,
  colors.depthBase,
  colors.depthDark2,
];
const brandColors: ColorItem[] | undefined[] = [colors.brandBase];

const ColorsPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('styles.colors')} | Suomi.fi Design System</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('styles.colors')}
        navIcon="magicWand"
      >
        <Heading variant="h1" className="mb-xl">
          {t('colors.heading')}
        </Heading>
        <Block mb="l">
          <Text variant="lead">{t('colors.ingress')}</Text>
        </Block>
        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('colors.accessibility_list.point_1')}</li>
              <li>{t('colors.accessibility_list.point_2')}</li>
              <li>{t('colors.accessibility_list.point_3')}</li>
              <li>{t('colors.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
          <Block mt="l">
            <ExternalLink
              labelNewWindow={t('common.opens_in_a_new_tab')}
              href="https://www.w3.org/TR/WCAG21/#contrast-minimum"
            >
              {t('colors.contrast_link')}
            </ExternalLink>
          </Block>
        </Block>
        <Heading variant="h2" className="mb-l">
          {t('colors.texts.heading')}
        </Heading>
        <Paragraph>{t('colors.texts.paragraph')}</Paragraph>
        <Block mt="l">
          <ColorShowcase colors={textColors}></ColorShowcase>
        </Block>
        <Divider />
        <Heading variant="h2" className="mb-l">
          {t('colors.brand.heading')}
        </Heading>
        <Paragraph>{t('colors.brand.paragraph')}</Paragraph>
        <Block my="l">
          <ColorShowcase colors={brandColors}></ColorShowcase>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default ColorsPage;
