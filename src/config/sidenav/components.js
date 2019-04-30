import React from 'react'
import { Icon } from '../../components/Icon'

export default t => ({
  title: t('components:title'),
  icon: <Icon.solution />,
  items: [
    { to: '/components/button/', label: t('button:title') },
    { to: '/components/panel/', label: t('panel:title') }
  ]
})
