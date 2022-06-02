import React from 'react';
import { StaticIcon } from 'suomifi-ui-components';
import { SideNavData } from 'components/SideNavData';
import stylesContent from '../../../locale/fi/styles.json';
import iconsContent from '../../../locale/fi/icons.json';
import typographyContent from '../../../locale/fi/typography.json';
import colorsContent from '../../../locale/fi/colors.json';

const sideNavData: SideNavData = {
  title: stylesContent.title,
  icon: <StaticIcon icon="magicWand" />,
  items: [
    {
      to: '/styles/',
      showAsTo: '/styles/info/',
      label: stylesContent['info.title'],
    },
    { to: '/styles/icons/', label: iconsContent.title },
    { to: '/styles/typography/', label: typographyContent.title },
    { to: '/styles/colors/', label: colorsContent.title },
  ],
};
export default sideNavData;
