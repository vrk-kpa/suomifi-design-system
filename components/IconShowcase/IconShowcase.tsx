import { useTranslation } from 'next-export-i18n';
import { CSSProperties } from 'react';
import {
  BaseIconKeys,
  Block,
  DoctypeIconKeys,
  Heading,
  Icon,
  IllustrativeIconKeys,
  StaticIcon,
  ExternalLink,
} from 'suomifi-ui-components';
import { IconCategories } from '../../interfaces/interfaces';
import Divider from '../Divider/Divider';
import styles from './IconShowcase.module.scss';

interface IconShowcaseProps {
  iconCategories: IconCategories[];
}

const getExampleIcon = (
  id: string,
  itemId: string,
  label: string,
  style?: CSSProperties,
): JSX.Element => (
  <div className={styles.iconItem} key={id} style={{ ...style }}>
    {itemId === 'baseIcons' ? (
      <Icon icon={id as BaseIconKeys} className={styles.icon} />
    ) : (
      <StaticIcon
        icon={id as IllustrativeIconKeys | DoctypeIconKeys}
        className={styles.staticIcon}
      />
    )}
    <span>{label}</span>
  </div>
);

const IconShowcase: React.FunctionComponent<IconShowcaseProps> = ({
  iconCategories,
}) => {
  const { t } = useTranslation();
  return (
    <Block>
      {iconCategories.map((cat, index) => (
        <Block mb="l">
          <Block>
            <Heading variant="h2" className="mb-l">
              {cat.title}
            </Heading>
            <ExternalLink
              labelNewWindow={t('common.opens_in_a_new_tab')}
              href={cat.linkUrl}
            >
              {cat.linkTitle}
            </ExternalLink>
            <Block variant="div" mt="l" className={styles.iconsContainer}>
              {cat.icons.map((icon) => {
                return getExampleIcon(icon, cat.id, icon);
              })}
            </Block>
          </Block>
          {index !== 2 && <Divider />}
        </Block>
      ))}
    </Block>
  );
};

export default IconShowcase;
