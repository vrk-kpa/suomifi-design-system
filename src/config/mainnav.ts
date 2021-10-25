import { MainNavData } from 'components/MainNavData';
import homeContent from '../../locale/fi/home.json';
import stylesContent from '../../locale/fi/styles.json';
import componentsContent from '../../locale/fi/components.json';
import infoContent from '../../locale/fi/info.json';

const mainNavData: MainNavData = {
  items: [
    { to: '/', label: homeContent.title },
    { to: '/styles/', label: stylesContent.title },
    { to: '/components/', label: componentsContent.title },
    { to: '/info/', label: infoContent.title },
  ],
};
export default mainNavData;
