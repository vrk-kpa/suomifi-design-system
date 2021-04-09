import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { Button, suomifiDesignTokens } from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
// import { Button } from 'components/ExampleComponents';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import MobileDevice from 'components/MobileDevice';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

Button.displayName = 'Button';

// const components = [
//   { id: 'primary', comp: Button, variant: 'default' },
//   { id: 'tertiary', comp: Button, variant: 'link' },
//   {
//     id: 'negative',
//     comp: Button,
//     variant: 'inverted',
//     background: suomifiDesignTokens.colors.highlightBase,
//   },
//   { id: 'secondary', comp: Button, variant: 'secondary' },
//   {
//     id: 'secondaryNoborder',
//     comp: Button,
//     variant: 'secondaryNoBorder',
//     background: suomifiDesignTokens.colors.whiteBase,
//   },
// ];

// const mobileComponents = [
//   { id: 'primary', comp: Button },
//   { id: 'tertiary', comp: Button, variant: 'link' },
//   { id: 'secondary', comp: Button, variant: 'secondary' },
// ];

// const disabledComponents = [
//   { id: 'primary', comp: Button },
//   { id: 'tertiary', comp: Button, variant: 'link' },
//   {
//     id: 'negative',
//     comp: Button,
//     variant: 'inverted',
//     background: suomifiDesignTokens.colors.highlightBase,
//   },
//   { id: 'secondary', comp: Button, variant: 'secondary' },
//   {
//     id: 'secondaryNoborder',
//     comp: Button,
//     variant: 'secondaryNoBorder',
//   },
// ];

const clickCount = {};
const handleClick = (id: string, name: string, t: Function): void => {
  if (!clickCount[id]) {
    clickCount[id] = 0;
  }
  document.getElementById(id).setAttribute(
    'aria-label',
    t('button.labelClicked', {
      name: name,
      count: ++clickCount[id],
    }),
  );
};

const getExampleComp = (
  Comp: Function,
  variant: string,
  id: string,
  label: string,
  props: object,
  t: Function,
): JSX.Element => (
  <Comp
    variant={variant}
    key={id}
    id={id}
    aria-label={label}
    style={{ margin: suomifiDesignTokens.spacing.xs }}
    {...props}
    onClick={() => handleClick(id, label, t)}
  >
    {label}
  </Comp>
);

