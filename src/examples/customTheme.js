import { suomifiDesignTokens } from 'suomifi-ui-components';

const gradients = { ...suomifiDesignTokens.gradients };
gradients.highlightBase = '#09ae88';
gradients.highlightLight4 = '#e97025';
gradients.highlightDark9 = '#faaf00';

export const customTheme = { ...suomifiDesignTokens, gradients };
