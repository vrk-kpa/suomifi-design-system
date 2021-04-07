import { suomifiDesignTokens } from 'suomifi-ui-components';

export const focusOutline = `
  outline: 0;
  position: relative;
    &:after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
      background-color: transparent;
      box-sizing: border-box;
      box-shadow: ${suomifiDesignTokens.colors.accentSecondary} 0px 0px 0px 0px;
      z-index: 9999;
      border-radius: 4px;
      border-width: 3px;
      border-style: solid;
      border-color: ${suomifiDesignTokens.colors.accentSecondary} ;
      border-image: initial;
    }
  `;
