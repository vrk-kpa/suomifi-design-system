import { Heading as OrigHeading, HeadingProps } from 'suomifi-ui-components';
import { getResponsiveComponent } from 'components/ResponsiveComponentsUtil';

export const Heading = (props: HeadingProps): JSX.Element => {
  return getResponsiveComponent(OrigHeading)(props);
};
