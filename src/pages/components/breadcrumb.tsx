import React from 'react';

import * as breadcrumbContent from '../../../locale/fi/breadcrumb.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import { Breadcrumb, BreadcrumbLink } from 'components/ExampleComponents';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={breadcrumbContent.title} />
    <Heading variant="h1">{breadcrumbContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{breadcrumbContent.intro}</Text>
    </Paragraph>

    <ComponentDescription
      mainTitle={breadcrumbContent['default.title']}
      description={breadcrumbContent['default.description']}
    >
      <ComponentExample>
        <Breadcrumb aria-label="breadcrumb">
          <BreadcrumbLink href="/">
            {breadcrumbContent['default.link1']}
          </BreadcrumbLink>
          <BreadcrumbLink href="/alasivu">
            {breadcrumbContent['default.link2']}
          </BreadcrumbLink>
          <BreadcrumbLink current>
            {breadcrumbContent['default.link3']}
          </BreadcrumbLink>
        </Breadcrumb>
      </ComponentExample>
    </ComponentDescription>

    <NoteBox
      title={breadcrumbContent['note.title']}
      items={breadcrumbContent['note.items']}
    />

    {breadcrumbContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={(section as any).paragraphs}
        links={section.links}
      />
    ))}
  </Layout>
);

export default Page;
