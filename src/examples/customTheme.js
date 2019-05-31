import { suomifiTheme } from 'suomifi-ui-components'

const gradients = { ...suomifiTheme.gradients }
gradients.highlightBase = '#09ae88'
gradients.highlightLight4 = '#e97025'
gradients.highlightDark9 = '#faaf00'

export const customTheme = { ...suomifiTheme, gradients }
