import { useTranslation } from 'next-export-i18n';

import { Block, ExternalLink, Heading } from 'suomifi-ui-components';

import Divider from '../Divider/Divider';
import { BaseIcons, IllustrativeIcons, DoctypeIcons } from '../../utils/icons';
import styles from './IconShowcase.module.scss';

const iconCategories = [
  {
    id: 'baseIcons',
    title: 'icons.base_icons.title',
    icons: <BaseIcons />,
    linkTitle: 'icons.base_icons.link_title',
    linkUrl:
      'https://github.com/vrk-kpa/suomifi-icons/tree/master/assets/baseIcons',
  },
  {
    id: 'illustrativeIcons',
    title: 'icons.illustrative_icons.title',
    icons: <IllustrativeIcons />,
    linkTitle: 'icons.illustrative_icons.link_title',
    linkUrl:
      'https://github.com/vrk-kpa/suomifi-icons/tree/master/assets/illustrativeIcons',
  },
  {
    id: 'doctypeIcons',
    title: 'icons.doctype_icons.title',
    icons: <DoctypeIcons />,
    linkTitle: 'icons.doctype_icons.link_title',
    linkUrl:
      'https://github.com/vrk-kpa/suomifi-icons/tree/master/assets/doctypeIcons',
  },
];

const IconShowcase: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Block>
      {iconCategories.map((category, index) => (
        <Block mb="l" key={index}>
          <Block>
            <Heading variant="h2" className="mb-l">
              {t(category.title)}
            </Heading>
            <ExternalLink
              labelNewWindow={t('common.opens_in_a_new_tab')}
              href={category.linkUrl}
            >
              {t(category.linkTitle)}
            </ExternalLink>
            <Block variant="div" mt="l" className={styles.iconsContainer}>
              {category.icons}
            </Block>
          </Block>
          {index !== 2 && <Divider />}
        </Block>
      ))}
    </Block>
  );
};

export default IconShowcase;
