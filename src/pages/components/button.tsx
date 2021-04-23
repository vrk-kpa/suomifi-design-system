import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { Button, suomifiDesignTokens } from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import MobileDevice from 'components/MobileDevice';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

Button.displayName = 'Button';

const ExampleWrapper = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => <div style={{ padding: 15 }}>{children}</div>;
ExampleWrapper.displayName = 'div';

const Page = (): JSX.Element => {
  return (
    <Translation ns={['button']}>
      {(t) => (
        <Layout sideNavData={sideNavData(t)}>
          <SEO title={t('title')} />
          <Heading variant="h1">{t('title')}</Heading>

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
                <ExampleWrapper>
                  <Button fullWidth onClick={() => undefined}>
                    {t(`primary.label`)}
                  </Button>
                </ExampleWrapper>
                <ExampleWrapper>
                  <Button fullWidth variant="link" onClick={() => undefined}>
                    {t(`tertiary.label`)}
                  </Button>
                </ExampleWrapper>
                <ExampleWrapper>
                  <Button
                    fullWidth
                    variant="secondary"
                    onClick={() => undefined}
                  >
                    {t(`secondary.label`)}
                  </Button>
                </ExampleWrapper>
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
              <ExampleWrapper>
                <Button onClick={() => undefined}>{t(`primary.label`)}</Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button disabled onClick={() => undefined}>
                  {t(`primary.labelDisabled`)}
                </Button>
              </ExampleWrapper>
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
              <ExampleWrapper>
                <Button variant="link" onClick={() => undefined}>
                  {t(`tertiary.label`)}
                </Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button variant="link" disabled onClick={() => undefined}>
                  {t(`tertiary.labelDisabled`)}
                </Button>
              </ExampleWrapper>
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
              <ExampleWrapper>
                <Button variant="inverted" onClick={() => undefined}>
                  {t(`negative.label`)}
                </Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button variant="inverted" disabled onClick={() => undefined}>
                  {t(`negative.labelDisabled`)}
                </Button>
              </ExampleWrapper>
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
              <ExampleWrapper>
                <Button variant="secondary" onClick={() => undefined}>
                  {t(`secondary.label`)}
                </Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button variant="secondary" disabled onClick={() => undefined}>
                  {t(`secondary.labelDisabled`)}
                </Button>
              </ExampleWrapper>
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
              <ExampleWrapper>
                <Button variant="secondaryNoBorder" onClick={() => undefined}>
                  {t(`secondaryNoborder.label`)}
                </Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button
                  variant="secondaryNoBorder"
                  disabled
                  onClick={() => undefined}
                >
                  {t(`secondaryNoborder.labelDisabled`)}
                </Button>
              </ExampleWrapper>
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
              <ExampleWrapper>
                <Button icon="login" onClick={() => undefined}>
                  {t(`button.labelIcon`, {
                    name: t(`primary.label`),
                  })}
                </Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button iconRight="login" onClick={() => undefined}>
                  {t(`button.labelIconRight`, {
                    name: t(`primary.label`),
                  })}
                </Button>
              </ExampleWrapper>
            </ComponentExample>
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <ExampleWrapper>
                <Button icon="login" variant="link" onClick={() => undefined}>
                  {t(`button.labelIcon`, {
                    name: t(`tertiary.label`),
                  })}
                </Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button
                  iconRight="login"
                  variant="link"
                  onClick={() => undefined}
                >
                  {t(`button.labelIconRight`, {
                    name: t(`tertiary.label`),
                  })}
                </Button>
              </ExampleWrapper>
            </ComponentExample>
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.highlightBase,
              }}
            >
              <ExampleWrapper>
                <Button
                  icon="login"
                  variant="inverted"
                  onClick={() => undefined}
                >
                  {t(`button.labelIcon`, {
                    name: t(`negative.label`),
                  })}
                </Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button
                  iconRight="login"
                  variant="inverted"
                  onClick={() => undefined}
                >
                  {t(`button.labelIconRight`, {
                    name: t(`negative.label`),
                  })}
                </Button>
              </ExampleWrapper>
            </ComponentExample>
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <ExampleWrapper>
                <Button
                  icon="login"
                  variant="secondary"
                  onClick={() => undefined}
                >
                  {t(`button.labelIcon`, {
                    name: t(`secondary.label`),
                  })}
                </Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button
                  iconRight="login"
                  variant="secondary"
                  onClick={() => undefined}
                >
                  {t(`button.labelIconRight`, {
                    name: t(`secondary.label`),
                  })}
                </Button>
              </ExampleWrapper>
            </ComponentExample>
            <ComponentExample
              style={{
                padding: suomifiDesignTokens.spacing.xs,
                background: suomifiDesignTokens.colors.whiteBase,
              }}
            >
              <ExampleWrapper>
                <Button
                  icon="login"
                  variant="secondaryNoBorder"
                  onClick={() => undefined}
                >
                  {t(`button.labelIcon`, {
                    name: t(`secondaryNoborder.label`),
                  })}
                </Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button
                  iconRight="login"
                  variant="secondaryNoBorder"
                  onClick={() => undefined}
                >
                  {t(`button.labelIconRight`, {
                    name: t(`secondaryNoborder.label`),
                  })}
                </Button>
              </ExampleWrapper>
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
              <ExampleWrapper>
                <Button disabled onClick={() => undefined}>
                  {t(`primary.labelDisabled`)}
                </Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button disabled variant="link" onClick={() => undefined}>
                  {t(`tertiary.labelDisabled`)}
                </Button>
              </ExampleWrapper>
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
              <ExampleWrapper>
                <Button disabled variant="secondary" onClick={() => undefined}>
                  {t(`secondary.labelDisabled`)}
                </Button>
              </ExampleWrapper>
              <ExampleWrapper>
                <Button
                  disabled
                  variant="secondaryNoBorder"
                  onClick={() => undefined}
                >
                  {t(`secondaryNoborder.labelDisabled`)}
                </Button>
              </ExampleWrapper>
            </ComponentExample>
          </ComponentDescription>
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
