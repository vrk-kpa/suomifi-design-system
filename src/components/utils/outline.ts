import { defaultSuomifiTheme } from 'suomifi-ui-components';

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
      z-index: 9999;
      border-radius: 4px;
      border-width: 3px;
      border-style: solid;
      border-color: ${defaultSuomifiTheme.colors.accentSecondary} ;
      border-image: initial;
    }
  `;
