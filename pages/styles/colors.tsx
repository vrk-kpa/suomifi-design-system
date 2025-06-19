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
  (obj: ColorTypes, [key, value]: [string, string]) => {
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
const brandColors: ColorItem[] | undefined[] = [colors.brandBase];
const textColors: ColorItem[] | undefined[] = [
  colors.blackBase,
  colors.depthBase,
  colors.depthDark2,
];
const functionalColors: ColorItem[] | undefined[] = [
  colors.highlightBase,
  colors.highlightLight1,
  colors.highlightLight2,
  colors.highlightLight3,
  colors.highlightDark1,
  colors.depthBase,
  colors.accentSecondary,
  colors.accentTertiaryDark1,
];
const iconColors: ColorItem[] | undefined[] = [
  colors.depthBase,
  colors.accentBase,
  colors.highlightBase,
  colors.depthDark1,
];
const borderColors: ColorItem[] | undefined[] = [
  colors.whiteBase,
  colors.depthLight3,
  colors.depthLight1,
  colors.highlightLight2,
  colors.highlightLight3,
  colors.highlightLight4,
  colors.depthSecondary,
];
const trafficlightColors: ColorItem[] | undefined[] = [
  colors.successBase,
  colors.successSecondary,
  colors.warningBase,
  colors.alertBase,
  colors.alertLight1,
];
const accentColors: ColorItem[] | undefined[] = [
  colors.accentBase,
  colors.accentSecondary,
  colors.accentSecondaryLight1,
  colors.accentTertiary,
];

const ColorsPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t('styles.colors')} ${t('common.title_suffix')}`}</title>
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
          {t('colors.brand.heading')}
        </Heading>
        <Paragraph>{t('colors.brand.paragraph')}</Paragraph>
        <Block my="l">
          <ColorShowcase colors={brandColors}></ColorShowcase>
        </Block>
        <Divider />

        <Heading variant="h2" className="mb-l">
          {t('colors.texts.heading')}
        </Heading>
        <Paragraph>{t('colors.texts.paragraph')}</Paragraph>
        <Block mt="l">
          <ColorShowcase colors={textColors}></ColorShowcase>
        </Block>
        <Divider />

        <Heading variant="h2" className="mb-l">
          {t('colors.functionals.heading')}
        </Heading>
        <Paragraph>{t('colors.functionals.paragraph')}</Paragraph>
        <Block mt="l">
          <ColorShowcase colors={functionalColors}></ColorShowcase>
        </Block>
        <Divider />

        <Heading variant="h2" className="mb-l">
          {t('colors.icons.heading')}
        </Heading>
        <Paragraph>{t('colors.icons.paragraph')}</Paragraph>
        <Block mt="l">
          <ColorShowcase colors={iconColors}></ColorShowcase>
        </Block>
        <Divider />

        <Heading variant="h2" className="mb-l">
          {t('colors.borders.heading')}
        </Heading>
        <Paragraph>{t('colors.borders.paragraph')}</Paragraph>
        <Block mt="l">
          <ColorShowcase colors={borderColors}></ColorShowcase>
        </Block>
        <Divider />

        <Heading variant="h2" className="mb-l">
          {t('colors.trafficlights.heading')}
        </Heading>
        <Paragraph>{t('colors.trafficlights.paragraph')}</Paragraph>
        <Block mt="l">
          <ColorShowcase colors={trafficlightColors}></ColorShowcase>
        </Block>
        <Divider />

        <Heading variant="h2" className="mb-l">
          {t('colors.accents.heading')}
        </Heading>
        <Paragraph>{t('colors.accents.paragraph')}</Paragraph>
        <Block mt="l">
          <ColorShowcase colors={accentColors}></ColorShowcase>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default ColorsPage;
