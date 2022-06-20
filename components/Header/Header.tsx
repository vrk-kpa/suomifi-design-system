import Link from "next/link";
import { Block } from "suomifi-ui-components";
import styles from "./Header.module.scss";
import Navbar from "./Navbar/Navbar";

const Header: React.FunctionComponent = () => {
  return (
    <Block variant="header" className={styles.header}>
      <Block className="container">
        <Link href="/">
          <img
            src="/designSystemLogo.svg"
            alt="Suomi.fi Design System"
            className={styles.logo}
          />
        </Link>
      </Block>
      <Navbar />
    </Block>
  );
};

export default Header;
