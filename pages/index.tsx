import type { NextPage } from 'next';
import Head from 'next/head';

import { Block, Heading } from 'suomifi-ui-components';
import PlainLayout from '../layouts/PlainLayout/PlainLayout';

const FrontPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Etusivu | Suomi.fi Design System</title>
      </Head>
      <PlainLayout>
        <Block style={{ padding: '50px 0' }}>
          <Heading variant="h1">Suomi.fi DS site revamp POC</Heading>
        </Block>
      </PlainLayout>
    </>
  );
};

export default FrontPage;
