import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import {
  Block,
  Heading,
  Link,
  Text,
  suomifiDesignTokens,
} from 'suomifi-ui-components';
import HeroBlock from '../components/HeroBlock/HeroBlock';
import FrontPageCard from '../components/FrontPageCard/FrontPageCard';
import PlainLayout from '../layouts/PlainLayout/PlainLayout';
import dsPatterns from '/public/dsPatterns.svg';
import dsComponents from '/public/dsComponents.svg';
import dsStyles from '/public/dsStyles.svg';

const FrontPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('front_page.front_page')}</title>
      </Head>
      <Block variant="div" className="w-100">
        <HeroBlock />
        <PlainLayout>
          <Block py="xxl">
            <Heading variant="h2" style={{ textAlign: 'center' }}>
              {t('front_page.heading')}
            </Heading>
            <Block my="m" style={{ textAlign: 'center' }}>
              <Text variant="lead">{t('front_page.main_text')}</Text>
            </Block>
            <Block style={{ textAlign: 'center' }}>
              <Link variant="accent" href="/info">
                {t('front_page.info_link')}
              </Link>
            </Block>
          </Block>
          <Block
            variant="div"
            className="flex justify-center align-center"
            mb="xxxxl"
            style={{ gap: suomifiDesignTokens.spacing.l, flexWrap: 'wrap' }}
          >
            <FrontPageCard
              imgSrc={dsStyles}
              bgColor="accentBase"
              heading={t('main_nav.styles')}
              linkText={t('front_page.go_to_styles')}
              linkHref="/styles"
            />
            <FrontPageCard
              imgSrc={dsComponents}
              bgColor="accentSecondary"
              heading={t('main_nav.components')}
              linkText={t('front_page.go_to_components')}
              linkHref="/components"
            />
            <FrontPageCard
              imgSrc={dsPatterns}
              bgColor="accentTertiary"
              heading={t('main_nav.patterns')}
              linkText={t('front_page.go_to_patterns')}
              linkHref="/patterns"
            />
          </Block>
        </PlainLayout>
      </Block>
    </>
  );
};

export default FrontPage;
