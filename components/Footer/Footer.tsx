import { useTranslation } from 'next-export-i18n';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import {
  Block,
  ExternalLink,
  Link,
  LogoIcon,
  Text,
} from 'suomifi-ui-components';
import GitHubLogo from '../../assets/icons/github.svg';
import styles from './Footer.module.scss';

const Footer: React.FunctionComponent = () => {
  const { t } = useTranslation();
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
          <Block variant="div" className={styles.texts}>
            <Block className={styles.left}>
              <Text>{t('footer.left_text')}</Text>
            </Block>
            <Block className={styles.links}>
              <Link href="/">{t('footer.cookies')}</Link>
              <Link href="/">{t('footer.accessibility')}</Link>
              <ExternalLink
                href="https://github.com/vrk-kpa/suomifi-ui-components"
                labelNewWindow="Avautuu uudessa välilehdessä"
                className={styles.githubLink}
              >
                <span className="flex align-center">
                  <img
                    src="/github.svg"
                    aria-hidden
                    className={styles.githubLogo}
                  />
                  suomifi-ui-components
                </span>
              </ExternalLink>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Footer;
