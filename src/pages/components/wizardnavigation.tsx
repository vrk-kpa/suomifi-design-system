import React from 'react';

import wizardnavigationContent from '../../../locale/fi/wizardnavigation.json';
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
  WizardNavigation,
  WizardNavigationItem,
} from 'suomifi-ui-components';

const Page = (): React.ReactElement => {
  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={wizardnavigationContent.title} />
      <ResponsiveHeading variant="h1">
        {wizardnavigationContent.title}
      </ResponsiveHeading>

      <Paragraph variant="lead">
        <ResponsiveText variant="lead">
          {wizardnavigationContent.intro}
        </ResponsiveText>
      </Paragraph>

      <ComponentDescription>
        <ComponentExample style={{ justifyContent: 'flex-start' }}>
          <div style={{ width: '350px' }}>
            <WizardNavigation
              heading={wizardnavigationContent['example.title']}
              aria-label={wizardnavigationContent['example.arialabel']}
            >
              <WizardNavigationItem status="completed">
                <RouterLink
                  href="#"
                  aria-label={
                    wizardnavigationContent['example.navitem1.arialabel']
                  }
                >
                  {wizardnavigationContent['example.navitem1']}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="default">
                <RouterLink href="#">
                  {wizardnavigationContent['example.navitem2']}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="current">
                <RouterLink aria-current="step" href="#">
                  {wizardnavigationContent['example.navitem3']}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="coming">
                <RouterLink aria-disabled role="link">
                  {wizardnavigationContent['example.navitem4']}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="coming">
                <RouterLink aria-disabled role="link">
                  {wizardnavigationContent['example.navitem5']}
                </RouterLink>
              </WizardNavigationItem>
            </WizardNavigation>
          </div>
        </ComponentExample>
      </ComponentDescription>
      <NoteBox
        title={wizardnavigationContent['note.title']}
        items={wizardnavigationContent['note.items']}
      />

      {wizardnavigationContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={section.paragraphs}
          links={section.links}
        />
      ))}
      <ComponentDescription
        mainTitle={wizardnavigationContent['example.smallscreen.title']}
        description={wizardnavigationContent['example.smallscreen.paragraph']}
      >
        <ComponentExample style={{ justifyContent: 'flex-start' }}>
          <div style={{ width: '350px' }}>
            <WizardNavigation
              heading={wizardnavigationContent['example.title']}
              aria-label={wizardnavigationContent['example.arialabel']}
              variant="smallScreen"
              initiallyExpanded={false}
            >
              <WizardNavigationItem status="completed">
                <RouterLink
                  href="#"
                  aria-label={
                    wizardnavigationContent['example.navitem1.arialabel']
                  }
                >
                  {wizardnavigationContent['example.navitem1']}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="default">
                <RouterLink href="#">
                  {wizardnavigationContent['example.navitem2']}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="current">
                <RouterLink aria-current="step" href="#">
                  {wizardnavigationContent['example.navitem3']}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="coming">
                <RouterLink aria-disabled role="link">
                  {wizardnavigationContent['example.navitem4']}
                </RouterLink>
              </WizardNavigationItem>
              <WizardNavigationItem status="coming">
                <RouterLink aria-disabled role="link">
                  {wizardnavigationContent['example.navitem5']}
                </RouterLink>
              </WizardNavigationItem>
            </WizardNavigation>
          </div>
        </ComponentExample>
      </ComponentDescription>
    </Layout>
  );
};

export default Page;
