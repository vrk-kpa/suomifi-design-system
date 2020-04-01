import React, { CSSProperties } from 'react';
import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { suomifiDesignTokens } from 'suomifi-ui-components';
import { getLuminance } from 'polished';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/styles';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const colorTokens =
  !!suomifiDesignTokens && !!suomifiDesignTokens.colors
    ? suomifiDesignTokens.colors
    : { depthLight1: undefined };

const borderForLightColor = `1px solid ${colorTokens.depthLight1}`;

type ColorKeys = keyof typeof suomifiDesignTokens.colors;
interface ColorItem {
  name: string;
  value: string;
  border: string;
}
type colorTypes = { [key in ColorKeys]?: ColorItem };
const colors: colorTypes = Object.entries(colorTokens).reduce(
  (obj, [key, value]: [ColorKeys, string]) => ({
    ...obj,
    [key]: {
      name: key,
      value,
      border:
        getLuminance(value) > getLuminance('#f8f8f8')
          ? borderForLightColor
          : '0',
    },
  }),
  {},
);

const colorCategories = [
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
      margin: `${suomifiDesignTokens.spacing.xs} ${suomifiDesignTokens.spacing.xl} ${suomifiDesignTokens.spacing.xl} 0`,
      lineHeight: '1rem',
    }}
  >
    <div
      style={{
        width: '10rem',
        height: '3rem',
        marginBottom: suomifiDesignTokens.spacing.s,
        background: value,
        ...style,
      }}
    />
    <div style={{ fontSize: '.8rem' }}>{label}</div>
    <div style={{ fontSize: '.8rem' }}>{value}</div>
    <div style={{ fontSize: '.8rem' }}>{name}</div>
  </div>
);

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['colors']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t('sections').map((section, index) => (
          <Section
            key={index}
            mainTitle={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
          />
        ))}

        {colorCategories.map(item => (
          <ComponentDescription
            key={item.id}
            mainTitle={t(`${item.id}.title`)}
            description={t(`${item.id}.description`)}
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
                  t(`${color.name}.label`),
                  { border: color.border },
                ),
              )}
            </ComponentExample>
          </ComponentDescription>
        ))}
      </Layout>
    )}
  </NamespacesConsumer>
);

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
