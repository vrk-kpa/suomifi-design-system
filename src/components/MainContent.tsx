import React, {
  ReactNode,
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';
import { Location } from '@reach/router';

import SideNavComp from 'components/SideNav';
import { SideNavData } from 'components/SideNavData';
import { Desktop, Mobile, Tablet } from 'components/Responsive';

const SideNav = ({
  sideNavData,
  style,
}: {
  sideNavData: SideNavData;
  style?: CSSProperties;
}): JSX.Element => {
  return sideNavData ? (
    <Location>
      {({ location }) => (
        <div id="sidenav" style={style}>
          <SideNavComp location={location} sideNavData={sideNavData} />
        </div>
      )}
    </Location>
  ) : null;
};

const Content = ({
  hasFrame = true,
  children,
  style,
}: {
  hasFrame?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}): JSX.Element => (
  <main
    tabIndex={-1}
    id="main"
    style={{
      margin: hasFrame
        ? `${defaultSuomifiTheme.spacing.xl} ${defaultSuomifiTheme.spacing.s}`
        : 0,
      ...style,
      outline: 'none',
    }}
  >
    {children}
  </main>
);

const MainContent = ({
  sideNavData,
  hasFrame = true,
  children,
  style,
  ...passProps
}: Props): JSX.Element => (
  <div
    style={{
      background: defaultSuomifiTheme.colors.depthLight3,
      paddingTop: hasFrame ? defaultSuomifiTheme.spacing.s : 0,
      paddingBottom: defaultSuomifiTheme.spacing.xxxl,
      ...style,
    }}
    {...passProps}
  >
    <Desktop>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'nowrap',
          width: '100%',
        }}
      >
        <div
          style={{
            margin: hasFrame
              ? `${defaultSuomifiTheme.spacing.s} ${defaultSuomifiTheme.spacing.xl} 0 ${defaultSuomifiTheme.spacing.xl}`
              : 0,
            width: '100%',
            maxWidth: hasFrame ? 1140 : 'initial',
            display: 'flex',
            flexWrap: 'nowrap',
            background: hasFrame
              ? defaultSuomifiTheme.colors.whiteBase
              : 'none',
            border: hasFrame
              ? `1px solid ${defaultSuomifiTheme.colors.depthLight1}`
              : 0,
          }}
        >
          <SideNav
            sideNavData={sideNavData}
            style={{
              width: '22rem',
              marginRight: defaultSuomifiTheme.spacing.s,
            }}
          />
          <Content hasFrame={hasFrame} style={{ flex: 1 }}>
            {children}
          </Content>
        </div>
      </div>
    </Desktop>
    <Tablet>
      <SideNav
        sideNavData={sideNavData}
        style={{
          margin: `0 ${defaultSuomifiTheme.spacing.xl}`,
          border: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
        }}
      />
      <div
        style={{
          margin: hasFrame
            ? `${defaultSuomifiTheme.spacing.s} ${defaultSuomifiTheme.spacing.xl} 0 ${defaultSuomifiTheme.spacing.xl}`
            : 0,
          background: hasFrame ? defaultSuomifiTheme.colors.whiteBase : 'none',
          border: hasFrame
            ? `1px solid ${defaultSuomifiTheme.colors.depthLight1}`
            : 0,
        }}
      >
        <Content hasFrame={hasFrame}>{children}</Content>
      </div>
    </Tablet>
    <Mobile>
      <SideNav
        sideNavData={sideNavData}
        style={{
          margin: `0 ${defaultSuomifiTheme.spacing.s}`,
          border: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
        }}
      />
      <div
        style={{
          margin: 0,
          marginTop: hasFrame ? defaultSuomifiTheme.spacing.s : 0,
          background: hasFrame ? defaultSuomifiTheme.colors.whiteBase : 'none',
          border: hasFrame
            ? `1px solid ${defaultSuomifiTheme.colors.depthLight1}`
            : 0,
        }}
      >
        <Content hasFrame={hasFrame}>{children}</Content>
      </div>
    </Mobile>
  </div>
);

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sideNavData?: SideNavData;
  hasFrame?: boolean;
  children: ReactNode;
}

export default MainContent;
