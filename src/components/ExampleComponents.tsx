import {
  Button as OrigButton,
  Panel as OrigPanel,
  Breadcrumb as OrigBreadcrumb,
  Toggle as OrigToggle,
  Dropdown as OrigDropdown,
  Link as OrigLink,
  Heading as OrigHeading,
  Text as OrigText,
  TextInput as OrigTextInput,
} from 'suomifi-ui-components';
import { addDisplayNames } from 'components/ExampleComponentUtil';

export class Button extends OrigButton {}
addDisplayNames(Button, OrigButton, 'Button');

export class Panel extends OrigPanel {}
addDisplayNames(Panel, OrigPanel, 'Panel');

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
