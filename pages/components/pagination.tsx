import { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {
  Block,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
  Link,
  defaultSuomifiTheme,
  Pagination,
  PaginationProps,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('pagination_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('pagination_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Pagination"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('pagination_page.ingress')}</Text>
        </Paragraph>

        <FirstExample />

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('pagination_page.accessibility_list.point_1')}</li>
              <li>{t('pagination_page.accessibility_list.point_2')}</li>
              <li>{t('pagination_page.accessibility_list.point_3')}</li>
              <li>{t('pagination_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('pagination_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('pagination_page.what_does_the_component_contain.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('pagination_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('pagination_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('pagination_page.size_and_usage.text_2')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('pagination_page.size_and_usage.text_3')}
          </Paragraph>
        </Block>

        <Block variant="section" mt="l">
          <Heading variant="h2" className="mb-xl">
            {t('pagination_page.example.basic.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('pagination_page.example.basic.description')}
          </Paragraph>

          <BasicExample />
        </Block>

        <Block variant="section" mt="l">
          <Heading variant="h2" className="mb-xl">
            {t('pagination_page.example.success.heading')}
          </Heading>

          <SuccessExample />
        </Block>

        <Block variant="section" mt="l">
          <Heading variant="h2" className="mb-xl">
            {t('pagination_page.example.error.heading')}
          </Heading>

          <FailingExample />
        </Block>
      </SideNavLayout>
    </>
  );
};

const FirstExample = ({
  ...passProps
}: Partial<PaginationProps> & {}): JSX.Element => {
  const [current, setCurrent] = useState(2);
  const lastPage = 8;

  return (
    <ComponentExample
      style={{
        marginBottom: defaultSuomifiTheme.spacing.s,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ width: '600px' }}>
        <Block padding="xl" style={{ border: '1px solid rgb(200, 205, 208)' }}>
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
            invalidValueErrorText: (value) => `"${value}" ei ole sallittu arvo`,
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
  );
};

const BasicExample = ({
  ...passProps
}: Partial<PaginationProps> & {}): JSX.Element => {
  const arrLength = 100;
  const step = 5;

  const lastPage = arrLength / step;
  const [posts] = useState(Array.from(Array(arrLength).keys()));
  const [current, setCurrent] = useState(1);
  const firstShown = (current - 1) * step;
  const lastShown = (current - 1) * step + step;
  const currentItems = posts.slice(firstShown, lastShown);

  return (
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
          id="page-content"
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
            invalidValueErrorText: (value) => `"${value}" ei ole sallittu arvo`,
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
        <Link href="#page-content" underline="initial">
          Tulokset
        </Link>
      </div>
    </ComponentExample>
  );
};

const SuccessExample = ({
  ...passProps
}: Partial<PaginationProps> & {}): JSX.Element => {
  const [current, setCurrent] = useState(2);
  const lastPage = 8;

  return (
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
  );
};

const FailingExample = ({
  ...passProps
}: Partial<PaginationProps> & {}): JSX.Element => {
  const [current, setCurrent] = useState(2);
  const lastPage = 8;

  return (
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
            invalidValueErrorText: (value) => `"${value}" ei ole sallittu arvo`,
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
  );
};

export default Page;
