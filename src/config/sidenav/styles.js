import React from 'react'
import { Icon } from 'suomifi-ui-components'

export default t => ({
  title: t('styles:title'),
  icon: <Icon icon='staticIllustrationWand' />,
  items: [{ to: '/styles/colors/', label: t('colors:title') }]
})
