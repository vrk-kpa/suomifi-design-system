import {
  Button as OrigButton,
  Panel as OrigPanel,
} from 'suomifi-ui-components';
import { addDisplayNames } from 'components/ExampleComponentUtil';

export class Button extends OrigButton {}
addDisplayNames(Button, OrigButton, 'Button');

export class Panel extends OrigPanel {}
addDisplayNames(Panel, OrigPanel, 'Panel');
