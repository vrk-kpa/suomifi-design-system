import React from 'react';
import { Button, SuomifiThemeProvider } from 'suomifi-ui-components';

const customTheme = {
  gradients: {
    highlightBaseToHighlightDark1: 'linear-gradient(to top, orange, red);',
    highlightLight1ToHighlightBase: 'linear-gradient(to top, crimson, red);',
  },
  colors: {
    highlightDark1: 'darkred',
    highlightBase: 'blue',
    highlightLight1: 'green',
  },
};

export const Example = () => (
  <>
    <SuomifiThemeProvider theme={customTheme}>
      <Button>Theme</Button>
    </SuomifiThemeProvider>
  </>
);
