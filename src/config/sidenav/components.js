import React from 'react'
import { Icon } from 'suomifi-ui-components'

export default t => ({
  title: t('components:title'),
  icon: <Icon icon='staticIllustrationPuzzle' />,
  items: [
    {
      to: '/components/',
      showAsTo: '/components/info/',
      label: t('components:info.title')
    },
    { to: '/components/button/', label: t('button:title') },
    { to: '/components/panel/', label: t('panel:title') }
  ]
})
