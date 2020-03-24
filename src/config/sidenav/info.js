import React from 'react';
import { StaticIcon } from 'suomifi-ui-components';

export default t => ({
  title: t('info:title'),
  icon: <StaticIcon icon="book" />,
  items: [
    { to: '/info/', showAsTo: '/info/general/', label: t('info:info.title') },
    { to: '/info/accessibility/', label: t('accessibility:title') },
    { to: '/info/designers/', label: t('designers:title') },
    { to: '/info/developers/', label: t('developers:title') },
  ],
});
