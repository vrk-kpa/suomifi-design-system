import React, { CSSProperties } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { suomifiTheme } from 'suomifi-ui-components';
import { IconKeys, allIcons, SuomifiIcon } from 'suomifi-icons';

import Layout from 'components/layout';
import SEO from 'components/seo';
import Annotation from 'components/Annotation';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/styles';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import { ReactComponent as Slack } from 'icons/slack.svg';

interface IconItem {
  name: IconKeys;
}
type iconTypes = { [key in IconKeys]?: IconItem };

const icons: iconTypes = allIcons.reduce((obj, item: string) => {
  obj[item] = {
    name: item,
  };
  return obj;
}, {});

const iconCategories = [
  {
    id: 'baseIcons',
    icons: [
      icons.arrowDown,
      icons.arrowUp,
      icons.attachment,
      icons.authorise,
      icons.calendar,
      icons.chatHeart,
      icons.chatQuestion,
      icons.check,
      icons.checkFilled,
      icons.chevronDown,
    ],
  },
  {
    id: 'illustrativeIcons',
    icons: [
      icons.chevronLeft,
      icons.chevronRight,
      icons.chevronUp,
      icons.close,
      icons.copy,
      icons.done,
      icons.error,
      icons.errorFilled,
      icons.heart,
      icons.heartFilled,
    ],
  },
  {
    id: 'doctypeIcons',
    icons: [
      icons.help,
      icons.helpFilled,
      icons.info,
      icons.infoFilled,
      icons.internet,
      icons.linkBreadcrumb,
      icons.linkExternal,
      icons.linkList,
      icons.login,
      icons.logout,
      icons.mailSend,
      icons.map,
      icons.mapLayers,
      icons.mapLocation,
      icons.mapLocationFilled,
      icons.mapRoute,
      icons.menu,
      icons.message,
      icons.minus,
      icons.phone,
      icons.plus,
      icons.print,
      icons.radioButtonOn,
      icons.refresh,
      icons.registers,
      icons.remove,
      icons.save,
      icons.search,
      icons.settings,
      icons.swapRounded,
      icons.swapVertical,
    ],
  },
];
const StyleIcon = styled(SuomifiIcon)`
  height: 1.5em;
  width: 1.5em;
`;

const getExampleIcon = (
  id: IconKeys,
  label: string,
  style?: CSSProperties,
): JSX.Element => (
  <div
    key={id}
    style={{
      margin: `${suomifiTheme.spacing.s} ${suomifiTheme.spacing.l} ${
        suomifiTheme.spacing.l
      } 0`,
      lineHeight: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '8rem',
      height: '6rem',
      ...style,
    }}
  >
    <StyleIcon icon={id} />
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
              }}
            >
              {item.icons.map((icon, index) => {
                return getExampleIcon(icon.name, t(`${icon.name}.label`));
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
                  fill: suomifiTheme.colors.whiteBase,
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
