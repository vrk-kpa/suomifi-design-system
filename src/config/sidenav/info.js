import React from 'react';
import { StaticIcon } from 'suomifi-ui-components';

import * as infoContent from '../../../locale/fi/info.json';
import * as accessibilityContent from '../../../locale/fi/accessibility.json';
import * as designersContent from '../../../locale/fi/designers.json';
import * as developersContent from '../../../locale/fi/developers.json';

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
