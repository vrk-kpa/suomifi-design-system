import { Block, Heading, Text } from 'suomifi-ui-components';
import { useTranslation } from 'next-export-i18n';
import Image from 'next/image';
import styles from './HeroBlock.module.scss';
import suomifiIcon from '/public/icons/suomifi.svg';

const InfoBox: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Block variant="div" className={styles.heroBlock}>
      <Block variant="div" className="container">
        <Block variant="div" className={styles.heroContainer}>
          <div className={styles.heroLogoContainer}>
            <Image src={suomifiIcon} alt="Suomi.fi" />
          </div>
          <Block variant="div">
            <Heading variant="h1hero" color="whiteBase">
              {t('front_page.hero_heading')}
            </Heading>
            <Block mt="xxl">
              <Text variant="lead" color="whiteBase">
                {t('front_page.hero_text')}
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default InfoBox;
