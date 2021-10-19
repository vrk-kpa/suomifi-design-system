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
} from 'suomifi-ui-components';

import iconsContent from '../../../locale/fi/icons.json';
import staticIconsContent from '../../../locale/fi/static-icons.json';
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
  },
  {
    id: 'illustrativeIcons',
    title: iconsContent['illustrativeIcons.title'],
    icons: illustrativeIcons,
  },
  {
    id: 'doctypeIcons',
    title: iconsContent['doctypeIcons.title'],
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
      <StyledIcon icon={id as any as BaseIconKeys} />
    ) : (
      <StyledStaticIcon
        icon={id as any as IllustrativeIconKeys | DoctypeIconKeys}
      />
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

    {iconCategories.map((item) => (
      <ComponentDescription
        key={item.id}
        mainTitle={item.title}
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
                ? (icon as any).label
                : staticIconsContent['icon.label'];
            return getExampleIcon(icon, item.id, label);
          })}
        </ComponentExample>
      </ComponentDescription>
    ))}
  </Layout>
);

export default Page;
