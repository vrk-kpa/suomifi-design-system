import React from 'react';
import { Icon } from 'suomifi-ui-components';

export default t => ({
  title: t('components:title'),
  icon: <Icon icon="staticIllustrationPuzzle" />,
  items: [
    {
      to: '/components/',
      showAsTo: '/components/info/',
      label: t('components:info.title'),
    },
    { to: '/components/button/', label: t('button:title') },
    { to: '/components/panel/', label: t('panel:title') },
    { to: '/components/breadcrumb/', label: t('breadcrumb:title') },
    { to: '/components/toggle/', label: t('toggle:title') },
    { to: '/components/dropdown/', label: t('dropdown:title') },
    { to: '/components/link/', label: t('link:title') },
    { to: '/components/heading/', label: t('heading:title') },
    { to: '/components/text/', label: t('text:title') },
    { to: '/components/textinput/', label: t('textinput:title') },
  ],
});
