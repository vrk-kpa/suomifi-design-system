import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

export const Example = () => (
  <div
    style={{
      width: '10rem',
      height: '3rem',
      background: suomifiTheme.colors.highlightBase,
      boxShadow: suomifiTheme.shadows.panelShadow
    }}
  />
)
