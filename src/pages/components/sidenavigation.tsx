import React from 'react';

import sidenavigationContent from '../../../locale/fi/sidenavigation.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import {
  Paragraph,
  Heading as ResponsiveHeading,
  Text as ResponsiveText,
} from 'components/ResponsiveComponents';
import {
  ExternalLink,
  RouterLink,
  SideNavigation,
  SideNavigationItem,
} from 'suomifi-ui-components';

const Page = (): React.ReactElement => {
  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={sidenavigationContent.title} />
      <ResponsiveHeading variant="h1">
        {sidenavigationContent.title}
      </ResponsiveHeading>

      <Paragraph variant="lead">
        <ResponsiveText variant="lead">
          {sidenavigationContent.intro}
        </ResponsiveText>
      </Paragraph>

      <ComponentDescription>
        <ComponentExample style={{ justifyContent: 'flex-start' }}>
          <div style={{ width: '350px' }}>
            <SideNavigation
              heading={sidenavigationContent['example.title']}
              icon="piggyBank"
              aria-label={sidenavigationContent['example.arialabel']}
            >
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="/" aria-current="location">
                    {sidenavigationContent['example.navitem1']}
                  </RouterLink>
                }
              >
                <SideNavigationItem
                  subLevel={2}
                  content={
                    <RouterLink href="/" aria-current="location">
                      {sidenavigationContent['example.navitem1-2-1']}
                    </RouterLink>
                  }
                >
                  <SideNavigationItem
                    subLevel={3}
                    content={
                      <RouterLink href="/">
                        {sidenavigationContent['example.navitem1-2-1-1']}
                      </RouterLink>
                    }
                  />
                  <SideNavigationItem
                    subLevel={3}
                    selected
                    content={
                      <RouterLink href="/" aria-current="page">
                        {sidenavigationContent['example.navitem1-2-1-2']}
                      </RouterLink>
                    }
                  />
                  <SideNavigationItem
                    subLevel={3}
                    content={
                      <RouterLink href="/">
                        {sidenavigationContent['example.navitem1-2-1-3']}
                      </RouterLink>
                    }
                  />
                </SideNavigationItem>
                <SideNavigationItem
                  subLevel={2}
                  content={
                    <RouterLink href="/">
                      {sidenavigationContent['example.navitem1-2-2']}
                    </RouterLink>
                  }
                />
              </SideNavigationItem>
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {sidenavigationContent['example.navitem2']}
                  </RouterLink>
                }
              />
              <SideNavigationItem
                content={
                  <RouterLink href="#">
                    {sidenavigationContent['example.navitem3']}
                  </RouterLink>
                }
                subLevel={1}
              />
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {sidenavigationContent['example.navitem4']}
                  </RouterLink>
                }
              />
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {sidenavigationContent['example.navitem5']}
                  </RouterLink>
                }
              />
            </SideNavigation>
          </div>
        </ComponentExample>
      </ComponentDescription>
      <NoteBox
        title={sidenavigationContent['note.title']}
        items={sidenavigationContent['note.items']}
      />

      {sidenavigationContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={section.paragraphs}
          links={section.links}
        />
      ))}
      <ComponentDescription
        mainTitle={sidenavigationContent['example.smallscreen.title']}
        description={sidenavigationContent['example.smallscreen.paragraph']}
      >
        <ComponentExample style={{ justifyContent: 'flex-start' }}>
          <div style={{ width: '350px' }}>
            <SideNavigation
              heading={sidenavigationContent['example.title']}
              icon="piggyBank"
              aria-label={sidenavigationContent['example.arialabel']}
              variant="smallScreen"
              initiallyExpanded={false}
            >
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="/" aria-current="location">
                    {sidenavigationContent['example.navitem1']}
                  </RouterLink>
                }
              >
                <SideNavigationItem
                  subLevel={2}
                  content={
                    <RouterLink href="/" aria-current="location">
                      {sidenavigationContent['example.navitem1-2-1']}
                    </RouterLink>
                  }
                >
                  <SideNavigationItem
                    subLevel={3}
                    content={
                      <RouterLink href="/">
                        {sidenavigationContent['example.navitem1-2-1-1']}
                      </RouterLink>
                    }
                  />
                  <SideNavigationItem
                    subLevel={3}
                    selected
                    content={
                      <RouterLink href="/" aria-current="page">
                        {sidenavigationContent['example.navitem1-2-1-2']}
                      </RouterLink>
                    }
                  />
                  <SideNavigationItem
                    subLevel={3}
                    content={
                      <RouterLink href="/">
                        {sidenavigationContent['example.navitem1-2-1-3']}
                      </RouterLink>
                    }
                  />
                </SideNavigationItem>
                <SideNavigationItem
                  subLevel={2}
                  content={
                    <RouterLink href="/">
                      {sidenavigationContent['example.navitem1-2-2']}
                    </RouterLink>
                  }
                />
              </SideNavigationItem>
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {sidenavigationContent['example.navitem2']}
                  </RouterLink>
                }
              />
              <SideNavigationItem
                content={
                  <RouterLink href="#">
                    {sidenavigationContent['example.navitem3']}
                  </RouterLink>
                }
                subLevel={1}
              />
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {sidenavigationContent['example.navitem4']}
                  </RouterLink>
                }
              />
              <SideNavigationItem
                subLevel={1}
                content={
                  <RouterLink href="#">
                    {sidenavigationContent['example.navitem5']}
                  </RouterLink>
                }
              />
            </SideNavigation>
          </div>
        </ComponentExample>
      </ComponentDescription>
    </Layout>
  );
};

export default Page;
