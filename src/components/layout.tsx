import React, { ReactNode } from 'react';
import { Translation } from 'react-i18next';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

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
  <Translation>
    {(t) => (
      <>
        <BypassLink to="#main">{t('common:to.main.content')}</BypassLink>
        {hasSideNav && (
          <BypassLink to="#sidenav">{t('common:to.sidenav')}</BypassLink>
        )}
      </>
    )}
  </Translation>
);

const Layout = ({
  sideNavData,
  hasFrame = true,
  children,
}: Props): JSX.Element => (
  <Translation>
    {(t) => (
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
        }}
      >
        <BypassLinks hasSideNav={!!sideNavData} />
        <Header />
        <Desktop>
          <Navigation mainNavData={mainNavData(t)} />
        </Desktop>
        <MainContent sideNavData={sideNavData} hasFrame={hasFrame}>
          {children}
        </MainContent>
        <Footer />
      </div>
    )}
  </Translation>
);

interface Props {
  sideNavData?: SideNavData;
  hasFrame?: boolean;
  children: ReactNode;
}

export default Layout;
