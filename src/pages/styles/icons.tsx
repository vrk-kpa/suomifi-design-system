import React, { CSSProperties } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { baseIcons, illustrativeIcons, doctypeIcons } from 'suomifi-icons';
import {
  defaultSuomifiTheme,
  Icon,
  StaticIcon,
  BaseIconKeys,
  IllustrativeIconKeys,
  DoctypeIconKeys,
} from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/styles';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const iconCategories = [
  {
    id: 'baseIcons',
    icons: baseIcons,
  },
  {
    id: 'illustrativeIcons',
    icons: illustrativeIcons,
  },
  {
    id: 'doctypeIcons',
    icons: doctypeIcons,
  },
];

const StyledIcon = styled(Icon)`
  height: 1.5em;
  width: 1.5em;
`;

const StyledStaticIcon = styled(StaticIcon)`
  height: 256px;
  width: 256px;
`;

const getExampleIcon = (
  id: string,
  itemId: string,
  label: string,
  style?: CSSProperties,
): JSX.Element => (
  <div
    key={id}
    style={{
      margin: `${defaultSuomifiTheme.spacing.xs} ${defaultSuomifiTheme.spacing.xxxl} ${defaultSuomifiTheme.spacing.xl} 0`,
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
    {itemId === 'baseIcons' ? (
      <StyledIcon icon={(id as any) as BaseIconKeys} />
    ) : (
      <StyledStaticIcon
        icon={(id as any) as IllustrativeIconKeys | DoctypeIconKeys}
      />
    )}
    <div>{label}</div>
  </div>
);

const Page = (): JSX.Element => (
  <Translation ns={['icons', 'static-icons']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading variant="h1">{t('title')}</Heading>

        <Paragraph variant="lead">
          <Text variant="lead">{t('intro')}</Text>
        </Paragraph>

        {iconCategories.map((item) => (
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
                paddingLeft: '60px',
              }}
            >
              {item.icons.map((icon) => {
                const label =
                  item.id === 'baseIcons'
                    ? t(`${icon}.label`)
                    : t(`static-icons:${icon}.label`);
                return getExampleIcon(icon, item.id, label);
              })}
            </ComponentExample>
          </ComponentDescription>
        ))}
      </Layout>
    )}
  </Translation>
);

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
