import React from 'react';
import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { suomifiTheme } from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { Toggle } from 'components/ExampleComponents';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

let checked = false;

const getAriaLabelText = (
  state: boolean,
  label: string,
  t: Function,
): string => {
  return t(`toggle.state.${state ? 'on' : 'off'}`, {
    name: label,
  });
};

const handleClick = (id: string, label: string, t: Function): void => {
  checked = !checked;
  document
    .getElementById(id)
    .setAttribute('aria-label', getAriaLabelText(checked, label, t));
};

const getExampleComp = (
  Comp: Function,
  id: string,
  label: string,
  props: object,
  t: Function,
): JSX.Element => {
  return (
    <Comp
      key={id}
      id={id}
      aria-label={getAriaLabelText(checked, label, t)}
      style={{ margin: suomifiTheme.spacing.s }}
      {...props}
      onClick={() => handleClick(id, label, t)}
    >
      {label}
    </Comp>
  );
};

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['toggle']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        <ComponentDescription
          mainTitle={t('default.title')}
          description={t('default.description')}
        >
          <ComponentExample>
            {getExampleComp(
              Toggle,
              'toggle',
              t('toggle.label'),
              { checked: checked },
              t,
            )}
          </ComponentExample>
        </ComponentDescription>
        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t('sections').map((section, index) => (
          <Section
            key={index}
            mainTitle={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
          />
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
