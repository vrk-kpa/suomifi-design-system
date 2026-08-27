import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {
  Block,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
  defaultSuomifiTheme,
  ReorderableListItem,
  ReorderableList,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('reorderable_list_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('reorderable_list_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/ReorderableList"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph my="xl">
          <Text variant="lead">{t('reorderable_list_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{
            marginBottom: defaultSuomifiTheme.spacing.s,
            flexDirection: 'column',
          }}
        >
          <Heading
            as="h2"
            variant="h3"
            mb="l"
            style={{ alignSelf: 'flex-start' }}
          >
            {t('reorderable_list_page.example_1.example_heading')}
          </Heading>
          <ReorderableList
            moveButtonsPlacement="inline"
            aria-label={t('reorderable_list_page.example_1.aria_label')}
            editButtonText={t('reorderable_list_page.example_1.edit_button')}
            saveButtonText={t('reorderable_list_page.example_1.save_button')}
            revertButtonText={t(
              'reorderable_list_page.example_1.cancel_button',
            )}
            editModeInstructionHeading={t(
              'reorderable_list_page.example_1.instruction_heading',
            )}
            editModeInstructionText={t(
              'reorderable_list_page.example_1.instruction',
            )}
            announcements={{
              editModeActivated: () => 'Edit mode activated',
              editModeCancelled: () => 'Edit mode cancelled',
              movedUp: (label, pos, total) =>
                `${label} moved to position ${pos} of ${total}`,
              movedDown: (label, pos, total) =>
                `${label} moved to position ${pos} of ${total}`,
              movedToPosition: (label, pos, total) =>
                `${label} moved to position ${pos} of ${total}`,
              itemsSwapped: (a, b) => `${a} and ${b} have swapped positions`,
              orderReverted: () => 'Order reverted to original',
            }}
            onReorder={() => {
              return {};
            }}
          >
            <ReorderableListItem
              key={1}
              itemKey={'one'}
              ariaLabel={t(
                'reorderable_list_page.example_1.list_member_1_heading',
              )}
              moveUpButtonAriaLabel={`Move ${t(
                'reorderable_list_page.example_1.list_member_1_heading',
              )} up`}
              moveDownButtonAriaLabel={`Move ${t(
                'reorderable_list_page.example_1.list_member_1_heading',
              )} down`}
            >
              <Block>
                <Text variant="bold">
                  {t('reorderable_list_page.example_1.list_member_1_heading')}
                </Text>
                <Paragraph>
                  {t('reorderable_list_page.example_1.list_member_1_content')}
                </Paragraph>
              </Block>
            </ReorderableListItem>
            <ReorderableListItem
              key={2}
              itemKey={'two'}
              ariaLabel={t(
                'reorderable_list_page.example_1.list_member_2_heading',
              )}
              moveUpButtonAriaLabel={`Move ${t(
                'reorderable_list_page.example_1.list_member_2_heading',
              )} up`}
              moveDownButtonAriaLabel={`Move ${t(
                'reorderable_list_page.example_1.list_member_2_heading',
              )} down`}
            >
              <Block>
                <Text variant="bold">
                  {t('reorderable_list_page.example_1.list_member_2_heading')}
                </Text>
                <Paragraph>
                  {t('reorderable_list_page.example_1.list_member_2_content')}
                </Paragraph>
              </Block>
            </ReorderableListItem>
            <ReorderableListItem
              key={3}
              itemKey={'three'}
              ariaLabel={t(
                'reorderable_list_page.example_1.list_member_3_heading',
              )}
              moveUpButtonAriaLabel={`Move ${t(
                'reorderable_list_page.example_1.list_member_3_heading',
              )} up`}
              moveDownButtonAriaLabel={`Move ${t(
                'reorderable_list_page.example_1.list_member_3_heading',
              )} down`}
            >
              <Block>
                <Text variant="bold">
                  {t('reorderable_list_page.example_1.list_member_3_heading')}
                </Text>
                <Paragraph>
                  {t('reorderable_list_page.example_1.list_member_3_content')}
                </Paragraph>
              </Block>
            </ReorderableListItem>
          </ReorderableList>
        </ComponentExample>

        <Block variant="section" my="xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('reorderable_list_page.accessibility_list.point_1')}</li>
              <li>{t('reorderable_list_page.accessibility_list.point_2')}</li>
              <li>{t('reorderable_list_page.accessibility_list.point_3')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('reorderable_list_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph my="xl">
            {t('reorderable_list_page.what_does_the_component_contain.text_1')}
          </Paragraph>
          <Paragraph my="xl">
            {t('reorderable_list_page.what_does_the_component_contain.text_2')}
          </Paragraph>
          <Paragraph my="xl">
            {t('reorderable_list_page.what_does_the_component_contain.text_3')}
          </Paragraph>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('reorderable_list_page.size_and_usage.heading')}
          </Heading>
          <Paragraph my="xl">
            {t('reorderable_list_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph my="xl">
            {t('reorderable_list_page.size_and_usage.text_2')}
          </Paragraph>
          <Paragraph my="xl">
            {t('reorderable_list_page.size_and_usage.text_3')}
          </Paragraph>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
