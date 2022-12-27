import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';
import {
  Block,
  ExternalLink,
  LogoIcon,
  RouterLink,
  Link as SuomifiLink,
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
          <SuomifiLink href="https://suomi.fi" className={styles.suomifiLink}>
            <LogoIcon
              icon="horizontal"
              alt="Suomi.fi"
              className={styles.logo}
            />
          </SuomifiLink>
        </Block>
        <Block>
          <Block variant="div" className={styles.texts}>
            <Block className={styles.left}>
              <Text>{t('footer.left_text')}</Text>
            </Block>
            <Block className={styles.links}>
              <Link href="/info" passHref>
                <RouterLink>{t('footer.cookies')}</RouterLink>
              </Link>
              <Link href="/accessibility-statement" passHref>
                <RouterLink>{t('footer.accessibility')}</RouterLink>
              </Link>
              <ExternalLink
                href="https://github.com/vrk-kpa/suomifi-ui-components"
                labelNewWindow={t('common.opens_in_a_new_tab')}
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
