import React, { ReactNode, CSSProperties } from 'react'
import { suomifiTheme } from 'suomifi-ui-components'
import { Location } from '@reach/router'

import SideNavComp from 'components/SideNav'
import { SideNavData } from 'components/SideNavData'
import { Desktop, Mobile, Tablet } from 'components/Responsive'

const SideNav = ({
  sideNavData,
  style
}: {
  sideNavData: SideNavData
  style?: CSSProperties
}): JSX.Element => {
  return sideNavData ? (
    <Location>
      {({ location }) => (
        <div id='sidenav' style={style}>
          <SideNavComp location={location} sideNavData={sideNavData} />
        </div>
      )}
    </Location>
  ) : null
}

const Content = ({
  hasFrame = true,
  children,
  style
}: {
  hasFrame?: boolean
  children: ReactNode
  style?: CSSProperties
}): JSX.Element => (
  <main
    id='main'
    style={{
      margin: hasFrame
        ? `${suomifiTheme.spacing.l} ${suomifiTheme.spacing.m}`
        : 0,
      ...style
    }}>
    {children}
  </main>
)

const MainContent = ({
  sideNavData,
  hasFrame = true,
  children
}: Props): JSX.Element => (
  <div
    style={{
      background: suomifiTheme.colors.depthLight30,
      paddingTop: hasFrame ? suomifiTheme.spacing.m : 0,
      paddingBottom: '3rem'
    }}>
    <Desktop>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'nowrap'
        }}>
        <div
          style={{
            margin: hasFrame
              ? `${suomifiTheme.spacing.m} ${suomifiTheme.spacing.l} 0 ${
                  suomifiTheme.spacing.l
                }`
              : 0,
            width: '100%',
            maxWidth: hasFrame ? 1140 : 'initial',
            display: 'flex',
            flexWrap: 'nowrap',
            background: hasFrame ? suomifiTheme.colors.whiteBase : 'none',
            border: hasFrame
              ? `1px solid ${suomifiTheme.colors.depthLight13}`
              : 0
          }}>
          <SideNav
            sideNavData={sideNavData}
            style={{ width: '22rem', marginRight: suomifiTheme.spacing.m }}
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
          margin: `0 ${suomifiTheme.spacing.l}`,
          border: `1px solid ${suomifiTheme.colors.depthLight13}`
        }}
      />
      <div
        style={{
          margin: hasFrame
            ? `${suomifiTheme.spacing.m} ${suomifiTheme.spacing.l} 0 ${
                suomifiTheme.spacing.l
              }`
            : 0,
          background: hasFrame ? suomifiTheme.colors.whiteBase : 'none',
          border: hasFrame ? `1px solid ${suomifiTheme.colors.depthLight13}` : 0
        }}>
        <Content hasFrame={hasFrame}>{children}</Content>
      </div>
    </Tablet>
    <Mobile>
      <SideNav
        sideNavData={sideNavData}
        style={{
          margin: `0 ${suomifiTheme.spacing.m}`,
          border: `1px solid ${suomifiTheme.colors.depthLight13}`
        }}
      />
      <div
        style={{
          margin: 0,
          marginTop: hasFrame ? suomifiTheme.spacing.m : 0,
          background: hasFrame ? suomifiTheme.colors.whiteBase : 'none',
          border: hasFrame ? `1px solid ${suomifiTheme.colors.depthLight13}` : 0
        }}>
        <Content hasFrame={hasFrame}>{children}</Content>
      </div>
    </Mobile>
  </div>
)

interface Props {
  sideNavData?: SideNavData
  hasFrame?: boolean
  children: ReactNode
}

export default MainContent
