import { NextPage } from "next/types";
import { Block, Heading } from "suomifi-ui-components";

const NotFound: NextPage = () => {
  return (
    <Block className="container" style={{ padding: "50px 0" }}>
      <Heading variant="h1">Etsimääsi sivua ei löytynyt</Heading>
    </Block>
  );
};

export default NotFound;
