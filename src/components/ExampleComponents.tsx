import {
  Breadcrumb as OrigBreadcrumb,
  Link as OrigLink,
  Text as OrigText,
  SearchInput as OrigSearchInput,
  Icon as OrigIcon,
  StaticIcon as OrigStaticIcon,
  Block as OrigBlock,
  LanguageMenu as OrigLanguageMenu,
  LanguageMenuItem as OrigLanguageMenuItem,
} from 'suomifi-ui-components';
import { addDisplayNames } from 'components/ExampleComponentUtil';

export class Breadcrumb extends OrigBreadcrumb {}
addDisplayNames(Breadcrumb, OrigBreadcrumb, 'Breadcrumb');

export class Link extends OrigLink {}
addDisplayNames(Link, OrigLink, 'Link');

export class Text extends OrigText {}
addDisplayNames(Text, OrigText, 'Text');

export class SearchInput extends OrigSearchInput {}
addDisplayNames(SearchInput, OrigSearchInput, 'SearchInput');

export class Icon extends OrigIcon {}
addDisplayNames(Icon, OrigIcon, 'Icon');

export class StaticIcon extends OrigStaticIcon {}
addDisplayNames(StaticIcon, OrigStaticIcon, 'StaticIcon');

export class Block extends OrigBlock {}
addDisplayNames(Block, OrigBlock, 'Block');

export class LanguageMenu extends OrigLanguageMenu {}
addDisplayNames(LanguageMenu, OrigLanguageMenu, 'LanguageMenu');

export class LanguageMenuItem extends OrigLanguageMenuItem {}
addDisplayNames(LanguageMenuItem, OrigLanguageMenuItem, 'LanguageMenuItem');
