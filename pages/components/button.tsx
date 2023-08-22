import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import {
  Heading,
  Text,
  Paragraph,
  Block,
  Button,
  ExternalLink,
  defaultSuomifiTheme,
  IconLogin,
} from 'suomifi-ui-components';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';

const ButtonPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('button_page.site_title')}</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('button_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Button"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('button_page.ingress')}</Text>
        </Paragraph>
        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('button_page.accessibility_list.point_1')}</li>
              <li>{t('button_page.accessibility_list.point_2')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2">
            {t('button_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('button_page.what_does_the_component_contain.text')}
          </Paragraph>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('button_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('button_page.size_and_usage.description')}
          </Paragraph>
          <ComponentExample
            variant="mobile_device"
            filterPropsInExample={['className']}
          >
            <Button fullWidth>Ensisijainen</Button>
            <Button fullWidth variant="secondaryLight" className="mt-l">
              Toissijainen vaalea
            </Button>
            <Button fullWidth variant="secondary" className="mt-l">
              Toissijainen
            </Button>
          </ComponentExample>
        </Block>

        <Block>
          <Heading variant="h2" className="my-xl">
            {t('button_page.example.primary.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('button_page.example.primary.description')}
          </Paragraph>

          <ComponentExample
            style={{
              padding: defaultSuomifiTheme.spacing.m,
              background: defaultSuomifiTheme.colors.whiteBase,
              gap: defaultSuomifiTheme.spacing.m,
            }}
          >
            <Block>
              <Button onClick={() => undefined}>
                {t('button_page.example.primary.label')}
              </Button>
            </Block>
            <Block>
              <Button disabled onClick={() => undefined}>
                {t('button_page.example.primary.label_disabled')}
              </Button>
            </Block>
          </ComponentExample>
        </Block>

        <Block>
          <Heading variant="h2" className="my-xl">
            {t('button_page.example.negative.title')}
          </Heading>

          <Paragraph className="mb-l">
            {t('button_page.example.negative.description')}
          </Paragraph>

          <ComponentExample
            style={{
              padding: defaultSuomifiTheme.spacing.m,
              background: defaultSuomifiTheme.colors.highlightBase,
              gap: defaultSuomifiTheme.spacing.m,
            }}
          >
            <Block>
              <Button variant="inverted" onClick={() => undefined}>
                {t('button_page.example.negative.label')}
              </Button>
            </Block>
            <Block>
              <Button variant="inverted" disabled onClick={() => undefined}>
                {t('button_page.example.negative.label_disabled')}
              </Button>
            </Block>
          </ComponentExample>
        </Block>

        <Block>
          <Heading variant="h2" className="my-xl">
            {t('button_page.example.secondary.title')}
          </Heading>

          <Paragraph className="mb-l">
            {t('button_page.example.secondary.description')}
          </Paragraph>

          <ComponentExample
            style={{
              padding: defaultSuomifiTheme.spacing.m,
              background: defaultSuomifiTheme.colors.whiteBase,
              gap: defaultSuomifiTheme.spacing.m,
            }}
          >
            <Block>
              <Button variant="secondary" onClick={() => undefined}>
                {t('button_page.example.secondary.label')}
              </Button>
            </Block>
            <Block>
              <Button variant="secondary" disabled onClick={() => undefined}>
                {t('button_page.example.secondary.label_disabled')}
              </Button>
            </Block>
          </ComponentExample>
        </Block>

        <Block>
          <Heading variant="h2" className="my-xl">
            {t('button_page.example.secondary_light.title')}
          </Heading>

          <Paragraph className="mb-l">
            {t('button_page.example.secondary_light.description')}
          </Paragraph>

          <ComponentExample
            style={{
              padding: defaultSuomifiTheme.spacing.m,
              background: defaultSuomifiTheme.colors.whiteBase,
              gap: defaultSuomifiTheme.spacing.m,
            }}
          >
            <Block>
              <Button variant="secondaryLight" onClick={() => undefined}>
                {t('button_page.example.secondary_light.label')}
              </Button>
            </Block>
            <Block>
              <Button
                variant="secondaryLight"
                disabled
                onClick={() => undefined}
              >
                {t('button_page.example.secondary_light.label_disabled')}
              </Button>
            </Block>
          </ComponentExample>
        </Block>

        <Block>
          <Heading variant="h2" className="my-xl">
            {t('button_page.example.secondary_no_border.title')}
          </Heading>

          <Paragraph className="mb-l">
            {t('button_page.example.secondary_no_border.description')}
          </Paragraph>

          <ComponentExample
            style={{
              padding: defaultSuomifiTheme.spacing.m,
              background: defaultSuomifiTheme.colors.whiteBase,
              gap: defaultSuomifiTheme.spacing.m,
            }}
          >
            <Block>
              <Button variant="secondaryNoBorder" onClick={() => undefined}>
                {t('button_page.example.secondary_no_border.label')}
              </Button>
            </Block>
            <Block>
              <Button
                variant="secondaryNoBorder"
                disabled
                onClick={() => undefined}
              >
                {t('button_page.example.secondary_no_border.label_disabled')}
              </Button>
            </Block>
          </ComponentExample>
        </Block>

        <Block>
          <Heading variant="h2" className="my-xl">
            {t('button_page.example.with_icon.title')}
          </Heading>

          <Paragraph className="mb-l">
            {t('button_page.example.with_icon.description')}
          </Paragraph>

          <ComponentExample
            style={{
              padding: defaultSuomifiTheme.spacing.m,
              marginBottom: defaultSuomifiTheme.spacing.s,
              background: defaultSuomifiTheme.colors.whiteBase,
              gap: defaultSuomifiTheme.spacing.m,
            }}
          >
            <Block>
              <Button icon={<IconLogin />} onClick={() => undefined}>
                {t('button_page.example.button.label_icon').replace(
                  '{{name}}',
                  t('button_page.example.primary.label'),
                )}
              </Button>
            </Block>
            <Block>
              <Button iconRight={<IconLogin />} onClick={() => undefined}>
                {t('button_page.example.button.label_icon_right').replace(
                  '{{name}}',
                  t('button_page.example.primary.label'),
                )}
              </Button>
            </Block>
          </ComponentExample>
          <ComponentExample
            style={{
              padding: defaultSuomifiTheme.spacing.m,
              marginBottom: defaultSuomifiTheme.spacing.s,
              background: defaultSuomifiTheme.colors.whiteBase,
              gap: defaultSuomifiTheme.spacing.m,
            }}
          >
            <Block>
              <Button
                icon={<IconLogin />}
                variant="secondaryLight"
                onClick={() => undefined}
              >
                {t('button_page.example.button.label_icon').replace(
                  '{{name}}',
                  t('button_page.example.secondary_light.label'),
                )}
              </Button>
            </Block>
            <Block>
              <Button
                iconRight={<IconLogin />}
                variant="secondaryLight"
                onClick={() => undefined}
              >
                {t('button_page.example.button.label_icon_right').replace(
                  '{{name}}',
                  t('button_page.example.secondary_light.label'),
                )}
              </Button>
            </Block>
          </ComponentExample>
          <ComponentExample
            style={{
              padding: defaultSuomifiTheme.spacing.m,
              marginBottom: defaultSuomifiTheme.spacing.s,
              background: defaultSuomifiTheme.colors.highlightBase,
              gap: defaultSuomifiTheme.spacing.m,
            }}
          >
            <Block>
              <Button
                icon={<IconLogin />}
                variant="inverted"
                onClick={() => undefined}
              >
                {t('button_page.example.button.label_icon').replace(
                  '{{name}}',
                  t('button_page.example.negative.label'),
                )}
              </Button>
            </Block>
            <Block>
              <Button
                iconRight={<IconLogin />}
                variant="inverted"
                onClick={() => undefined}
              >
                {t('button_page.example.button.label_icon_right').replace(
                  '{{name}}',
                  t('button_page.example.negative.label'),
                )}
              </Button>
            </Block>
          </ComponentExample>
          <ComponentExample
            style={{
              padding: defaultSuomifiTheme.spacing.m,
              marginBottom: defaultSuomifiTheme.spacing.s,
              background: defaultSuomifiTheme.colors.whiteBase,
              gap: defaultSuomifiTheme.spacing.m,
            }}
          >
            <Block>
              <Button
                icon={<IconLogin />}
                variant="secondary"
                onClick={() => undefined}
              >
                {t('button_page.example.button.label_icon').replace(
                  '{{name}}',
                  t('button_page.example.secondary.label'),
                )}
              </Button>
            </Block>
            <Block>
              <Button
                iconRight={<IconLogin />}
                variant="secondary"
                onClick={() => undefined}
              >
                {t('button_page.example.button.label_icon_right').replace(
                  '{{name}}',
                  t('button_page.example.secondary.label'),
                )}
              </Button>
            </Block>
          </ComponentExample>
          <ComponentExample
            style={{
              padding: defaultSuomifiTheme.spacing.m,
              background: defaultSuomifiTheme.colors.whiteBase,
              gap: defaultSuomifiTheme.spacing.m,
            }}
          >
            <Block>
              <Button
                icon={<IconLogin />}
                variant="secondaryNoBorder"
                onClick={() => undefined}
              >
                {t('button_page.example.button.label_icon').replace(
                  '{{name}}',
                  t('button_page.example.secondary_no_border.label'),
                )}
              </Button>
            </Block>
            <Block>
              <Button
                iconRight={<IconLogin />}
                variant="secondaryNoBorder"
                onClick={() => undefined}
              >
                {t('button_page.example.button.label_icon_right').replace(
                  '{{name}}',
                  t('button_page.example.secondary_no_border.label'),
                )}
              </Button>
            </Block>
          </ComponentExample>
        </Block>

        <Block>
          <Heading variant="h2" className="my-xl">
            {t('button_page.example.disabled.title')}
          </Heading>

          <Paragraph className="mb-l">
            {t('button_page.example.disabled.description')}
          </Paragraph>

          <ComponentExample
            style={{
              padding: defaultSuomifiTheme.spacing.m,
              background: defaultSuomifiTheme.colors.whiteBase,
              gap: defaultSuomifiTheme.spacing.m,
              flexWrap: 'wrap',
            }}
          >
            <Block>
              <Button disabled onClick={() => undefined}>
                {t('button_page.example.primary.label_disabled')}
              </Button>
            </Block>
            <Block>
              <Button
                disabled
                variant="secondaryLight"
                onClick={() => undefined}
              >
                {t('button_page.example.secondary_light.label_disabled')}
              </Button>
            </Block>
            <div
              style={{
                padding: 15,
                background: defaultSuomifiTheme.colors.highlightBase,
              }}
            >
              <Button disabled variant="inverted" onClick={() => undefined}>
                {t('button_page.example.negative.label_disabled')}
              </Button>
            </div>
            <Block>
              <Button disabled variant="secondary" onClick={() => undefined}>
                {t('button_page.example.secondary.label_disabled')}
              </Button>
            </Block>
            <Block>
              <Button
                disabled
                variant="secondaryNoBorder"
                onClick={() => undefined}
              >
                {t('button_page.example.secondary_no_border.label_disabled')}
              </Button>
            </Block>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default ButtonPage;
