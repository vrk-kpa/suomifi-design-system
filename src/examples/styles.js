import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

export const Example = () => (
  <div
    style={{
      margin: suomifiTheme.spacing.l,
      padding: suomifiTheme.spacing.m,
      borderRadius: suomifiTheme.radius.basic,
      background: suomifiTheme.colors.highlightBase,
      boxShadow: suomifiTheme.shadows.panelShadow,
      fontSize: suomifiTheme.typography.fontSize.body,
      color: suomifiTheme.colors.whiteBase
    }}>
    Example
  </div>
)