const Page = (): JSX.Element => {
  return (
    <Translation ns={['button']}>
      {(t) => (
        <Layout sideNavData={sideNavData(t)}>
          <SEO title={t('title')} />
          <Heading.h1>{t('title')}</Heading.h1>

          <Paragraph.lead>
            <Text.lead>{t('intro')}</Text.lead>
          </Paragraph.lead>

          <NoteBox title={t('note.title')} items={t('note.items')} />

          {t<SectionProps[]>('sections').map((section, index) => (
            <Section
              key={index}
              mainTitle={section.title}
              paragraphs={section.paragraphs}
              links={section.links}
            />
          ))}

          <ComponentDescription
            mainTitle={t('fullWidth.title')}
            description={t('fullWidth.description')}
            exampleFirst
          >
            <div
              style={{
                overflow: 'hidden',
                marginBottom: suomifiDesignTokens.spacing.s,
                padding: `${suomifiDesignTokens.spacing.xl} ${suomifiDesignTokens.spacing.s} 0 ${suomifiDesignTokens.spacing.s}`,
                background: suomifiDesignTokens.colors.whiteBase,
                display: 'flex',
                justifyContent: 'center',
                border: `1px solid ${suomifiDesignTokens.colors.depthBase}`,
              }}
            >
              <MobileDevice>
                <div style={{ padding: 15 }}>
                  <Button fullWidth onClick={() => undefined}>
                    {t(`primary.label`)}
                  </Button>
                </div>
                <div style={{ padding: 15 }}>
                  <Button fullWidth variant="link" onClick={() => undefined}>
                    {t(`tertiary.label`)}
                  </Button>
                </div>
                <div style={{ padding: 15 }}>
                  <Button
                    fullWidth
                    variant="secondary"
                    onClick={() => undefined}
                  >
                    {t(`secondary.label`)}
                  </Button>
                </div>
                {/* {mobileComponents.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: `${suomifiDesignTokens.spacing.s} ${suomifiDesignTokens.spacing.xs}`,
                    }}
                  >
                    {getExampleComp(
                      item.comp,
                      item.variant,
                      `${item.id}.fullWidth`,
                      t(`${item.id}.label`),
                      { fullWidth: true, style: {} },
                      t,
                    )}
                  </div>
                ))} */}
              </MobileDevice>
            </div>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t(`primary.title`)}
            description={t(`primary.description`)}
            exampleFirst
          >
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <div style={{ padding: 15 }}>
                <Button onClick={() => undefined}>{t(`primary.label`)}</Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button disabled onClick={() => undefined}>
                  {t(`primary.labelDisabled`)}
                </Button>
              </div>
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t(`tertiary.title`)}
            description={t(`tertiary.description`)}
            exampleFirst
          >
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <div style={{ padding: 15 }}>
                <Button variant="link" onClick={() => undefined}>
                  {t(`tertiary.label`)}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button variant="link" disabled onClick={() => undefined}>
                  {t(`tertiary.labelDisabled`)}
                </Button>
              </div>
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t(`negative.title`)}
            description={t(`negative.description`)}
            exampleFirst
          >
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.highlightBase,
              }}
            >
              <div style={{ padding: 15 }}>
                <Button variant="inverted" onClick={() => undefined}>
                  {t(`negative.label`)}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button variant="inverted" disabled onClick={() => undefined}>
                  {t(`negative.labelDisabled`)}
                </Button>
              </div>
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t(`secondary.title`)}
            description={t(`secondary.description`)}
            exampleFirst
          >
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <div style={{ padding: 15 }}>
                <Button variant="secondary" onClick={() => undefined}>
                  {t(`secondary.label`)}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button variant="secondary" disabled onClick={() => undefined}>
                  {t(`secondary.labelDisabled`)}
                </Button>
              </div>
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t(`secondaryNoborder.title`)}
            description={t(`secondaryNoborder.description`)}
            exampleFirst
          >
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <div style={{ padding: 15 }}>
                <Button variant="secondaryNoBorder" onClick={() => undefined}>
                  {t(`secondaryNoborder.label`)}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button
                  variant="secondaryNoBorder"
                  disabled
                  onClick={() => undefined}
                >
                  {t(`secondaryNoborder.labelDisabled`)}
                </Button>
              </div>
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t(`withIcon.title`)}
            description={t(`withIcon.description`)}
            exampleFirst
          >
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <div style={{ padding: 15 }}>
                <Button icon="login" onClick={() => undefined}>
                  {t(`button.labelIcon`, {
                    name: t(`primary.label`),
                  })}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button iconRight="login" onClick={() => undefined}>
                  {t(`button.labelIconRight`, {
                    name: t(`primary.label`),
                  })}
                </Button>
              </div>
            </ComponentExample>
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <div style={{ padding: 15 }}>
                <Button icon="login" variant="link" onClick={() => undefined}>
                  {t(`button.labelIcon`, {
                    name: t(`tertiary.label`),
                  })}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button
                  iconRight="login"
                  variant="link"
                  onClick={() => undefined}
                >
                  {t(`button.labelIconRight`, {
                    name: t(`tertiary.label`),
                  })}
                </Button>
              </div>
            </ComponentExample>
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.highlightBase,
              }}
            >
              <div style={{ padding: 15 }}>
                <Button
                  icon="login"
                  variant="inverted"
                  onClick={() => undefined}
                >
                  {t(`button.labelIcon`, {
                    name: t(`negative.label`),
                  })}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button
                  iconRight="login"
                  variant="inverted"
                  onClick={() => undefined}
                >
                  {t(`button.labelIconRight`, {
                    name: t(`negative.label`),
                  })}
                </Button>
              </div>
            </ComponentExample>
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <div style={{ padding: 15 }}>
                <Button
                  icon="login"
                  variant="secondary"
                  onClick={() => undefined}
                >
                  {t(`button.labelIcon`, {
                    name: t(`secondary.label`),
                  })}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button
                  iconRight="login"
                  variant="secondary"
                  onClick={() => undefined}
                >
                  {t(`button.labelIconRight`, {
                    name: t(`secondary.label`),
                  })}
                </Button>
              </div>
            </ComponentExample>
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <div style={{ padding: 15 }}>
                <Button
                  icon="login"
                  variant="secondaryNoBorder"
                  onClick={() => undefined}
                >
                  {t(`button.labelIcon`, {
                    name: t(`secondaryNoborder.label`),
                  })}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button
                  iconRight="login"
                  variant="secondaryNoBorder"
                  onClick={() => undefined}
                >
                  {t(`button.labelIconRight`, {
                    name: t(`secondaryNoborder.label`),
                  })}
                </Button>
              </div>
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t(`disabled.title`)}
            description={t(`disabled.description`)}
            exampleFirst
          >
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <div style={{ padding: 15 }}>
                <Button disabled onClick={() => undefined}>
                  {t(`primary.labelDisabled`)}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button disabled variant="link" onClick={() => undefined}>
                  {t(`tertiary.labelDisabled`)}
                </Button>
              </div>
              <div
                style={{
                  padding: 15,
                  background: suomifiDesignTokens.colors.highlightBase,
                }}
              >
                <Button disabled variant="inverted" onClick={() => undefined}>
                  {t(`negative.labelDisabled`)}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button disabled variant="secondary" onClick={() => undefined}>
                  {t(`secondary.labelDisabled`)}
                </Button>
              </div>
              <div style={{ padding: 15 }}>
                <Button
                  disabled
                  variant="secondaryNoBorder"
                  onClick={() => undefined}
                >
                  {t(`secondaryNoborder.labelDisabled`)}
                </Button>
              </div>
            </ComponentExample>
          </ComponentDescription>
          {/* {components.map((item) => (
            <ComponentDescription
              key={item.id}
              mainTitle={t(`${item.id}.title`)}
              description={t(`${item.id}.description`)}
              exampleFirst
            >
              <ComponentExample
                style={{
                  padding: suomifiDesignTokens.spacing.xs,
                  background: item.background,
                }}
              >
                {[
                  { id: item.id, label: t(`${item.id}.label`) },
                  {
                    id: `${item.id}.disabled`,
                    label: t(`${item.id}.labelDisabled`),
                    props: { disabled: true },
                  },
                ].map((example) =>
                  getExampleComp(
                    item.comp,
                    item.variant,
                    example.id,
                    example.label,
                    example.props,
                    t,
                  ),
                )}
              </ComponentExample>
            </ComponentDescription>
          ))} */}

          {/*
          <ComponentDescription
            mainTitle={t('withIcon.title')}
            description={t('withIcon.description')}
            exampleFirst
          >
             {components.map((item) => (
              <ComponentExample
                key={item.id}
                style={{
                  padding: suomifiDesignTokens.spacing.xs,
                  background: item.background,
                }}
              >
                {[
                  {
                    id: `${item.id}.icon`,
                    label: t('button.labelIcon', {
                      name: t(`${item.id}.label`),
                    }),
                    props: { icon: 'login' },
                  },
                  {
                    id: `${item.id}.iconRight`,
                    label: t('button.labelIconRight', {
                      name: t(`${item.id}.label`),
                    }),
                    props: { iconRight: 'logout' },
                  },
                ].map((example) =>
                  getExampleComp(
                    item.comp,
                    item.variant,
                    example.id,
                    example.label,
                    example.props,
                    t,
                  ),
                )}
              </ComponentExample>
            ))} 
          </ComponentDescription>
            */}

          {/*
          <ComponentDescription
            mainTitle={t('disabled.title')}
            description={t('disabled.description')}
            exampleFirst
          >
            <ComponentExample
              style={{ padding: suomifiDesignTokens.spacing.xs }}
            >
               {disabledComponents.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: item.background
                      ? suomifiDesignTokens.spacing.xs
                      : 0,
                    background: item.background || 'none',
                  }}
                >
                  {getExampleComp(
                    item.comp,
                    item.variant,
                    `${item.id}.disabled.another`,
                    t(`${item.id}.labelDisabled`),
                    { disabled: true },
                    t,
                  )}
                </div>
              ))} 
            </ComponentExample>
          </ComponentDescription>
              */}
        </Layout>
      )}
    </Translation>
  );
};

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
