import React, { ReactNode, CSSProperties } from 'react';
import { suomifiDesignTokens } from 'suomifi-ui-components';
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
        ? `${suomifiDesignTokens.spacing.xl} ${suomifiDesignTokens.spacing.s}`
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
}: Props): JSX.Element => (
  <div
    style={{
      background: suomifiDesignTokens.colors.depthLight3,
      paddingTop: hasFrame ? suomifiDesignTokens.spacing.s : 0,
      paddingBottom: suomifiDesignTokens.spacing.xxxl,
    }}
  >
    <Desktop>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'nowrap',
        }}
      >
        <div
          style={{
            margin: hasFrame
              ? `${suomifiDesignTokens.spacing.s} ${suomifiDesignTokens.spacing.xl} 0 ${suomifiDesignTokens.spacing.xl}`
              : 0,
            width: '100%',
            maxWidth: hasFrame ? 1140 : 'initial',
            display: 'flex',
            flexWrap: 'nowrap',
            background: hasFrame
              ? suomifiDesignTokens.colors.whiteBase
              : 'none',
            border: hasFrame
              ? `1px solid ${suomifiDesignTokens.colors.depthLight1}`
              : 0,
          }}
        >
          <SideNav
            sideNavData={sideNavData}
            style={{
              width: '22rem',
              marginRight: suomifiDesignTokens.spacing.s,
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
          margin: `0 ${suomifiDesignTokens.spacing.xl}`,
          border: `1px solid ${suomifiDesignTokens.colors.depthLight1}`,
        }}
      />
      <div
        style={{
          margin: hasFrame
            ? `${suomifiDesignTokens.spacing.s} ${suomifiDesignTokens.spacing.xl} 0 ${suomifiDesignTokens.spacing.xl}`
            : 0,
          background: hasFrame ? suomifiDesignTokens.colors.whiteBase : 'none',
          border: hasFrame
            ? `1px solid ${suomifiDesignTokens.colors.depthLight1}`
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
          margin: `0 ${suomifiDesignTokens.spacing.s}`,
          border: `1px solid ${suomifiDesignTokens.colors.depthLight1}`,
        }}
      />
      <div
        style={{
          margin: 0,
          marginTop: hasFrame ? suomifiDesignTokens.spacing.s : 0,
          background: hasFrame ? suomifiDesignTokens.colors.whiteBase : 'none',
          border: hasFrame
            ? `1px solid ${suomifiDesignTokens.colors.depthLight1}`
            : 0,
        }}
      >
        <Content hasFrame={hasFrame}>{children}</Content>
      </div>
    </Mobile>
  </div>
);

interface Props {
  sideNavData?: SideNavData;
  hasFrame?: boolean;
  children: ReactNode;
}

export default MainContent;
