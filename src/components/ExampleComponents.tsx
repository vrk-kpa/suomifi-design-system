import React, { Component } from 'react';
import {
  Alert as OrigAlert,
  AlertProps,
  InlineAlert as OrigInlineAlert,
  InlineAlertProps,
  Block as OrigBlock,
  Button as OrigButton,
  ButtonProps,
  Breadcrumb as OrigBreadcrumb,
  BreadcrumbProps,
  BreadcrumbLink as OrigBreadcrumbLink,
  BreadcrumbLinkProps,
  Checkbox as OrigCheckbox,
  CheckboxProps,
  Dropdown as OrigDropdown,
  DropdownProps,
  DropdownItem as OrigDropdownItem,
  DropdownItemProps,
  ExpanderGroup as OrigExpanderGroup,
  ExpanderGroupProps,
  Expander as OrigExpander,
  ExpanderProps,
  ExpanderTitle as OrigExpanderTitle,
  ExpanderTitleProps,
  ExpanderTitleButton as OrigExpanderTitleButton,
  ExpanderTitleButtonProps,
  ExpanderContent as OrigExpanderContent,
  ExpanderContentProps,
  Heading as OrigHeading,
  HeadingProps,
  Icon as OrigIcon,
  LanguageMenu as OrigLanguageMenu,
  LanguageMenuItem as OrigLanguageMenuItem,
  Link as OrigLink,
  LinkProps,
  ExternalLink as OrigExternalLink,
  ExternalLinkProps,
  Modal as OrigModal,
  ModalProps,
  ModalTitle as OrigModalTitle,
  ModalTitleProps,
  ModalContent as OrigModalContent,
  ModalContentProps,
  ModalFooter as OrigModalFooter,
  ModalFooterProps,
  MultiSelect as OrigMultiSelect,
  MultiSelectProps,
  MultiSelectData,
  Notification as OrigNotification,
  NotificationProps,
  Paragraph as OrigParagraph,
  RadioButton as OrigRadioButton,
  RadioButtonProps,
  RadioButtonGroup as OrigRadioButtonGroup,
  RadioButtonGroupProps,
  SingleSelect as OrigSingleSelect,
  SearchInput as OrigSearchInput,
  StaticIcon as OrigStaticIcon,
  Text as OrigText,
  Textarea as OrigTextarea,
  TextareaProps,
  TextInput as OrigTextInput,
  TextInputProps,
  ToggleButton as OrigToggleButton,
  ToggleButtonProps,
  ToggleInput as OrigToggleInput,
  ToggleInputProps,
  VisuallyHidden as OrigVisuallyHidden,
  LanguageMenuItemProps,
} from 'suomifi-ui-components';
import { addDisplayNames } from 'components/ExampleComponentUtil';

export const InlineAlert = (props: InlineAlertProps): JSX.Element => (
  <OrigInlineAlert {...props} />
);
addDisplayNames(InlineAlert, OrigInlineAlert, 'InlineAlert');

export const Alert = (props: AlertProps): JSX.Element => (
  <OrigAlert {...props} />
);
addDisplayNames(Alert, OrigAlert, 'Alert');

export const Notification = (props: NotificationProps): JSX.Element => (
  <OrigNotification {...props} />
);
addDisplayNames(Notification, OrigNotification, 'Notification');

export class Block extends OrigBlock {}
addDisplayNames(Block, OrigBlock, 'Block');
export class Breadcrumb extends Component<BreadcrumbProps> {
  render(): JSX.Element {
    return <OrigBreadcrumb {...this.props} />;
  }
}
addDisplayNames(Breadcrumb, OrigBreadcrumb, 'Breadcrumb');

export class BreadcrumbLink extends Component<BreadcrumbLinkProps> {
  render(): JSX.Element {
    return <OrigBreadcrumbLink {...this.props} />;
  }
}
addDisplayNames(BreadcrumbLink, OrigBreadcrumbLink, 'BreadcrumbLink');
export class Button extends Component<ButtonProps> {
  render(): JSX.Element {
    return <OrigButton {...this.props} />;
  }
}
addDisplayNames(Button, OrigButton, 'Button');

export class Checkbox extends Component<CheckboxProps> {
  render(): JSX.Element {
    return <OrigCheckbox {...this.props} />;
  }
}
addDisplayNames(Checkbox, OrigCheckbox, 'Checkbox');

export class Dropdown extends Component<DropdownProps> {
  render(): JSX.Element {
    return <OrigDropdown {...this.props} />;
  }
}
addDisplayNames(Dropdown, OrigDropdown, 'Dropdown');

export class DropdownItem extends Component<DropdownItemProps> {
  render(): JSX.Element {
    return <OrigDropdownItem {...this.props} />;
  }
}
addDisplayNames(DropdownItem, OrigDropdownItem, 'DropdownItem');

export class Expander extends Component<ExpanderProps> {
  render(): JSX.Element {
    return <OrigExpander {...this.props} />;
  }
}
addDisplayNames(Expander, OrigExpander, 'Expander');

export class ExpanderGroup extends Component<ExpanderGroupProps> {
  render(): JSX.Element {
    return <OrigExpanderGroup {...this.props} />;
  }
}
addDisplayNames(ExpanderGroup, OrigExpanderGroup, 'ExpanderGroup');

