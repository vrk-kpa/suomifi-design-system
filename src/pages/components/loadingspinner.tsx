import React, { useState } from 'react';
import {
  defaultSuomifiTheme,
  LoadingSpinnerProps,
  LoadingSpinnerStatus,
  LoadingSpinner,
  Button,
} from 'suomifi-ui-components';

import content from '../../../locale/fi/loadingspinner.json';
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
    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <LoadingSpinner
          status="loading"
          variant="normal"
          textAlign="right"
          text="Loading"
        />
      </ComponentExample>
    </ComponentDescription>

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
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [status, setStatus] = useState<LoadingSpinnerStatus>('loading');

  const runLoader = (): void => {
    let progress = 0;
    const id = setInterval(frame, 300);
    function frame(): void {
      if (progress >= 100) {
        clearInterval(id);
        setVisible(false);
        progress = 0;
      } else {
        progress = progress + 10;
      }
      setLoaded(progress);
    }
  };

  return (
    <ComponentDescription mainTitle={title} description={desc} noCode={noCode}>
      <ComponentExample
        style={{
          marginBottom: defaultSuomifiTheme.spacing.s,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Button
          disabled={visible}
          onClick={() => {
            setStatus('loading');

            if (!visible) {
              runLoader();
            }
            setVisible(!visible);
          }}
        >
          {content['example.startButton']}
        </Button>

        <div
          aria-live="assertive"
          aria-busy={status === 'loading'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100px',
            marginTop: defaultSuomifiTheme.spacing.m,
            border: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
          }}
        >
          {visible && (
            <LoadingSpinner
              status={status}
              text={
                status !== 'success'
                  ? content['example.loading.active']
                  : content['example.loading.success']
              }
            />
          )}
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
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [status, setStatus] = useState<LoadingSpinnerStatus>('failed');

  const runLoader = (): void => {
    let progress = 0;
    const id = setInterval(frame, 300);
    function frame(): void {
      if (progress >= 100) {
        clearInterval(id);
        setStatus('success');
        progress = 0;
      } else {
        progress = progress + 10;
      }
      setLoaded(progress);
    }
  };

  return (
    <ComponentDescription mainTitle={title} description={desc} noCode={noCode}>
      <ComponentExample
        style={{
          marginBottom: defaultSuomifiTheme.spacing.s,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Button
          disabled={status === 'loading'}
          onClick={() => {
            if (!visible) {
              setStatus('loading');
              runLoader();
            } else {
              setStatus('failed');
            }
            setVisible(!visible);
          }}
        >
          {status === 'success'
            ? content['example.closeButton']
            : content['example.startButton']}
        </Button>

        <div
          aria-live="assertive"
          aria-busy={status === 'loading'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100px',
            marginTop: defaultSuomifiTheme.spacing.m,
            border: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
          }}
        >
          {visible && (
            <LoadingSpinner
              status={status}
              text={
                status !== 'success'
                  ? content['example.loading.active']
                  : content['example.loading.success']
              }
            />
          )}
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
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [status, setStatus] = useState<LoadingSpinnerStatus>('success');

  const runLoader = (): void => {
    let progress = 0;
    const id = setInterval(frame, 300);
    function frame(): void {
      if (progress >= 100) {
        clearInterval(id);
        setStatus('failed');
        progress = 0;
      } else {
        progress = progress + 10;
      }
      setLoaded(progress);
    }
  };

  return (
    <ComponentDescription mainTitle={title} description={desc} noCode={noCode}>
      <ComponentExample
        style={{
          marginBottom: defaultSuomifiTheme.spacing.s,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Button
          disabled={status === 'loading'}
          onClick={() => {
            if (!visible) {
              setStatus('loading');
              runLoader();
            } else {
              setStatus('success');
            }
            setVisible(!visible);
          }}
        >
          {status === 'failed'
            ? content['example.closeButton']
            : content['example.startButton']}
        </Button>

        <div
          aria-live="assertive"
          aria-busy={status === 'loading'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100px',
            marginTop: defaultSuomifiTheme.spacing.m,
            border: `1px solid ${defaultSuomifiTheme.colors.depthLight1}`,
          }}
        >
          {visible && (
            <LoadingSpinner
              status={status}
              text={
                status !== 'failed'
                  ? content['example.loading.active']
                  : content['example.loading.error']
              }
            />
          )}
        </div>
      </ComponentExample>
    </ComponentDescription>
  );
};

export default Page;
