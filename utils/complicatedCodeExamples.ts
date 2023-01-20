export const themeExampleJSX = `
import React from 'react';
import { 
  Button, 
  SuomifiThemeProvider 
} from 'suomifi-ui-components';

const customTheme = {
  gradients: {
    highlightBaseToHighlightDark1: 
      'linear-gradient(to top, orange, red);',
    highlightLight1ToHighlightBase: 
      'linear-gradient(to top, crimson, red);',
  },
  colors: {
    highlightDark1: 'darkred',
    highlightBase: 'blue',
    highlightLight1: 'green',
  }
};

export const Example = () => (
  <>
    <SuomifiThemeProvider theme={customTheme}>
      <Button>Theme</Button>
    </SuomifiThemeProvider>
  </>
);
`;

export const styleExampleFromTokens = `
import React from 'react';
import { suomifiDesignTokens } from 'suomifi-design-tokens';

export const Example = () => (
  <div
    style={{
      margin: suomifiDesignTokens.spacing.xl,
      padding: suomifiDesignTokens.spacing.s,
      background: suomifiDesignTokens.colors.highlightBase,
      fontSize:
        suomifiDesignTokens.values.typography.bodyText.fontSize
          .value +
        suomifiDesignTokens.values.typography.bodyText.fontSize.unit,
      color: suomifiDesignTokens.colors.whiteBase,
    }}
  >
    Example
  </div>
);
`;

export const styleExampleFromUIComps = `
import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

export const Example = () => (
  <div
    style={{
      margin: defaultSuomifiTheme.spacing.xl,
      padding: defaultSuomifiTheme.spacing.s,
      background: defaultSuomifiTheme.colors.highlightBase,
      boxShadow: defaultSuomifiTheme.shadows.panelShadow,
      fontSize:
        defaultSuomifiTheme.values.typography.bodyText.fontSize.value +
        defaultSuomifiTheme.values.typography.bodyText.fontSize.unit,
      color: defaultSuomifiTheme.colors.whiteBase,
    }}
  >
    Example
  </div>
);
`;

export const basicExample = `
import React from 'react';
import { Button } from 'suomifi-ui-components';

export const Example = () => <Button>Example</Button>;
`;

export const advancedExample = `
import React from 'react';
import { Button } from 'suomifi-ui-components';
import styled from 'styled-components';

/**
.fi-button.button--custom {
  background: #09ae88;
}
.fi-button.button--custom:hover {
  background: #e97025;
}
.fi-button.button--custom:active {
  background: #faaf00;
}
 */
import './customButton.css';

const CustomButton = styled(Button)({
  background: '#09ae88',
  '&:hover': { background: '#e97025' },
  '&:active': { background: '#faaf00' },
});

export const Example = () => (
  <>
    <CustomButton>Styled</CustomButton>
    <Button className="button--custom">Classname</Button>
  </>
);
`;

export const buttonsIconExample = `
<Button
  icon="login"
  onClick={...}
>
  Ensisijainen ikoni vasen
</Button>
<Button
  iconRight="login"
  onClick={...}
>
  Ensisijainen ikoni oikea
</Button>
<Button
  icon="login"
  onClick={...}
  variant="link"
>
  Linkki ikoni vasen
</Button>
<Button
  iconRight="login"
  onClick={...}
  variant="link"
>
  Linkki ikoni oikea
</Button>
<Button
  icon="login"
  onClick={...}
  variant="inverted"
>
  Käänteinen ikoni vasen
</Button>
<Button
  iconRight="login"
  onClick={...}
  variant="inverted"
>
  Käänteinen ikoni oikea
</Button>
<Button
  icon="login"
  onClick={...}
  variant="secondary"
>
  Toissijainen  ikoni vasen
</Button>
<Button
  iconRight="login"
  onClick={...}
  variant="secondary"
>
  Toissijainen  ikoni oikea
</Button>
<Button
  icon="login"
  onClick={...}
  variant="secondaryNoBorder"
>
  Reunukseton painike ikoni vasen
</Button>
<Button
  iconRight="login"
  onClick={...}
  variant="secondaryNoBorder"
>
  Reunukseton painike ikoni oikea
</Button>
`;
