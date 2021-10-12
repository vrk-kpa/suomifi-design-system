import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';
import { panelShadow } from '../components/utils/shadow';

export const Example = () => (
  <div
    style={{
      margin: defaultSuomifiTheme.spacing.xl,
      padding: defaultSuomifiTheme.spacing.s,
      background: defaultSuomifiTheme.colors.highlightBase,
      boxShadow: panelShadow,
      fontSize:
        defaultSuomifiTheme.values.typography.bodyText.fontSize.value +
        defaultSuomifiTheme.values.typography.bodyText.fontSize.unit,
      color: defaultSuomifiTheme.colors.whiteBase,
    }}
  >
    Example
  </div>
);
