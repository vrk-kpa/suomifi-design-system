import { Block, Heading, Text } from 'suomifi-ui-components';
import { useTranslation } from 'next-export-i18n';
import styles from './HeroBlock.module.scss';

const InfoBox: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Block variant="div" className={styles.heroBlock}>
      <Block className={styles.heroBlockImage}>
        <Block className="container">
          <Block variant="div" className={styles.heroBlockLine}></Block>
          <Heading variant="h1">{t('front_page.hero_heading')}</Heading>
          <Text className={styles.heroBlockSubtitle}>
            {t('front_page.hero_subtitle')}
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default InfoBox;
