import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { Toggle } from 'components/ExampleComponents';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const Page: React.FC = (): React.ReactElement => {
  const [isChecked, setChecked] = useState(false);

  const getAriaLabelText = (t: Function): string =>
    t(`toggle.state.${isChecked ? 'on' : 'off'}`, {
      name: t('toggle.label'),
    });

  const handleClick = (newState: boolean): void => {
    setChecked(newState);
  };

  return (
    <Translation ns={['toggle']}>
      {(t) => (
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
              <Toggle
                aria-label={getAriaLabelText(t)}
                onClick={({ toggleState }) => handleClick(toggleState)}
                checked={isChecked}
              >
                {t('toggle.label')}
              </Toggle>
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
    </Translation>
  );
};

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
