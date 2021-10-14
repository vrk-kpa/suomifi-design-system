import React from 'react';
import { StaticIcon } from 'suomifi-ui-components';
import * as stylesContent from '../../../locale/fi/styles.json';
import * as iconsContent from '../../../locale/fi/icons.json';
import * as typographyContent from '../../../locale/fi/typography.json';
import * as colorsContent from '../../../locale/fi/colors.json';

export default {
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
