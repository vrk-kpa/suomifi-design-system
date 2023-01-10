import { NextPage } from 'next';
import React, { useState } from 'react';
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
  ModalProps,
  Modal,
  ModalContent,
  ModalTitle,
  ModalFooter,
  Button,
  Expander,
  ExpanderGroup,
  ExpanderContent,
  ExpanderTitle,
  Checkbox,
  VisuallyHidden,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('modal_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('modal_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Modal"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('modal_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section">
          <ConfirmExample title="" desc="" noCode />
        </Block>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('modal_page.accessibility_list.point_1')}</li>
              <li>{t('modal_page.accessibility_list.point_2')}</li>
              <li>{t('modal_page.accessibility_list.point_3')}</li>
              <li>{t('modal_page.accessibility_list.point_4')}</li>
              <li>{t('modal_page.accessibility_list.point_5')}</li>
              <li>{t('modal_page.accessibility_list.point_6')}</li>
              <li>{t('modal_page.accessibility_list.point_7')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('modal_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('modal_page.what_does_the_component_contain.text')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('modal_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('modal_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('modal_page.example.confirm.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('modal_page.example.confirm.description')}
          </Paragraph>
        </Block>

        <ConfirmExample title="" desc="" noCode={false} />

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('modal_page.example.default.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('modal_page.example.default.description')}
          </Paragraph>
        </Block>

        <DefaultExample />

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('modal_page.example.small_screen.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('modal_page.example.small_screen.description')}
          </Paragraph>
        </Block>

        <DefaultExample variant="smallScreen" />
      </SideNavLayout>
    </>
  );
};

export default Page;

const ExpanderExampleContent = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <Paragraph>
        <Text variant="bold">
          {t('modal_page.example.default.checkbox_content_edited')}
        </Text>
        <br />
        <Text>{t('modal_page.example.default.date')}</Text>
      </Paragraph>
      <Paragraph>
        <Text variant="bold">
          {t('modal_page.example.default.checkbox_content_edited_by')}
        </Text>
        <br />
        <Text>{t('modal_page.example.default.email')}</Text>
      </Paragraph>
    </>
  );
};

ExpanderExampleContent.displayName = 'ExpanderExampleContent';

const DefaultExample = ({ ...passProps }: Partial<ModalProps>): JSX.Element => {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState({ 2: false, 3: false });

  const saveDisabled = !checked[2] && !checked[3];

  return (
    <ComponentExample>
      <Button onClick={() => setVisible(true)}>
        {t('modal_page.example.open_text')}
      </Button>
      <Modal
        {...passProps}
        appElementId="__next"
        visible={visible}
        onEscKeyDown={() => setVisible(false)}
      >
        <ModalContent>
          <ModalTitle>{t('modal_page.example.default.title')}</ModalTitle>
          <Paragraph>
            <Text>{t('modal_page.example.default.content')}</Text>
          </Paragraph>
          <ExpanderGroup
            openAllText={t('modal_page.example.default.group_open_all')}
            closeAllText={t('modal_page.example.default.group_close_all')}
          >
            <Expander>
              <ExpanderTitle
                ariaOpenText={t('modal_page.example.default.aria_open')}
                ariaCloseText={t('modal_page.example.default.aria_close')}
                toggleButtonAriaDescribedBy="checkbox-id-1"
              >
                <Checkbox
                  disabled
                  hintText={t('modal_page.example.default.checkbox_hint1')}
                  id="checkbox-id-1"
                >
                  {t('modal_page.example.default.checkbox_label1')}
                </Checkbox>
              </ExpanderTitle>
              <ExpanderContent>
                <ExpanderExampleContent />
              </ExpanderContent>
            </Expander>
            <Expander>
              <ExpanderTitle
                ariaOpenText={t('modal_page.example.default.aria_open')}
                ariaCloseText={t('modal_page.example.default.aria_close')}
                toggleButtonAriaDescribedBy="checkbox-id-2"
              >
                <Checkbox
                  hintText={t('modal_page.example.default.checkbox_hint2')}
                  id="checkbox-id-2"
                  checked={checked[2]}
                  onClick={({ checkboxState }) => {
                    setChecked({ ...checked, 2: checkboxState });
                  }}
                >
                  {t('modal_page.example.default.checkbox_label2')}
                </Checkbox>
              </ExpanderTitle>
              <ExpanderContent>
                <ExpanderExampleContent />
              </ExpanderContent>
            </Expander>
            <Expander>
              <ExpanderTitle
                ariaOpenText={t('modal_page.example.default.aria_open')}
                ariaCloseText={t('modal_page.example.default.aria_close')}
                toggleButtonAriaDescribedBy="checkbox-id-3"
              >
                <Checkbox
                  hintText={t('modal_page.example.default.checkbox_hint3')}
                  id="checkbox-id-3"
                  checked={checked[3]}
                  onClick={({ checkboxState }) => {
                    setChecked({ ...checked, 3: checkboxState });
                  }}
                >
                  {t('modal_page.example.default.checkbox_label3')}
                </Checkbox>
              </ExpanderTitle>
              <ExpanderContent>
                <ExpanderExampleContent />
              </ExpanderContent>
            </Expander>
          </ExpanderGroup>
        </ModalContent>
        <ModalFooter>
          <VisuallyHidden id="save-disabled">
            {t('modal_page.example.default.aria_publish_disabled')}
          </VisuallyHidden>
          <Button
            arial-label={t('modal_page.example.default.publish')}
            onClick={() => setVisible(false)}
            aria-disabled={saveDisabled}
            {...(saveDisabled ? { 'aria-describedby': 'save-disabled' } : {})}
          >
            {t('modal_page.example.default.publish')}
          </Button>
          <Button
            variant="secondary"
            arial-label={t('modal_page.example.default.cancel')}
            onClick={() => setVisible(false)}
          >
            {t('modal_page.example.default.cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </ComponentExample>
  );
};

const ConfirmExample = ({
  title,
  desc,
  noCode,
  ...passProps
}: Partial<ModalProps> & {
  title: string;
  desc: string;
  noCode: boolean;
}): JSX.Element => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  return (
    <ComponentExample>
      <Button onClick={() => setVisible(true)}>
        {t('modal_page.example.open_text')}
      </Button>
      <Modal
        {...passProps}
        scrollable={false}
        appElementId="__next"
        visible={visible}
        onEscKeyDown={() => setVisible(false)}
      >
        <ModalContent>
          <ModalTitle>{t('modal_page.example.confirm.title')}</ModalTitle>
          <Paragraph>
            <Text>{t('modal_page.example.confirm.content')}</Text>
          </Paragraph>
        </ModalContent>
        <ModalFooter>
          <Button
            arial-label={t('modal_page.example.confirm.aria_save')}
            onClick={() => setVisible(false)}
          >
            {t('modal_page.example.confirm.save')}
          </Button>
          <Button
            variant="secondary"
            arial-label={t('modal_page.example.confirm.aria_cancel')}
            onClick={() => setVisible(false)}
          >
            {t('modal_page.example.confirm.cancel')}
          </Button>
        </ModalFooter>
      </Modal>
    </ComponentExample>
  );
};
