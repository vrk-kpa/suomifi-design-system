import { suomifiDesignTokens, ValueUnit } from 'suomifi-design-tokens';
import { styled } from 'styled-components';
import { Text } from 'suomifi-ui-components';

interface SpacingShowcaseProps {
  values: 'normal' | 'inset';
}

/**
 * Return CSS compatible string
 * @param cssValue number, string or {value: number, unit: string | null}
 */
export const cssValueToString = (cssValue: number | string | ValueUnit) => {
  if (!!cssValue && typeof cssValue === 'object' && 'value' in cssValue) {
    const { value, unit } = cssValue;
    const stringValue = typeof value === 'number' ? value.toString(10) : value;
    return !!unit ? `${stringValue}${unit}` : stringValue;
  }
  return typeof cssValue === 'number' ? cssValue.toString(10) : cssValue;
};

const Container = styled(({ ...passProps }) => <div {...passProps} />)(
  ({ size }) => `
  min-height: calc(${size} + 2em);
  max-width: 420px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${cssValueToString(suomifiDesignTokens.spacing.xl)};

  * {
    cursor: inherit;
  }

  > div:not(:first-of-type) {
    margin-left: ${cssValueToString(suomifiDesignTokens.spacing.s)};
  }
`,
);

const Square = styled((props: any) => (
  <div {...props}>
    <div className="box" />
  </div>
))(
  ({ size = '0xp' }) => `
    flex: none;
    display: flex;
    align-items: flex-end;
    width: 100px;

    > .box {
      height: ${size};
      width: ${size};
      border: 1px dashed ${suomifiDesignTokens.colors.blackBase};
      overflow: hidden;
    }
  `,
);

const Bar = styled((props: any) => (
  <div {...props}>
    <div className="row" />
    <div className="col" />
  </div>
))(
  ({ size = '0xp' }) => `
    position: relative;
    flex: 1;
    align-self: stretch;
    display: flex;
    align-items: flex-end;

    > .row {
      height: ${size};
      width: 100%;
      background-color: ${suomifiDesignTokens.colors.depthDark1};
    }
    > .col {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 100%;
      width: ${size};
      background-color: ${suomifiDesignTokens.colors.depthDark1};
    }
  `,
);

interface NameProps {
  name: string;
  value: string;
}

const Name = styled(({ name, value, ...passProps }: NameProps) => (
  <div {...passProps}>
    <Text variant="lead">{name}</Text>
    <Text>{value}</Text>
  </div>
))(
  () => `
  flex: 1;
  display: flex;
  flex-direction: column;
`,
);

const SpacingShowcase: React.FunctionComponent<SpacingShowcaseProps> = ({
  values,
}) => {
  return (
    <>
      {Object.entries(suomifiDesignTokens.spacing).map(([key, value]) => {
        const spacingValue = cssValueToString(value);
        if (values === 'inset' && !key.startsWith('inset')) return;
        if (values !== 'inset' && key.startsWith('inset')) return;
        return (
          <Container size={spacingValue} key={key}>
            <Name name={key} value={spacingValue} />
            <Square size={spacingValue} />
            <Bar size={spacingValue} />
          </Container>
        );
      })}
    </>
  );
};

export default SpacingShowcase;
