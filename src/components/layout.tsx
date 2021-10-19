import React, { ReactNode } from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import commonContent from '../../locale/fi/common.json';
import Header from 'components/header';
import Navigation from 'components/Navigation';
import { SideNavData } from 'components/SideNavData';
import { Desktop } from 'components/Responsive';
import BypassLink from 'components/BypassLink';
import MainContent from 'components/MainContent';
import Footer from 'components/Footer';
import mainNavData from 'config/mainnav';

import '@csstools/normalize.css';
import './layout.css';

const BypassLinks = ({ hasSideNav }: { hasSideNav: boolean }): JSX.Element => (
  <>
    <BypassLink to="#main">{commonContent['to.main.content']}</BypassLink>
    {hasSideNav && (
      <BypassLink to="#sidenav">{commonContent['to.sidenav']}</BypassLink>
    )}
  </>
);

const Layout = ({
  sideNavData,
  hasFrame = true,
  children,
}: Props): JSX.Element => (
  <div
    style={{
      fontFamily: defaultSuomifiTheme.values.typography.bodyText.fontFamily,
      fontSize:
        defaultSuomifiTheme.values.typography.bodyText.fontSize.value +
        defaultSuomifiTheme.values.typography.bodyText.fontSize.unit,
      lineHeight:
        defaultSuomifiTheme.values.typography.bodyText.lineHeight.value +
        defaultSuomifiTheme.values.typography.bodyText.lineHeight.unit,
      color: defaultSuomifiTheme.colors.blackBase,
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <BypassLinks hasSideNav={!!sideNavData} />
    <Header />
    <Desktop style={{ display: 'flex' }}>
      <Navigation mainNavData={mainNavData} />
    </Desktop>
    <MainContent
      sideNavData={sideNavData}
      hasFrame={hasFrame}
      style={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}
    >
      {children}
    </MainContent>
    <Footer style={{ display: 'flex', justifyContent: 'center' }} />
  </div>
);

interface Props {
  sideNavData?: SideNavData;
  hasFrame?: boolean;
  children: ReactNode;
}

export default Layout;
