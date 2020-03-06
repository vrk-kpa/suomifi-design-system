import {
  Button as OrigButton,
  Expander as OrigExpander,
  Breadcrumb as OrigBreadcrumb,
  Toggle as OrigToggle,
  Dropdown as OrigDropdown,
  Link as OrigLink,
  Heading as OrigHeading,
  Text as OrigText,
  TextInput as OrigTextInput,
  SearchInput as OrigSearchInput,
  Icon as OrigIcon,
  StaticIcon as OrigStaticIcon,
  Block as OrigBlock,
} from 'suomifi-ui-components';
import { addDisplayNames } from 'components/ExampleComponentUtil';

export class Button extends OrigButton {}
addDisplayNames(Button, OrigButton, 'Button');

export class Expander extends OrigExpander {}
addDisplayNames(Expander, OrigExpander, 'Expander');

export class Breadcrumb extends OrigBreadcrumb {}
addDisplayNames(Breadcrumb, OrigBreadcrumb, 'Breadcrumb');

export class Toggle extends OrigToggle {}
addDisplayNames(Toggle, OrigToggle, 'Toggle');

export class Dropdown extends OrigDropdown {}
addDisplayNames(Dropdown, OrigDropdown, 'Dropdown');

export class Link extends OrigLink {}
addDisplayNames(Link, OrigLink, 'Link');

export class Heading extends OrigHeading {}
addDisplayNames(Heading, OrigHeading, 'Heading');

export class Text extends OrigText {}
addDisplayNames(Text, OrigText, 'Text');

export class TextInput extends OrigTextInput {}
addDisplayNames(TextInput, OrigText, 'TextInput');

export class SearchInput extends OrigSearchInput {}
addDisplayNames(SearchInput, OrigSearchInput, 'SearchInput');

export class Icon extends OrigIcon {}
addDisplayNames(Icon, OrigIcon, 'Icon');

export class StaticIcon extends OrigStaticIcon {}
addDisplayNames(StaticIcon, OrigStaticIcon, 'StaticIcon');

export class Block extends OrigBlock {}
addDisplayNames(Block, OrigBlock, 'Block');
