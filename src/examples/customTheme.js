import { defaultSuomifiTheme } from 'suomifi-ui-components';

const gradients = { ...defaultSuomifiTheme.gradients };
gradients.highlightBase = '#09ae88';
gradients.highlightLight1 = '#e97025';
gradients.highlightDark1 = '#faaf00';

export const customTheme = { ...defaultSuomifiTheme, gradients };
