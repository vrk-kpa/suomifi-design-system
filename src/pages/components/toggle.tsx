import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
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

class TogglePage extends Component<{}, State> {
  public constructor() {
    super({});

    this.state = {
      isChecked: false,
    };
  }

  private getAriaLabelText = (t: Function): string =>
    t(`toggle.state.${this.state.isChecked ? 'on' : 'off'}`, {
      name: t('toggle.label'),
    });

  private handleClick = (newState: boolean): void => {
    this.setState({
      isChecked: newState,
    });
  };

  public render = (): JSX.Element => (
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
              <Toggle
                aria-label={this.getAriaLabelText(t)}
                onClick={({ toggleState }) => this.handleClick(toggleState)}
                checked={this.state.isChecked}
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
    </NamespacesConsumer>
  );
}

interface State {
  isChecked: boolean;
}

export default withI18next()(TogglePage);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
