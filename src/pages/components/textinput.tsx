import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { suomifiDesignTokens } from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import Section, { Props as SectionProps } from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { TextInput } from 'components/ExampleComponents';

const Page: React.FC = (): React.ReactElement => {
  const [errorState, setErrorState] = React.useState(true);
  const statusText = (t: Function): string => {
    return errorState ? t('exampleError.statusText') : undefined;
  };
  const status = errorState ? 'error' : 'default';

  return (
    <Translation ns={['textinput']}>
      {(t) => (
        <Layout sideNavData={sideNavData(t)}>
          <SEO title={t('title')} />
          <Heading variant="h1">{t('title')}</Heading>

          <Paragraph.lead>
            <Text.lead>{t('intro')}</Text.lead>
          </Paragraph.lead>

          <ComponentDescription>
            <ComponentExample
              style={{ marginBottom: suomifiDesignTokens.spacing.s }}
            >
              <TextInput labelText={t('exampleRegular.label')} />
            </ComponentExample>
          </ComponentDescription>

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
            mainTitle={t('exampleSuccess.title')}
            description={t('exampleSuccess.description')}
            exampleFirst
            filterProps={[]}
          >
            <ComponentExample>
              <TextInput
                labelText={t('exampleSuccess.label')}
                status="success"
              />
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t('exampleError.title')}
            description={t('exampleError.description')}
            exampleFirst
            filterProps={[]}
          >
            <ComponentExample>
              <TextInput
                labelText={t('exampleError.label')}
                statusText={statusText(t)}
                status={status}
                debounce={300}
                onChange={(value) => {
                  setErrorState(!value);
                }}
              />
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t('exampleDisabled.title')}
            description={t('exampleDisabled.description')}
            exampleFirst
            filterProps={[]}
          >
            <ComponentExample>
              <TextInput labelText={t('exampleDisabled.label')} disabled />
            </ComponentExample>
          </ComponentDescription>
          <ComponentDescription
            mainTitle={t('exampleOptional.title')}
            description={t('exampleOptional.description')}
            exampleFirst
            filterProps={[]}
          >
            <ComponentExample>
              <TextInput
                labelText={t('exampleOptional.label')}
                icon="mapLocation"
                optionalText={t('exampleOptional.optionalText')}
              />
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
