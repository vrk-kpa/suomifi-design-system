import { suomifiDesignTokens } from 'suomifi-ui-components';

export const focusOutline = (): string => {
  return `
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
      box-shadow: ${suomifiDesignTokens.colors.accentBase} 0px 0px 10px 0px;
      z-index: 9999;
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      border-color: ${suomifiDesignTokens.colors.accentBase} ;
      border-image: initial;
    }
  `;
};
