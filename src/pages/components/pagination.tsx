import React from 'react';
import {
  defaultSuomifiTheme,
  Pagination,
  PaginationProps,
  Block,
  LoadingSpinnerProps,
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
      noCode={false}
    />

    <SuccessExample
      title={content['example.success.heading']}
      desc={content['example.success.description']}
      noCode={false}
    />

    <FailingExample
      title={content['example.error.heading']}
      desc={content['example.error.description']}
      noCode={false}
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
            <Heading variant="h3"> Sivu: {current}</Heading>
          </Block>
          <br />
          <Pagination
            currentPage={current}
            lastPage={lastPage}
            smallScreen={false}
            nextButtonAriaLabel="Seuraava sivu"
            previousButtonAriaLabel="Edellinen sivu"
            pageInput={true}
            aria-label="Esimerkki A"
            pageInputProps={{
              invalidValueErrorText: (value) =>
                `"${value}" ei ole sallittu arvo`,
              inputPlaceholderText: 'Siirry sivulle',
              buttonText: 'Siirry sivulle',
              labelText: 'Sivun numero',
            }}
            onChange={(page) => {
              setCurrent(page);
            }}
            pageIndicatorText={(currentPage, lastPage) => {
              return 'Sivu ' + currentPage + ' / ' + lastPage;
            }}
            ariaPageIndicatorText={(currentPage, lastPage) => {
              return 'Näytetään sivu ' + currentPage + ' kautta ' + lastPage;
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
              <div key={id}>Tulos: {post}</div>
            ))}
          </Block>
          <br />
          <Pagination
            lastPage={lastPage}
            smallScreen={false}
            nextButtonAriaLabel="Seuraava sivu"
            previousButtonAriaLabel="Edellinen sivu"
            pageInput={true}
            aria-label="Esimerkki B"
            pageInputProps={{
              invalidValueErrorText: (value) =>
                `"${value}" ei ole sallittu arvo`,
              inputPlaceholderText: 'Siirry sivulle',
              buttonText: 'Siirry sivulle',
              labelText: 'Sivun numero',
            }}
            onChange={(page) => {
              setCurrent(page);
            }}
            pageIndicatorText={(currentPage, lastPage) => {
              return 'Sivu ' + currentPage + ' / ' + lastPage;
            }}
            ariaPageIndicatorText={(currentPage, lastPage) => {
              return (
                'Sivu ' +
                currentPage +
                ' kautta ' +
                lastPage +
                '. Näytetään tulokset ' +
                firstShown +
                ' viiva ' +
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
    <ComponentDescription mainTitle={title} description={desc} noCode={noCode}>
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
            nextButtonAriaLabel="Seuraava sivu"
            previousButtonAriaLabel="Edellinen sivu"
            pageInput={false}
            aria-label="Esimerkki C"
            onChange={(page) => {
              setCurrent(page);
            }}
            pageIndicatorText={(currentPage, lastPage) => {
              return 'Sivu ' + currentPage + ' / ' + lastPage;
            }}
            ariaPageIndicatorText={(currentPage, lastPage) => {
              return 'Näytetään sivu ' + currentPage + ' kautta ' + lastPage;
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
            nextButtonAriaLabel="Seuraava sivu"
            previousButtonAriaLabel="Edellinen sivu"
            pageInput={true}
            aria-label="Esimerkki D"
            pageInputProps={{
              invalidValueErrorText: (value) =>
                `"${value}" ei ole sallittu arvo`,
              inputPlaceholderText: 'Siirry sivulle',
              buttonText: 'Siirry sivulle',
              labelText: 'Sivun numero',
            }}
            onChange={(page) => {
              setCurrent(page);
            }}
            pageIndicatorText={(currentPage, lastPage) => {
              return 'Sivu ' + currentPage + ' / ' + lastPage;
            }}
            ariaPageIndicatorText={(currentPage, lastPage) => {
              return 'Näytetään sivu ' + currentPage + ' kautta ' + lastPage;
            }}
          />
        </div>
      </ComponentExample>
    </ComponentDescription>
  );
};

export default Page;
