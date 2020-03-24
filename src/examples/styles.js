import React from 'react';
import { suomifiDesignTokens } from 'suomifi-ui-components';
import { panelShadow } from '../components/utils/shadow';

export const Example = () => (
  <div
    style={{
      margin: suomifiDesignTokens.spacing.l,
      padding: suomifiDesignTokens.spacing.m,
      background: suomifiDesignTokens.colors.highlightBase,
      boxShadow: panelShadow,
      fontSize:
        suomifiDesignTokens.values.typography.bodyText.fontSize.value +
        suomifiDesignTokens.values.typography.bodyText.fontSize.unit,
      color: suomifiDesignTokens.colors.whiteBase,
    }}
  >
    Example
  </div>
);
