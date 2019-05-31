import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

export const Example = () => (
  <div
    style={{
      padding: '2rem',
      fontSize: suomifiTheme.typography.fontSize.body,
      color: suomifiTheme.colors.whiteBase,
      background: suomifiTheme.colors.highlightBase,
      boxShadow: suomifiTheme.shadows.panelShadow
    }}>
    Example
  </div>
)
