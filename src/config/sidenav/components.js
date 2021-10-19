import React from 'react';
import { StaticIcon } from 'suomifi-ui-components';

import componentsSideNavContent from '../../../locale/fi/components.json';
import modalContent from '../../../locale/fi/modal.json';
import searchinputContent from '../../../locale/fi/searchinput.json';
import iconContent from '../../../locale/fi/icon.json';
import languagemenuContent from '../../../locale/fi/languagemenu.json';
import expanderContent from '../../../locale/fi/expander.json';
import linkContent from '../../../locale/fi/link.json';
import blockContent from '../../../locale/fi/block.json';
import multiselectContent from '../../../locale/fi/multiselect.json';
import breadcrumbContent from '../../../locale/fi/breadcrumb.json';
import headingContent from '../../../locale/fi/heading.json';
import buttonContent from '../../../locale/fi/button.json';
import dropdownContent from '../../../locale/fi/dropdown.json';
import textContent from '../../../locale/fi/text.json';
import textareaContent from '../../../locale/fi/textarea.json';
import textinputContent from '../../../locale/fi/textinput.json';
import toggleContent from '../../../locale/fi/toggle.json';
import radiobuttonContent from '../../../locale/fi/radiobutton.json';
import checkboxContent from '../../../locale/fi/checkbox.json';

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
