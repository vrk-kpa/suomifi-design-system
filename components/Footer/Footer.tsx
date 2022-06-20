import { Block, Link, LogoIcon, Text } from "suomifi-ui-components";
import styles from "./Footer.module.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <Block variant="footer" className={styles.footer}>
      <Block className="container">
        <Block>
          <Link href="https://suomi.fi" className={styles.suomifiLink}>
            <LogoIcon
              icon="horizontal"
              alt="Suomi.fi"
              className={styles.logo}
            />
          </Link>
        </Block>
        <Block>
          <Block className={styles.left}>
            <Text>
              Suomi.fi Design System -kirjaston kehittämisestä vastaa Digi- ja
              väestötietovirasto.
            </Text>
          </Block>
          <Block className={styles.right}></Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Footer;
