import React, { CSSProperties } from 'react';
import { defaultSuomifiTheme, ColorDesignTokens } from 'suomifi-ui-components';
import { getLuminance, hslToColorString } from 'polished';

import colorsContent from '../../../locale/fi/colors.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/styles';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const colorTokens = defaultSuomifiTheme.colors;

const borderForLightColor = `1px solid ${colorTokens.depthLight1}`;

type ColorKeys = keyof ColorDesignTokens;

interface ColorItem {
  name: string;
  value: string;
  border: string;
}

type ColorTypes = { [key in ColorKeys]?: ColorItem };

const colors: ColorTypes = Object.entries(colorTokens).reduce(
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

type ColorCategory = {
  id: string;
  colors: ColorItem[];
};

const colorCategories: ColorCategory[] = [
  {
    id: 'textColors',
    colors: [
      colors.blackBase,
      colors.blackLight1,
      colors.depthBase,
      colors.depthDark1,
    ],
  },
  { id: 'brandColors', colors: [colors.brandBase] },
  {
    id: 'controlColors',
    colors: [
      colors.highlightBase,
      colors.highlightLight1,
      colors.highlightLight2,
      colors.highlightLight3,
      colors.highlightDark1,
      colors.depthBase,
      colors.depthLight2,
      colors.depthDark1,
      colors.accentBase,
      colors.accentTertiaryDark1,
    ],
  },
  {
    id: 'iconColors',
    colors: [colors.accentBase, colors.depthBase, colors.depthDark1],
  },
  {
    id: 'backgroundColors',
    colors: [
      colors.whiteBase,
      colors.depthLight3,
      colors.depthLight1,
      colors.highlightLight2,
      colors.highlightLight3,
      colors.highlightLight4,
      colors.depthSecondary,
      colors.depthSecondaryDark1,
    ],
  },
  {
    id: 'trafficColors',
    colors: [
      colors.successBase,
      colors.successSecondary,
      colors.warningBase,
      colors.alertBase,
      colors.alertLight1,
    ],
  },
  {
    id: 'accentColors',
    colors: [
      colors.accentBase,
      colors.accentSecondary,
      colors.accentSecondaryLight1,
      colors.accentTertiary,
    ],
  },
];

/**
 * Convert HSLA or HSL to hex, does not take account the alpha value
 * @param hsla
 */
export const hslaToHex = (hsla: string): string => {
  // eslint-disable-next-line no-useless-escape
  const values = hsla.replace(/(hsla\(|hsl\(|\)|\%|\s)/g, '').split(',');
  const hue = parseInt(values[0], 10);
  const saturationPercentage = parseInt(values[1], 10);
  const lightnessPercentage = parseInt(values[2], 10);
  const saturation = saturationPercentage / 100;
  const lightness = lightnessPercentage / 100;
  if (
    !Number.isInteger(hue) ||
    !Number.isInteger(saturationPercentage) ||
    !Number.isInteger(lightnessPercentage)
  ) {
    return '';
  }
  return hslToColorString({
    hue,
    saturation,
    lightness,
  });
};

const getExampleColor = (
  id: string,
  name: string,
  value: string,
  label: string,
  style?: CSSProperties,
): JSX.Element => (
  <div
    key={id}
    style={{
      margin: `${defaultSuomifiTheme.spacing.xs} ${defaultSuomifiTheme.spacing.xl} ${defaultSuomifiTheme.spacing.xl} 0`,
      lineHeight: '1rem',
    }}
  >
    <div
      style={{
        width: '10rem',
        height: '3rem',
        marginBottom: defaultSuomifiTheme.spacing.s,
        background: value,
        ...style,
      }}
    />
    <div style={{ fontSize: '.8rem' }}>{label}</div>
    <div style={{ fontSize: '.8rem' }}>{value}</div>
    <div style={{ fontSize: '.8rem' }}>{hslaToHex(value)}</div>
    <div style={{ fontSize: '.8rem' }}>{name}</div>
  </div>
);

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={colorsContent.title} />
    <Heading variant="h1">{colorsContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{colorsContent.intro}</Text>
    </Paragraph>

    <NoteBox
      title={colorsContent['note.title']}
      items={colorsContent['note.items']}
    />

    {colorsContent.sections.map((section: SectionProps, index: number) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}

    {colorCategories.map((item) => (
      <ComponentDescription
        key={item.id}
        mainTitle={colorsContent[`${item.id}.title`]}
        description={colorsContent[`${item.id}.description`]}
        exampleFirst={false}
        noCode
      >
        <ComponentExample
          style={{
            padding: 0,
            justifyContent: 'flex-start',
            background: 'none',
            border: 'none',
          }}
        >
          {item.colors.map((color, index) =>
            getExampleColor(
              `${item.id}.${index}`,
              color.name,
              color.value,
              colorsContent[`${color.name}.label`],
              { border: color.border },
            ),
          )}
        </ComponentExample>
      </ComponentDescription>
    ))}
  </Layout>
);

export default Page;
