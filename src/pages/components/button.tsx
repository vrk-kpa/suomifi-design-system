import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import * as buttonContent from '../../../locale/fi/button.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import MobileDevice from 'components/MobileDevice';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import { Button } from 'components/ExampleComponents';

const ExampleWrapper = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => <div style={{ padding: 15 }}>{children}</div>;
ExampleWrapper.displayName = 'div';

const Page = (): JSX.Element => {
  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={buttonContent.title} />
      <Heading variant="h1">{buttonContent.title}</Heading>

      <Paragraph variant="lead">
        <Text variant="lead">{buttonContent.intro}</Text>
      </Paragraph>

      <NoteBox
        title={buttonContent['note.title']}
        items={buttonContent['note.items']}
      />

      {buttonContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={(section as any).paragraphs}
          links={section.links}
        />
      ))}

      <ComponentDescription
        mainTitle={buttonContent['fullWidth.title']}
        description={buttonContent['fullWidth.description']}
        exampleFirst
      >
        <div
          style={{
            overflow: 'hidden',
            marginBottom: defaultSuomifiTheme.spacing.s,
            padding: `${defaultSuomifiTheme.spacing.xl} ${defaultSuomifiTheme.spacing.s} 0 ${defaultSuomifiTheme.spacing.s}`,
            background: defaultSuomifiTheme.colors.whiteBase,
            display: 'flex',
            justifyContent: 'center',
            border: `1px solid ${defaultSuomifiTheme.colors.depthBase}`,
          }}
        >
          <MobileDevice>
            <ExampleWrapper>
              <Button fullWidth onClick={() => undefined}>
                {buttonContent['primary.label']}
              </Button>
            </ExampleWrapper>
            <ExampleWrapper>
              <Button fullWidth variant="link" onClick={() => undefined}>
                {buttonContent['link.label']}
              </Button>
            </ExampleWrapper>
            <ExampleWrapper>
              <Button fullWidth variant="secondary" onClick={() => undefined}>
                {buttonContent['secondary.label']}
              </Button>
            </ExampleWrapper>
          </MobileDevice>
        </div>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={buttonContent['primary.title']}
        description={buttonContent['primary.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            padding: defaultSuomifiTheme.spacing.xs,
            background: defaultSuomifiTheme.colors.whiteBase,
          }}
        >
          <ExampleWrapper>
            <Button onClick={() => undefined}>
              {buttonContent['primary.label']}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button disabled onClick={() => undefined}>
              {buttonContent['primary.labelDisabled']}
            </Button>
          </ExampleWrapper>
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={buttonContent['link.title']}
        description={buttonContent['link.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            padding: defaultSuomifiTheme.spacing.xs,
            background: defaultSuomifiTheme.colors.whiteBase,
          }}
        >
          <ExampleWrapper>
            <Button variant="link" onClick={() => undefined}>
              {buttonContent['link.label']}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button variant="link" disabled onClick={() => undefined}>
              {buttonContent['link.labelDisabled']}
            </Button>
          </ExampleWrapper>
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={buttonContent['negative.title']}
        description={buttonContent['negative.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            padding: defaultSuomifiTheme.spacing.xs,
            background: defaultSuomifiTheme.colors.highlightBase,
          }}
        >
          <ExampleWrapper>
            <Button variant="inverted" onClick={() => undefined}>
              {buttonContent['negative.label']}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button variant="inverted" disabled onClick={() => undefined}>
              {buttonContent['negative.labelDisabled']}
            </Button>
          </ExampleWrapper>
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={buttonContent['secondary.title']}
        description={buttonContent['secondary.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            padding: defaultSuomifiTheme.spacing.xs,
            background: defaultSuomifiTheme.colors.whiteBase,
          }}
        >
          <ExampleWrapper>
            <Button variant="secondary" onClick={() => undefined}>
              {buttonContent['secondary.label']}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button variant="secondary" disabled onClick={() => undefined}>
              {buttonContent['secondary.labelDisabled']}
            </Button>
          </ExampleWrapper>
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={buttonContent['secondaryNoborder.title']}
        description={buttonContent['secondaryNoborder.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            padding: defaultSuomifiTheme.spacing.xs,
            background: defaultSuomifiTheme.colors.whiteBase,
          }}
        >
          <ExampleWrapper>
            <Button variant="secondaryNoBorder" onClick={() => undefined}>
              {buttonContent['secondaryNoborder.label']}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button
              variant="secondaryNoBorder"
              disabled
              onClick={() => undefined}
            >
              {buttonContent['secondaryNoborder.labelDisabled']}
            </Button>
          </ExampleWrapper>
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={buttonContent['withIcon.title']}
        description={buttonContent['withIcon.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            padding: defaultSuomifiTheme.spacing.xs,
            background: defaultSuomifiTheme.colors.whiteBase,
          }}
        >
          <ExampleWrapper>
            <Button icon="login" onClick={() => undefined}>
              {buttonContent['button.labelIcon'].replace(
                '{{name}}',
                buttonContent['primary.label'],
              )}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button iconRight="login" onClick={() => undefined}>
              {buttonContent['button.labelIconRight'].replace(
                '{{name}}',
                buttonContent['primary.label'],
              )}
            </Button>
          </ExampleWrapper>
        </ComponentExample>
        <ComponentExample
          style={{
            padding: defaultSuomifiTheme.spacing.xs,
            background: defaultSuomifiTheme.colors.whiteBase,
          }}
        >
          <ExampleWrapper>
            <Button icon="login" variant="link" onClick={() => undefined}>
              {buttonContent['button.labelIcon'].replace(
                '{{name}}',
                buttonContent['link.label'],
              )}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button iconRight="login" variant="link" onClick={() => undefined}>
              {buttonContent['button.labelIconRight'].replace(
                '{{name}}',
                buttonContent['link.label'],
              )}
            </Button>
          </ExampleWrapper>
        </ComponentExample>
        <ComponentExample
          style={{
            padding: defaultSuomifiTheme.spacing.xs,
            background: defaultSuomifiTheme.colors.highlightBase,
          }}
        >
          <ExampleWrapper>
            <Button icon="login" variant="inverted" onClick={() => undefined}>
              {buttonContent['button.labelIcon'].replace(
                '{{name}}',
                buttonContent['negative.label'],
              )}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button
              iconRight="login"
              variant="inverted"
              onClick={() => undefined}
            >
              {buttonContent['button.labelIconRight'].replace(
                '{{name}}',
                buttonContent['negative.label'],
              )}
            </Button>
          </ExampleWrapper>
        </ComponentExample>
        <ComponentExample
          style={{
            padding: defaultSuomifiTheme.spacing.xs,
            background: defaultSuomifiTheme.colors.whiteBase,
          }}
        >
          <ExampleWrapper>
            <Button icon="login" variant="secondary" onClick={() => undefined}>
              {buttonContent['button.labelIcon'].replace(
                '{{name}}',
                buttonContent['secondary.label'],
              )}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button
              iconRight="login"
              variant="secondary"
              onClick={() => undefined}
            >
              {buttonContent['button.labelIconRight'].replace(
                '{{name}}',
                buttonContent['secondary.label'],
              )}
            </Button>
          </ExampleWrapper>
        </ComponentExample>
        <ComponentExample
          style={{
            padding: defaultSuomifiTheme.spacing.xs,
            background: defaultSuomifiTheme.colors.whiteBase,
          }}
        >
          <ExampleWrapper>
            <Button
              icon="login"
              variant="secondaryNoBorder"
              onClick={() => undefined}
            >
              {buttonContent['button.labelIcon'].replace(
                '{{name}}',
                buttonContent['secondaryNoborder.label'],
              )}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button
              iconRight="login"
              variant="secondaryNoBorder"
              onClick={() => undefined}
            >
              {buttonContent['button.labelIconRight'].replace(
                '{{name}}',
                buttonContent['secondaryNoborder.label'],
              )}
            </Button>
          </ExampleWrapper>
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={buttonContent['disabled.title']}
        description={buttonContent['disabled.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            padding: defaultSuomifiTheme.spacing.xs,
            background: defaultSuomifiTheme.colors.whiteBase,
          }}
        >
          <ExampleWrapper>
            <Button disabled onClick={() => undefined}>
              {buttonContent['primary.labelDisabled']}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button disabled variant="link" onClick={() => undefined}>
              {buttonContent['link.labelDisabled']}
            </Button>
          </ExampleWrapper>
          <div
            style={{
              padding: 15,
              background: defaultSuomifiTheme.colors.highlightBase,
            }}
          >
            <Button disabled variant="inverted" onClick={() => undefined}>
              {buttonContent['negative.labelDisabled']}
            </Button>
          </div>
          <ExampleWrapper>
            <Button disabled variant="secondary" onClick={() => undefined}>
              {buttonContent['secondary.labelDisabled']}
            </Button>
          </ExampleWrapper>
          <ExampleWrapper>
            <Button
              disabled
              variant="secondaryNoBorder"
              onClick={() => undefined}
            >
              {buttonContent['secondaryNoborder.labelDisabled']}
            </Button>
          </ExampleWrapper>
        </ComponentExample>
      </ComponentDescription>
    </Layout>
  );
};

export default Page;
