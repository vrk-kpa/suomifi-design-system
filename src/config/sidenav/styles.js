import React from 'react';
import { StaticIcon } from 'suomifi-ui-components';

export default (t) => ({
  title: t('styles:title'),
  icon: <StaticIcon icon="magicWand" />,
  items: [
    {
      to: '/styles/',
      showAsTo: '/styles/info/',
      label: t('styles:info.title'),
    },
    { to: '/styles/icons/', label: t('icons:title') },
    { to: '/styles/typography/', label: t('typography:title') },
    { to: '/styles/colors/', label: t('colors:title') },
  ],
});
