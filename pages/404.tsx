import { NextPage } from 'next/types';
import { Block, Heading } from 'suomifi-ui-components';
import PlainLayout from '../layouts/PlainLayout/PlainLayout';

const NotFound: NextPage = () => {
  return (
    <PlainLayout>
      <Block style={{ padding: '50px 0' }}>
        <Heading variant="h1">Etsimääsi sivua ei löytynyt</Heading>
      </Block>
    </PlainLayout>
  );
};

export default NotFound;
