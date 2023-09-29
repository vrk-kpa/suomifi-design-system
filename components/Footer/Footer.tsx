import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';
import Image from 'next/image';
import {
  Block,
  ExternalLink,
  RouterLink,
  Link as SuomifiLink,
  Text,
} from 'suomifi-ui-components';
import gitHubLogo from '/public/github.svg';
import styles from './Footer.module.scss';
import designSystemLogo from '/public/designSystemLogo.svg';

const Footer: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Block variant="footer" className={styles.footer}>
      <Block className="container">
        <Block className={styles.top}>
          <SuomifiLink
            href="https://designsystem.suomi.fi"
            className={styles.suomifiLink}
          >
            <Image src={designSystemLogo} alt="Suomi.fi Design System" />
          </SuomifiLink>
          <Block className={styles.text}>
            <Text>{t('footer.left_text')}</Text>
          </Block>
        </Block>
        <Block>
          <Block variant="div" className={styles.links}>
            <Block className={styles.links}>
              <Link href="/privacy-statement" passHref>
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
                <span className={'flex align-center'}>
                  <div className={styles.githubLogo}>
                    <Image src={gitHubLogo} aria-hidden alt="" />
                  </div>
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
