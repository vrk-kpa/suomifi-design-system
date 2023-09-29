import { CSSProperties } from 'react';
import { Block } from 'suomifi-ui-components';
import styles from './ColorShowcase.module.scss';
import { hslToColorString } from 'polished';
import { ColorItem } from '../../interfaces/interfaces';

interface ColorShowcaseProps {
  colors: ColorItem[] | undefined[];
}

/**
 * Convert HSLA or HSL to hex, does not take account the alpha value
 * @param hsla
 */
export const hslaToHex = (hsla: string): string => {
  const values = hsla.replace(/(hsla\(|hsl\(|\)|\%|\s)/g, '').split(',');
  const hue = parseInt(values[0], 10);
  const saturationPercentage = parseInt(values[1], 10);
  const lightnessPercentage = parseInt(values[2], 10);
  const saturation = saturationPercentage / 100;
  const lightness = lightnessPercentage / 100;
  if (
    !Number.isInteger(hue) ||
    !Number.isInteger(saturationPercentage) ||
    !Number.isInteger(lightnessPercentage)
  ) {
    return '';
  }
  return hslToColorString({
    hue,
    saturation,
    lightness,
  });
};

const getExampleColor = (
  id: string,
  name: string,
  value: string,
  style?: CSSProperties,
): JSX.Element => (
  <div key={id} className={styles.colorContainer}>
    <div className={styles.colorBox} style={{ background: value, ...style }} />
    <div className={styles.colorText}>{value}</div>
    <div className={styles.colorText}>
      {name !== 'brandBase' ? hslaToHex(value) : '#003479'}
    </div>
    <div className={styles.colorText}>{name}</div>
  </div>
);

const ColorShowcase: React.FunctionComponent<ColorShowcaseProps> = ({
  colors,
}) => {
  return (
    <Block variant="div" className={styles.colorShowcaseContainer}>
      {colors.map((color, index) =>
        color
          ? getExampleColor(`textColors.${index}`, color.name, color.value, {
              border: color.border,
            })
          : null,
      )}
    </Block>
  );
};

export default ColorShowcase;
