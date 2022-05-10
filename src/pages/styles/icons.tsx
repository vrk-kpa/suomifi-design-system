import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { baseIcons, illustrativeIcons, doctypeIcons } from 'suomifi-icons';
import {
  defaultSuomifiTheme,
  Icon,
  StaticIcon,
  BaseIconKeys,
  IllustrativeIconKeys,
  DoctypeIconKeys,
  Link,
  ExternalLink,
} from 'suomifi-ui-components';

import iconsContent from '../../../locale/fi/icons.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/styles';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const iconCategories = [
  {
    id: 'baseIcons',
    title: iconsContent['baseIcons.title'],
    icons: baseIcons,
    linkTitle: iconsContent['baseIcons.link.title'],
    linkUrl:
      'https://github.com/vrk-kpa/suomifi-icons/tree/master/src/baseIcons',
  },
  {
    id: 'illustrativeIcons',
    title: iconsContent['illustrativeIcons.title'],
    icons: illustrativeIcons,
    linkTitle: iconsContent['illustrativeIcons.link.title'],
    linkUrl:
      'https://github.com/vrk-kpa/suomifi-icons/tree/master/src/illustrativeIcons',
  },
  {
    id: 'doctypeIcons',
    title: iconsContent['doctypeIcons.title'],
    icons: doctypeIcons,
    linkTitle: iconsContent['doctypeIcons.link.title'],
    linkUrl:
      'https://github.com/vrk-kpa/suomifi-icons/tree/master/src/doctypeIcons',
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
      <StyledIcon icon={id as BaseIconKeys} />
    ) : (
      <StyledStaticIcon icon={id as IllustrativeIconKeys | DoctypeIconKeys} />
    )}
    <div>{label}</div>
  </div>
);

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={iconsContent.title} />
    <Heading variant="h1">{iconsContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{iconsContent.intro}</Text>
    </Paragraph>
    <Link href="../../components/icon/">
      {iconsContent['iconPageLink.title']}
    </Link>

    {iconCategories.map((item) => (
      <ComponentDescription
        key={item.id}
        mainTitle={item.title}
        description=""
        exampleFirst={false}
        noCode
      >
        <ExternalLink
          labelNewWindow={iconsContent['link.labelNewWindow']}
          href={item.linkUrl}
        >
          {item.linkTitle}
        </ExternalLink>
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
            return getExampleIcon(icon, item.id, icon);
          })}
        </ComponentExample>
      </ComponentDescription>
    ))}
  </Layout>
);

export default Page;
