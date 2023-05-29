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
  }
`;

const iconProps = {
  height: '45px',
  width: '45px',
};

const iconStyles = {
  margin: `${suomifiDesignTokens.spacing.xs} 0 0 0`,
  color: `${suomifiDesignTokens.colors.depthDark1}`,
  width: '45px',
  height: '45px',
};

const getStyledIcon = (icon: string) => {
  const iconName = `Icon${icon}`;
  const Icon = allIcons[iconName as keyof typeof allIcons];
  return styled(() => <Icon {...iconProps} />)({
    ...iconStyles,
  });
};

const getIconsArray = (keys: string[]) =>
  keys.map((icon) => {
    const StyledIcon = getStyledIcon(icon);
    const iconName = `Icon${icon}`;
    return (
      <IconWrapper key={iconName}>
        <StyledIcon />
        <figcaption>{iconName.slice(4)}</figcaption>
      </IconWrapper>
    );
  });

const baseIconsArray = getIconsArray(baseIconKeys);

const illustrativeIconsArray = getIconsArray(illustrativeIconKeys);

const doctypeIconsArray = getIconsArray(doctypeIconKeys);

const logoIconKeysArray = logoIconKeys.map((icon) => {
  const StyledIcon = getStyledIcon(icon);
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
