import {
  Block,
  ColorDesignTokens,
  Heading,
  Link,
  suomifiDesignTokens,
} from 'suomifi-ui-components';
import styles from './FrontPageCard.module.scss';
import Image from 'next/image';

interface FrontPageCardProps {
  imgSrc: string;
  bgColor: keyof ColorDesignTokens;
  heading: string;
  linkText: string;
  linkHref: string;
}

const FrontPageCard: React.FunctionComponent<FrontPageCardProps> = ({
  imgSrc,
  bgColor,
  heading,
  linkText,
  linkHref,
}) => {
  return (
    <Block variant="div" className={styles.frontPageCard}>
      <Block
        className={styles.upper}
        style={{ backgroundColor: suomifiDesignTokens.colors[bgColor] }}
      >
        <Image src={imgSrc} alt={heading} width={250} height={125} />
      </Block>
      <Block className={styles.lower}>
        <Heading variant="h3">{heading}</Heading>
        <Block mt="s">
          <Link variant="accent" href={linkHref}>
            {linkText}
          </Link>
        </Block>
      </Block>
    </Block>
  );
};

export default FrontPageCard;
