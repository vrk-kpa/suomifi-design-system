import React from 'react';
import { default as styled } from 'styled-components';
import * as allIcons from 'suomifi-icons';
import {
  baseIcons,
  illustrativeIcons,
  doctypeIcons,
  logoIcons,
} from 'suomifi-icons';

import { suomifiDesignTokens } from 'suomifi-design-tokens';

const baseIconKeys = baseIcons as string[];
const illustrativeIconKeys = illustrativeIcons as string[];
const doctypeIconKeys = doctypeIcons as string[];
const logoIconKeys = logoIcons as string[];

const IconWrapper = styled.figure`
  display: inline-block;
  width: 160px;
  margin: 0px;
  padding: 5px;
  text-align: center;
  figcaption {
    margin-top: 0;
    margin-bottom: ${suomifiDesignTokens.spacing.m};
    font-size: ${suomifiDesignTokens.typography.bodyTextSmall};
  }
`;

const iconProps = (size: number) => ({
  height: `${size}px`,
  width: `${size}px`,
});

const iconStyles = (size: number) => ({
  margin: `${suomifiDesignTokens.spacing.xs} 0 0 0`,
  color: `${suomifiDesignTokens.colors.depthDark1}`,
  width: `${size}px`,
  height: `${size}px`,
});

const getStyledIcon = (icon: string, size: number) => {
  const iconName = `Icon${icon}`;
  const Icon = allIcons[iconName as keyof typeof allIcons];
  return styled(() => <Icon {...iconProps(size)} />)({
    ...iconStyles(size),
  });
};

const getIconsArray = (keys: string[], size: number) =>
  keys.map((icon) => {
    const StyledIcon = getStyledIcon(icon, size);
    const iconName = `Icon${icon}`;
    return (
      <IconWrapper key={iconName}>
        <StyledIcon />
        <figcaption>{iconName.slice(4)}</figcaption>
      </IconWrapper>
    );
  });

const baseIconsArray = getIconsArray(baseIconKeys, 27);

const illustrativeIconsArray = getIconsArray(illustrativeIconKeys, 45);

const doctypeIconsArray = getIconsArray(doctypeIconKeys, 32);

const logoIconKeysArray = logoIconKeys.map((icon) => {
  const StyledIcon = getStyledIcon(icon, 55);
  const iconName = `Icon${icon}`;
  const isInverted = icon.includes('Invert');
  const invertStyle = isInverted
    ? {
        background: `${suomifiDesignTokens.colors.brandBase}`,
        color: `${suomifiDesignTokens.colors.whiteBase}`,
        padding: '10px',
      }
    : {};

  return (
    <IconWrapper key={iconName} style={invertStyle}>
      <StyledIcon />
      <figcaption>{iconName.slice(4)}</figcaption>
    </IconWrapper>
  );
});

const BaseIcons = () => <div>{baseIconsArray}</div>;

const IllustrativeIcons = () => <div>{illustrativeIconsArray}</div>;

const DoctypeIcons = () => <div>{doctypeIconsArray}</div>;

const LogoIcons = () => <div>{logoIconKeysArray}</div>;

export { BaseIcons, IllustrativeIcons, DoctypeIcons, LogoIcons };
