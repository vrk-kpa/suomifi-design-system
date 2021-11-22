import React from 'react';
import { StaticIcon } from 'suomifi-ui-components';

import infoContent from '../../../locale/fi/info.json';
import accessibilityContent from '../../../locale/fi/accessibility.json';
import designersContent from '../../../locale/fi/designers.json';
import developersContent from '../../../locale/fi/developers.json';

export default {
  title: infoContent.title,
  icon: <StaticIcon icon="book" />,
  items: [
    {
      to: '/info/',
      showAsTo: '/info/general/',
      label: infoContent['info.title'],
    },
    { to: '/info/accessibility/', label: accessibilityContent.title },
    { to: '/info/designers/', label: designersContent.title },
    { to: '/info/developers/', label: developersContent.title },
  ],
};
