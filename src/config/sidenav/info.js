import React from 'react';
import { Icon } from 'suomifi-ui-components';

export default t => ({
  title: t('info:title'),
  icon: <Icon icon="staticIllustrationBook" />,
  items: [
    { to: '/info/', showAsTo: '/info/general/', label: t('info:info.title') },
    { to: '/info/accessibility/', label: t('accessibility:title') },
    { to: '/info/designers/', label: t('designers:title') },
  ],
});
