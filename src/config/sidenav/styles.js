import React from 'react';
import { Icon } from 'suomifi-ui-components';

export default t => ({
  title: t('styles:title'),
  icon: <Icon icon="staticIllustrationWand" />,
  items: [
    {
      to: '/styles/',
      showAsTo: '/styles/info/',
      label: t('styles:info.title'),
    },
    { to: '/styles/colors/', label: t('colors:title') },
    { to: '/styles/typography/', label: t('typography:title') },
  ],
});
