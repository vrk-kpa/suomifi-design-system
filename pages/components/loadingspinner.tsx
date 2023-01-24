import { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {
  defaultSuomifiTheme,
  Block,
  Button,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
  LoadingSpinner,
  LoadingSpinnerProps,
  LoadingSpinnerStatus,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('loading_spinner_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('loading_spinner_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/LoadingSpinner"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('loading_spinner_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section">
          <ComponentExample
            style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
          >
            <LoadingSpinner
              status="loading"
              variant="normal"
              textAlign="right"
              text="Loading"
            />
          </ComponentExample>
        </Block>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('loading_spinner_page.accessibility_list.point_1')}</li>
              <li>{t('loading_spinner_page.accessibility_list.point_2')}</li>
              <li>{t('loading_spinner_page.accessibility_list.point_3')}</li>
              <li>{t('loading_spinner_page.accessibility_list.point_4')}</li>
              <li>{t('loading_spinner_page.accessibility_list.point_5')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('loading_spinner_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('loading_spinner_page.what_does_the_component_contain.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t(
              'loading_spinner_page.what_does_the_component_contain.text_2.heading',
            )}
            <ol type="1">
              <li>
                {t(
                  'loading_spinner_page.what_does_the_component_contain.text_2.state1',
                )}
              </li>
              <li>
                {t(
                  'loading_spinner_page.what_does_the_component_contain.text_2.state2',
                )}
              </li>
              <li>
                {t(
                  'loading_spinner_page.what_does_the_component_contain.text_2.state3',
                )}
              </li>
            </ol>
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('loading_spinner_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('loading_spinner_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('loading_spinner_page.size_and_usage.text_2')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('loading_spinner_page.example.basic.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('loading_spinner_page.example.basic.description')}
          </Paragraph>

          <BasicExample />
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('loading_spinner_page.example.success.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('loading_spinner_page.example.success.description')}
          </Paragraph>

          <SuccessExample />
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('loading_spinner_page.example.error.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('loading_spinner_page.example.error.description')}
          </Paragraph>

          <FailingExample />
        </Block>
      </SideNavLayout>
    </>
  );
};

const BasicExample = ({
  ...passProps
}: Partial<LoadingSpinnerProps>): JSX.Element => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
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
    }
  };

  return (
    <ComponentExample
      noCode
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
        {t('loading_spinner_page.example.start_button')}
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
                ? t('loading_spinner_page.example.loading.active')
                : t('loading_spinner_page.example.loading.success')
            }
          />
        )}
      </div>
    </ComponentExample>
  );
};

const SuccessExample = ({
  ...passProps
}: Partial<LoadingSpinnerProps>): JSX.Element => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
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
    }
  };

  return (
    <ComponentExample
      noCode
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
          ? t('loading_spinner_page.example.close_button')
          : t('loading_spinner_page.example.start_button')}
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
                ? t('loading_spinner_page.example.loading.active')
                : t('loading_spinner_page.example.loading.success')
            }
          />
        )}
      </div>
    </ComponentExample>
  );
};

const FailingExample = ({
  ...passProps
}: Partial<LoadingSpinnerProps>): JSX.Element => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
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
    }
  };

  return (
    <ComponentExample
      noCode
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
          ? t('loading_spinner_page.example.close_button')
          : t('loading_spinner_page.example.start_button')}
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
                ? t('loading_spinner_page.example.loading.active')
                : t('loading_spinner_page.example.loading.error')
            }
          />
        )}
      </div>
    </ComponentExample>
  );
};

export default Page;
