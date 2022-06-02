import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import notificationContent from '../../../locale/fi/notification.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Notification, Link } from 'components/ExampleComponents';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import { Example } from 'examples/components';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={notificationContent.title} />
    <Heading variant="h1">{notificationContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{notificationContent.intro}</Text>
    </Paragraph>
    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <Notification
          status="error"
          closeText={notificationContent['example.error.closeButton']}
          headingText={notificationContent['example.error.heading']}
        >
          {notificationContent['example.error.paragraph']}
        </Notification>
      </ComponentExample>
    </ComponentDescription>

    <NoteBox
      title={notificationContent['note.title']}
      items={notificationContent['note.items']}
    />

    {notificationContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}
    <ComponentDescription
      mainTitle={notificationContent['example.info.sectionHeading']}
      description={notificationContent['example.info.description']}
    >
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <Notification
          closeText={notificationContent['example.info.closeButton']}
          headingText={notificationContent['example.info.heading']}
          actionElements={
            <Link href="#">
              {notificationContent['example.info.actionLink']}
            </Link>
          }
        >
          {notificationContent['example.info.paragraph']}
        </Notification>
      </ComponentExample>
    </ComponentDescription>
  </Layout>
);

export default Page;
