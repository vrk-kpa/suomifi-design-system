import React, { ReactNode, CSSProperties } from 'react';
import { defaultTokens } from 'suomifi-ui-components';
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
    id="main"
    style={{
      margin: hasFrame
        ? `${defaultTokens.spacing.l} ${defaultTokens.spacing.m}`
        : 0,
      ...style,
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
      background: defaultTokens.colors.depthLight30,
      paddingTop: hasFrame ? defaultTokens.spacing.m : 0,
      paddingBottom: defaultTokens.spacing.xl,
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
              ? `${defaultTokens.spacing.m} ${defaultTokens.spacing.l} 0 ${
                  defaultTokens.spacing.l
                }`
              : 0,
            width: '100%',
            maxWidth: hasFrame ? 1140 : 'initial',
            display: 'flex',
            flexWrap: 'nowrap',
            background: hasFrame ? defaultTokens.colors.whiteBase : 'none',
            border: hasFrame
              ? `1px solid ${defaultTokens.colors.depthLight13}`
              : 0,
          }}
        >
          <SideNav
            sideNavData={sideNavData}
            style={{ width: '22rem', marginRight: defaultTokens.spacing.m }}
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
          margin: `0 ${defaultTokens.spacing.l}`,
          border: `1px solid ${defaultTokens.colors.depthLight13}`,
        }}
      />
      <div
        style={{
          margin: hasFrame
            ? `${defaultTokens.spacing.m} ${defaultTokens.spacing.l} 0 ${
                defaultTokens.spacing.l
              }`
            : 0,
          background: hasFrame ? defaultTokens.colors.whiteBase : 'none',
          border: hasFrame
            ? `1px solid ${defaultTokens.colors.depthLight13}`
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
          margin: `0 ${defaultTokens.spacing.m}`,
          border: `1px solid ${defaultTokens.colors.depthLight13}`,
        }}
      />
      <div
        style={{
          margin: 0,
          marginTop: hasFrame ? defaultTokens.spacing.m : 0,
          background: hasFrame ? defaultTokens.colors.whiteBase : 'none',
          border: hasFrame
            ? `1px solid ${defaultTokens.colors.depthLight13}`
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
