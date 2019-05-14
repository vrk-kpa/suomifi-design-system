import React from 'react'
import { Icon } from 'suomifi-ui-components'

export default t => ({
  title: t('instructions:title'),
  icon: <Icon icon='staticIllustrationBook' />,
  items: [
    {
      to: '/instructions/get-started/',
      label: t('instructions.get-started:title')
    },
    {
      to: '/instructions/suomifi-theme/',
      label: t('instructions.suomifi-theme:title'),
      children: [
        {
          to: '/instructions/suomifi-theme/intro/',
          label: t('instructions.suomifi-theme.intro:title')
        },
        {
          to: '/instructions/suomifi-theme/accessibility/',
          label: t('instructions.suomifi-theme.accessibility:title')
        }
      ]
    },
    {
      to: '/instructions/guidelines/',
      label: t('instructions.guidelines:title')
    }
  ]
})
