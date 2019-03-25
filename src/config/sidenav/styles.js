import React from 'react'
import { Icon } from '../../components/Icon'

export default t => ({
  title: t('styles:title'),
  icon: <Icon.favorites />,
  items: [{ to: '/styles/colors/', label: t('colors:title') }]
})
