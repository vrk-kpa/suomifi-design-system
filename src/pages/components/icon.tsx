import React from 'react';
import {
  defaultSuomifiTheme,
  Link,
  IconProps,
  StaticIconProps,
  ExternalLink,
  Icon as SuomifiIcon,
  StaticIcon as SuomifiStaticIcon,
} from 'suomifi-ui-components';

import iconContent from '../../../locale/fi/icon.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import Section from 'components/Section';
import NoteBox from 'components/NoteBox';
import ComponentExample from 'components/ComponentExample';
import { Heading, Paragraph, Text } from 'components/ResponsiveComponents';

/**
 * Wrapper to show all icons as bigger for better visiblity
 */
const Icon = (props: IconProps): JSX.Element => {
  const newProps = { ...props, width: '2em', height: '2em' };
  return <SuomifiIcon {...newProps} />;
};
Icon.displayName = 'Icon';

const StaticIcon = (props: StaticIconProps): JSX.Element => {
  const newProps = { ...props, width: '4em', height: '4em' };
  return <SuomifiStaticIcon {...newProps} />;
};
StaticIcon.displayName = 'StaticIcon';

const Page: React.FC = (): React.ReactElement => {
  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={iconContent.title} />
      <Heading variant="h1">{iconContent.title}</Heading>

      <Paragraph variant="lead">
        <Text variant="lead">{iconContent.intro}</Text>
      </Paragraph>

      <Link href="../../styles/icons">
        {iconContent['allIconsPageLink.title']}
      </Link>

      <NoteBox
        title={iconContent['note.title']}
        items={iconContent['note.items']}
      />

      {iconContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={section.paragraphs}
          links={(section as any).links}
        />
      ))}

      <ComponentDescription
        mainTitle={iconContent['basicIcons.title']}
        description={iconContent['basicIcons.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            justifyContent: 'flex-start',
            padding: 0,
            border: 'none',
          }}
        >
          <Icon
            icon="check"
            ariaLabel={iconContent['basicIcons.example.arialabel']}
          />
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={iconContent['infoIcons.title']}
        description={iconContent['infoIcons.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            justifyContent: 'flex-start',
            padding: 0,
            border: 'none',
          }}
        >
          <Icon
            icon="helpFilled"
            color={defaultSuomifiTheme.colors.highlightBase}
            style={{ margin: `0 ${defaultSuomifiTheme.spacing.xs}` }}
            ariaLabel={iconContent['infoIcons.example1.arialabel']}
          />
          <Icon
            icon="help"
            color={defaultSuomifiTheme.colors.highlightBase}
            style={{ margin: `0 ${defaultSuomifiTheme.spacing.xs}` }}
            ariaLabel={iconContent['infoIcons.example2.arialabel']}
          />
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={iconContent['additionalInfoIcons.title']}
        description={iconContent['additionalInfoIcons.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            justifyContent: 'flex-start',
            padding: 0,
            border: 'none',
          }}
        >
          <Icon
            icon="errorFilled"
            color={defaultSuomifiTheme.colors.highlightBase}
            style={{ margin: `0 ${defaultSuomifiTheme.spacing.xs}` }}
            ariaLabel={iconContent['additionalInfoIcons.example1.arialabel']}
          />
          <Icon
            icon="info"
            color={defaultSuomifiTheme.colors.highlightBase}
            style={{ margin: `0 ${defaultSuomifiTheme.spacing.xs}` }}
            ariaLabel={iconContent['additionalInfoIcons.example2.arialabel']}
          />
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={iconContent['illustrativeIcons.title']}
        description={iconContent['illustrativeIcons.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            justifyContent: 'flex-start',
            padding: 0,
            border: 'none',
          }}
        >
          <StaticIcon
            icon="collaboration"
            ariaLabel={iconContent['illustrativeIcons.example.arialabel']}
          />
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={iconContent['attachmentIcons.title']}
        description={iconContent['attachmentIcons.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            justifyContent: 'flex-start',
            padding: 0,
            border: 'none',
          }}
        >
          <StaticIcon
            icon="doc"
            ariaLabel={iconContent['attachmentIcons.example.arialabel']}
          />
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={iconContent['signLanguageIcons.title']}
        description={iconContent['signLanguageIcons.description']}
        exampleFirst
      >
        <ComponentExample
          style={{
            justifyContent: 'flex-start',
            padding: 0,
            border: 'none',
          }}
        >
          <Icon
            icon="signLanguageContent"
            color="#00B6EC"
            ariaLabel={iconContent['signLanguageIcons.example.arialabel']}
          />
        </ComponentExample>
      </ComponentDescription>
      <ExternalLink
        href={iconContent['signLanguageIconsLink.url']}
        labelNewWindow={iconContent['externalLink.label']}
        style={{ marginBottom: '30px', display: 'block' }}
      >
        {iconContent['signLanguageIconsLink.title']}
      </ExternalLink>
    </Layout>
  );
};

export default Page;
