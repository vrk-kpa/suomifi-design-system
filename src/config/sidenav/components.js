import React from 'react';
import { StaticIcon } from 'suomifi-ui-components';

import * as componentsSideNavContent from '../../../locale/fi/components.json';
import * as modalContent from '../../../locale/fi/modal.json';
import * as searchinputContent from '../../../locale/fi/searchinput.json';
import * as iconContent from '../../../locale/fi/icon.json';
import * as languagemenuContent from '../../../locale/fi/languagemenu.json';
import * as expanderContent from '../../../locale/fi/expander.json';
import * as linkContent from '../../../locale/fi/link.json';
import * as blockContent from '../../../locale/fi/block.json';
import * as multiselectContent from '../../../locale/fi/multiselect.json';
import * as breadcrumbContent from '../../../locale/fi/breadcrumb.json';
import * as headingContent from '../../../locale/fi/heading.json';
import * as buttonContent from '../../../locale/fi/button.json';
import * as dropdownContent from '../../../locale/fi/dropdown.json';
import * as textContent from '../../../locale/fi/text.json';
import * as textareaContent from '../../../locale/fi/textarea.json';
import * as textinputContent from '../../../locale/fi/textinput.json';
import * as toggleContent from '../../../locale/fi/toggle.json';
import * as radiobuttonContent from '../../../locale/fi/radiobutton.json';
import * as checkboxContent from '../../../locale/fi/checkbox.json';

export default {
  title: componentsSideNavContent.title,
  icon: <StaticIcon icon="puzzle" />,
  items: [
    {
      to: '/components/',
      showAsTo: '/components/info/',
      label: componentsSideNavContent['info.title'],
    },
    { to: '/components/modal/', label: modalContent.title },
    { to: '/components/searchinput/', label: searchinputContent.title },
    { to: '/components/icon/', label: iconContent.title },
    { to: '/components/languagemenu/', label: languagemenuContent.title },
    { to: '/components/expander/', label: expanderContent.title },
    { to: '/components/link/', label: linkContent.title },
    { to: '/components/block/', label: blockContent.title },
    { to: '/components/multiselect/', label: multiselectContent.title },
    { to: '/components/breadcrumb/', label: breadcrumbContent.title },
    { to: '/components/heading/', label: headingContent.title },
    { to: '/components/button/', label: buttonContent.title },
    { to: '/components/dropdown/', label: dropdownContent.title },
    { to: '/components/text/', label: textContent.title },
    { to: '/components/textarea/', label: textareaContent.title },
    { to: '/components/textinput/', label: textinputContent.title },
    { to: '/components/toggle/', label: toggleContent.title },
    { to: '/components/radiobutton/', label: radiobuttonContent.title },
    { to: '/components/checkbox/', label: checkboxContent.title },
  ],
};
