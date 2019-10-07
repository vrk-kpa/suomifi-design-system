import React from 'react';
import { defaultTokens } from 'suomifi-ui-components';

export const Example = () => (
  <div
    style={{
      margin: defaultTokens.spacing.l,
      padding: defaultTokens.spacing.m,
      borderRadius: defaultTokens.radius.basic,
      background: defaultTokens.colors.highlightBase,
      boxShadow: defaultTokens.shadows.panelShadow,
      fontSize: defaultTokens.typography.bodyText.fontSize,
      color: defaultTokens.colors.whiteBase,
    }}
  >
    Example
  </div>
);