export class ExpanderContent extends Component<ExpanderContentProps> {
  render(): JSX.Element {
    return <OrigExpanderContent {...this.props} />;
  }
}
addDisplayNames(ExpanderContent, OrigExpanderGroup, 'ExpanderContent');

export class ExpanderTitle extends Component<ExpanderTitleProps> {
  render(): JSX.Element {
    return <OrigExpanderTitle {...this.props} />;
  }
}
addDisplayNames(ExpanderTitle, OrigExpanderTitle, 'ExpanderTitle');

export class ExpanderTitleButton extends Component<ExpanderTitleButtonProps> {
  render(): JSX.Element {
    return <OrigExpanderTitleButton {...this.props} />;
  }
}
addDisplayNames(
  ExpanderTitleButton,
  OrigExpanderTitleButton,
  'ExpanderTitleButton',
);

export class Heading extends Component<HeadingProps> {
  render(): JSX.Element {
    return <OrigHeading {...this.props} />;
  }
}
addDisplayNames(Heading, OrigHeading, 'Heading');

export class Icon extends OrigIcon {}
addDisplayNames(Icon, OrigIcon, 'Icon');

export class LanguageMenu extends OrigLanguageMenu {}
addDisplayNames(LanguageMenu, OrigLanguageMenu, 'LanguageMenu');

export class LanguageMenuItem extends Component<LanguageMenuItemProps> {
  render(): JSX.Element {
    return <OrigLanguageMenuItem {...this.props} />;
  }
}
addDisplayNames(LanguageMenuItem, OrigLanguageMenuItem, 'LanguageMenuItem');
export class Link extends Component<LinkProps> {
  render(): JSX.Element {
    return <OrigLink {...this.props} />;
  }
}
addDisplayNames(Link, OrigLink, 'Link');

export class ExternalLink extends Component<ExternalLinkProps> {
  render(): JSX.Element {
    return <OrigExternalLink {...this.props} />;
  }
}
addDisplayNames(ExternalLink, OrigExternalLink, 'ExternalLink');

export class Modal extends Component<ModalProps> {
  render(): JSX.Element {
    return <OrigModal {...this.props} />;
  }
}
addDisplayNames(Modal, OrigModal, 'Modal');

export class ModalContent extends Component<ModalContentProps> {
  render(): JSX.Element {
    return <OrigModalContent {...this.props} />;
  }
}
addDisplayNames(ModalContent, OrigModalContent, 'ModalContent');

export class ModalTitle extends Component<ModalTitleProps> {
  render(): JSX.Element {
    return <OrigModalTitle {...this.props} />;
  }
}
addDisplayNames(ModalTitle, OrigModalTitle, 'ModalTitle');

export class ModalFooter extends Component<ModalFooterProps> {
  render(): JSX.Element {
    return <OrigModalFooter {...this.props} />;
  }
}
addDisplayNames(ModalFooter, OrigModalFooter, 'ModalFooter');

export const MultiSelect = function <T extends MultiSelectData>(
  props: MultiSelectProps<T>,
): JSX.Element {
  return <OrigMultiSelect {...props} />;
};
addDisplayNames(MultiSelect, OrigMultiSelect, 'MultiSelect');

export class Paragraph extends OrigParagraph {}
addDisplayNames(Paragraph, OrigParagraph, 'Paragraph');

export const RadioButton = (props: RadioButtonProps): JSX.Element => (
  <OrigRadioButton {...props} />
);
addDisplayNames(RadioButton, OrigRadioButton, 'RadioButton');

export const RadioButtonGroup = (props: RadioButtonGroupProps): JSX.Element => (
  <OrigRadioButtonGroup {...props} />
);
addDisplayNames(RadioButtonGroup, OrigRadioButtonGroup, 'RadioButtonGroup');

export class SearchInput extends OrigSearchInput {}
addDisplayNames(SearchInput, OrigSearchInput, 'SearchInput');

export const SingleSelect = (props: any): JSX.Element => (
  <OrigSingleSelect {...props} />
);
addDisplayNames(SingleSelect, OrigSingleSelect, 'SingleSelect');

export class StaticIcon extends OrigStaticIcon {}
addDisplayNames(StaticIcon, OrigStaticIcon, 'StaticIcon');

export class Text extends OrigText {}
addDisplayNames(Text, OrigText, 'Text');

export const Textarea = (props: TextareaProps): JSX.Element => (
  <OrigTextarea {...props} />
);
addDisplayNames(Textarea, OrigTextarea, 'Textarea');

export const TextInput = (props: TextInputProps): JSX.Element => (
  <OrigTextInput {...props} />
);
addDisplayNames(TextInput, OrigTextInput, 'TextInput');

export const ToggleButton = (props: ToggleButtonProps): JSX.Element => (
  <OrigToggleButton {...props} />
);
addDisplayNames(ToggleButton, OrigToggleButton, 'ToggleButton');

export const ToggleInput = (props: ToggleInputProps): JSX.Element => (
  <OrigToggleInput {...props} />
);

addDisplayNames(ToggleInput, OrigToggleInput, 'ToggleInput');

export class VisuallyHidden extends Component<any> {
  displayName: 'Button';
  render(): JSX.Element {
    return <OrigVisuallyHidden {...this.props} />;
  }
}
addDisplayNames(VisuallyHidden, OrigVisuallyHidden, 'VisuallyHidden');
