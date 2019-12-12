import React, { CSSProperties } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { suomifiDesignTokens, Icon } from 'suomifi-ui-components';
import {
  allIcons,
  IconKeys,
  allStaticIcons,
  StaticIconKeys,
} from 'suomifi-icons';

import Layout from 'components/layout';
import SEO from 'components/seo';
import Annotation from 'components/Annotation';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/styles';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import { ReactComponent as Slack } from 'icons/slack.svg';

const iconCategories = [
  {
    id: 'baseIcons',
    icons: allIcons,
  },
  {
    id: 'illustrativeIcons',
    icons: allStaticIcons.filter(icon => icon !== 'toggle'),
  },
];
const StyleIcon = styled(Icon)`
  height: 1.5em;
  width: 1.5em;
`;

const getExampleIcon = (
  id: string,
  label: string,
  style?: CSSProperties,
): JSX.Element => (
  <div
    key={id}
    style={{
      margin: `${suomifiDesignTokens.spacing.s} ${
        suomifiDesignTokens.spacing.xl
      } ${suomifiDesignTokens.spacing.l} 0`,
      lineHeight: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '6rem',
      height: '6rem',
      ...style,
    }}
  >
    <StyleIcon icon={(id as any) as IconKeys | StaticIconKeys} />
    <div>{label}</div>
  </div>
);

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['icons']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        {iconCategories.map(item => (
          <ComponentDescription
            key={item.id}
            mainTitle={t(`${item.id}.title`)}
            description=""
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
              {item.icons.map(icon => {
                return item.id === 'baseIcons'
                  ? getExampleIcon(icon, t(`${icon}.label`))
                  : getExampleIcon(icon, t(`${icon}.label`), {
                      width: '256px',
                    });
              })}
            </ComponentExample>
          </ComponentDescription>
        ))}
        <Annotation
          title={t('note.title')}
          description={t('note.description')}
          link={{
            icon: (
              <Slack
                style={{
                  fill: suomifiDesignTokens.colors.whiteBase,
                  fontSize: '16px',
                }}
              />
            ),
            text: t('note.link.text'),
            url: t('note.link.url'),
          }}
        />
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
