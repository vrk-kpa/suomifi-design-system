import React, { useState } from 'react';
import {
  defaultSuomifiTheme,
  Pagination,
  PaginationProps,
  PageInputProps,
  Block,
  LoadingSpinnerProps,
  LoadingSpinnerStatus,
  LoadingSpinner,
  Button,
} from 'suomifi-ui-components';

import content from '../../../locale/fi/pagination.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={content.title} />
    <Heading variant="h1">{content.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{content.intro}</Text>
    </Paragraph>

    <FirstExample />

    <NoteBox title={content['note.title']} items={content['note.items']} />

    {content.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}

    <BasicExample
      title={content['example.basic.heading']}
      desc={content['example.basic.description']}
      noCode={true}
    />

    <SuccessExample
      title={content['example.success.heading']}
      desc={content['example.success.description']}
      noCode={true}
    />

    <FailingExample
      title={content['example.error.heading']}
      desc={content['example.error.description']}
      noCode={true}
    />
  </Layout>
);

const FirstExample = ({
  ...passProps
}: Partial<PaginationProps> & {}): JSX.Element => {
  const [current, setCurrent] = React.useState(2);
  const lastPage = 8;

  return (
    <ComponentDescription noCode={false}>
      <ComponentExample
        style={{
          marginBottom: defaultSuomifiTheme.spacing.s,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ width: '600px' }}>
          <Block
            padding="xl"
            style={{ border: '1px solid rgb(200, 205, 208)' }}
          >
            <Heading variant="h3"> Page: {current}</Heading>
          </Block>
          <br />
          <Pagination
            currentPage={current}
            lastPage={lastPage}
            smallScreen={false}
            nextButtonAriaLabel="Next page"
            previousButtonAriaLabel="Previous page"
            pageInput={true}
            aria-label="Example A"
            pageInputProps={{
              invalidValueErrorText: (value) => `"${value}" is not allowed`,
              inputPlaceholderText: 'Go to',
              buttonText: 'Jump to page',
              labelText: 'Page number',
            }}
            onChange={(page) => {
              setCurrent(page);
            }}
            pageIndicatorText={(currentPage, lastPage) => {
              return 'Page ' + currentPage + ' / ' + lastPage;
            }}
            ariaPageIndicatorText={(currentPage, lastPage) => {
              return 'Showing page ' + currentPage + ' out of ' + lastPage;
            }}
          />
        </div>
      </ComponentExample>
    </ComponentDescription>
  );
};

const BasicExample = ({
  title,
  desc,
  noCode,
  ...passProps
}: Partial<LoadingSpinnerProps> & {
  title: string;
  desc: string;
  noCode: boolean;
}): JSX.Element => {
  const arrLength = 100;
  const step = 5;

  const lastPage = arrLength / step;
  const [posts] = React.useState(Array.from(Array(arrLength).keys()));
  const [current, setCurrent] = React.useState(1);
  const firstShown = (current - 1) * step;
  const lastShown = (current - 1) * step + step;
  const currentItems = posts.slice(firstShown, lastShown);

  return (
    <ComponentDescription mainTitle={title} description={desc} noCode={noCode}>
      <ComponentExample
        style={{
          marginBottom: defaultSuomifiTheme.spacing.s,
          marginTop: defaultSuomifiTheme.spacing.s,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ width: '600px' }}>
          <Block
            padding="xl"
            style={{ border: '1px solid rgb(200, 205, 208)' }}
          >
            {currentItems.map((post, id) => (
              <div key={id}>Item: {post}</div>
            ))}
          </Block>
          <br />
          <Pagination
            lastPage={lastPage}
            smallScreen={false}
            nextButtonAriaLabel="Next page"
            previousButtonAriaLabel="Previous page"
            pageInput={true}
            aria-label="Example B"
            pageInputProps={{
              invalidValueErrorText: (value) => `"${value}" is not allowed`,
              inputPlaceholderText: 'Go to',
              buttonText: 'Jump to page',
              labelText: 'Page number',
            }}
            onChange={(page) => {
              setCurrent(page);
            }}
            pageIndicatorText={(currentPage, lastPage) => {
              return 'Page ' + currentPage + ' / ' + lastPage;
            }}
            ariaPageIndicatorText={(currentPage, lastPage) => {
              return (
                'Page ' +
                currentPage +
                ' out of ' +
                lastPage +
                '. Showing items from ' +
                firstShown +
                ' to ' +
                lastShown
              );
            }}
          />
        </div>
      </ComponentExample>
    </ComponentDescription>
  );
};

const SuccessExample = ({
  title,
  desc,
  noCode,
  ...passProps
}: Partial<LoadingSpinnerProps> & {
  title: string;
  desc: string;
  noCode: boolean;
}): JSX.Element => {
  const [current, setCurrent] = React.useState(2);
  const lastPage = 8;

  return (
    <ComponentDescription mainTitle={title} description={desc} noCode={false}>
      <ComponentExample
        style={{
          marginBottom: defaultSuomifiTheme.spacing.s,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ width: '600px' }}>
          <Pagination
            currentPage={current}
            lastPage={lastPage}
            smallScreen={false}
            nextButtonAriaLabel="Next page"
            previousButtonAriaLabel="Previous page"
            pageInput={false}
            aria-label="Example A"
            onChange={(page) => {
              setCurrent(page);
            }}
            pageIndicatorText={(currentPage, lastPage) => {
              return 'Page ' + currentPage + ' / ' + lastPage;
            }}
            ariaPageIndicatorText={(currentPage, lastPage) => {
              return 'Showing page ' + currentPage + ' out of ' + lastPage;
            }}
          />
        </div>
      </ComponentExample>
    </ComponentDescription>
  );
};

const FailingExample = ({
  title,
  desc,
  noCode,
  ...passProps
}: Partial<LoadingSpinnerProps> & {
  title: string;
  desc: string;
  noCode: boolean;
}): JSX.Element => {
  const [current, setCurrent] = React.useState(2);
  const lastPage = 8;

  return (
    <ComponentDescription mainTitle={title} description={desc} noCode={false}>
      <ComponentExample
        style={{
          marginBottom: defaultSuomifiTheme.spacing.s,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ width: '600px' }}>
          <Pagination
            currentPage={current}
            lastPage={lastPage}
            smallScreen={true}
            nextButtonAriaLabel="Next page"
            previousButtonAriaLabel="Previous page"
            pageInput={true}
            aria-label="Example A"
            pageInputProps={{
              invalidValueErrorText: (value) => `"${value}" is not allowed`,
              inputPlaceholderText: 'Go to',
              buttonText: 'Jump to page',
              labelText: 'Page number',
            }}
            onChange={(page) => {
              setCurrent(page);
            }}
            pageIndicatorText={(currentPage, lastPage) => {
              return 'Page ' + currentPage + ' / ' + lastPage;
            }}
            ariaPageIndicatorText={(currentPage, lastPage) => {
              return 'Showing page ' + currentPage + ' out of ' + lastPage;
            }}
          />
        </div>
      </ComponentExample>
    </ComponentDescription>
  );
};

export default Page;