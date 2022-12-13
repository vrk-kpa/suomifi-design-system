import React from 'react';

import servicenavigationContent from '../../../locale/fi/servicenavigation.json';
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
  RouterLink,
  ServiceNavigation,
  ServiceNavigationItem,
  StaticChip,
} from 'suomifi-ui-components';

const Page = (): React.ReactElement => {
  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={servicenavigationContent.title} />
      <ResponsiveHeading variant="h1">
        {servicenavigationContent.title}
      </ResponsiveHeading>

      <Paragraph variant="lead">
        <ResponsiveText variant="lead">
          {servicenavigationContent.intro}
        </ResponsiveText>
      </Paragraph>

      <ComponentDescription filterProps={['style']}>
        <ComponentExample style={{ justifyContent: 'flex-start' }}>
          <div style={{ width: '300px' }}>
            <ServiceNavigation
              aria-label={servicenavigationContent['example.arialabel']}
            >
              <ServiceNavigationItem>
                <RouterLink
                  href="#"
                  aria-label={
                    servicenavigationContent['example.navitem1.arialabel']
                  }
                >
                  {servicenavigationContent['example.navitem1']}
                  <StaticChip style={{ marginLeft: '15px' }} aria-hidden>
                    16
                  </StaticChip>
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink href="#">
                  {servicenavigationContent['example.navitem2']}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem selected>
                <RouterLink href="#" aria-current="page">
                  {servicenavigationContent['example.navitem3']}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink asComponent="button">
                  {servicenavigationContent['example.navitem4']}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink href="#">
                  {servicenavigationContent['example.navitem5']}
                </RouterLink>
              </ServiceNavigationItem>
            </ServiceNavigation>
          </div>
        </ComponentExample>
      </ComponentDescription>
      <NoteBox
        title={servicenavigationContent['note.title']}
        items={servicenavigationContent['note.items']}
      />

      {servicenavigationContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={section.paragraphs}
          links={section.links}
        />
      ))}
      <ComponentDescription
        mainTitle={servicenavigationContent['example.smallscreen.title']}
        description={servicenavigationContent['example.smallscreen.paragraph']}
      >
        <ComponentExample style={{ justifyContent: 'flex-start' }}>
          <div style={{ width: '300px' }}>
            <ServiceNavigation
              aria-label={servicenavigationContent['example.arialabel']}
              variant="smallScreen"
              smallScreenExpandButtonText={
                servicenavigationContent['example.smallscreen.buttontext']
              }
              initiallyExpanded={false}
            >
              <ServiceNavigationItem>
                <RouterLink
                  href="#"
                  aria-label={
                    servicenavigationContent['example.navitem1.arialabel']
                  }
                >
                  {servicenavigationContent['example.navitem1']}
                  <StaticChip style={{ marginLeft: '15px' }} aria-hidden>
                    16
                  </StaticChip>
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink href="#">
                  {servicenavigationContent['example.navitem2']}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem selected>
                <RouterLink href="#" aria-current="page">
                  {servicenavigationContent['example.navitem3']}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink href="#">
                  {servicenavigationContent['example.navitem4']}
                </RouterLink>
              </ServiceNavigationItem>
              <ServiceNavigationItem>
                <RouterLink href="#">
                  {servicenavigationContent['example.navitem5']}
                </RouterLink>
              </ServiceNavigationItem>
            </ServiceNavigation>
          </div>
        </ComponentExample>
      </ComponentDescription>
    </Layout>
  );
};

export default Page;
