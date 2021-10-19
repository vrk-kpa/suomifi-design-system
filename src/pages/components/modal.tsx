import React, { useState } from 'react';

import modalContent from '../../../locale/fi/modal.json';
import { defaultSuomifiTheme, ModalProps } from 'suomifi-ui-components';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import {
  Text,
  Paragraph,
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
} from 'components/ExampleComponents';
import {
  Heading,
  Text as ResponsiveText,
  Paragraph as ResponsiveParagraph,
} from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={modalContent.title} />
    <Heading variant="h1">{modalContent.title}</Heading>

    <ResponsiveParagraph variant="lead">
      <ResponsiveText variant="lead">{modalContent.intro}</ResponsiveText>
    </ResponsiveParagraph>

    <ConfirmExample title="" desc="" noCode />

    <NoteBox
      title={modalContent['note.title']}
      items={modalContent['note.items']}
    />

    {modalContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={(section as any).paragraphs}
        links={section.links}
      />
    ))}

    <ConfirmExample
      title={modalContent['example.confirm.heading']}
      desc={modalContent['example.confirm.description']}
      noCode={false}
    />

    <DefaultExample
      title={modalContent['example.default.heading']}
      desc={modalContent['example.default.description']}
    />
    <DefaultExample
      variant="smallScreen"
      title={modalContent['example.smallScreen.heading']}
      desc={modalContent['example.smallScreen.description']}
    />
  </Layout>
);

const ExpanderExampleContent = (): JSX.Element => (
  <>
    <Paragraph>
      <Text variant="bold">
        {modalContent['example.default.checkboxContentEdited']}
      </Text>
      <br />
      <Text>{modalContent['example.default.date']}</Text>
    </Paragraph>
    <Paragraph>
      <Text variant="bold">
        {modalContent['example.default.checkboxContentEditedBy']}
      </Text>
      <br />
      <Text>{modalContent['example.default.email']}</Text>
    </Paragraph>
  </>
);
ExpanderExampleContent.displayName = 'ExpanderExampleContent';

const DefaultExample = ({
  title,
  desc,
  ...passProps
}: Partial<ModalProps> & { title: string; desc: string }): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState({ 2: false, 3: false });

  const saveDisabled = !checked[2] && !checked[3];

  return (
    <ComponentDescription mainTitle={title} description={desc}>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <Button onClick={() => setVisible(true)}>
          {modalContent['example.openText']}
        </Button>
        <Modal
          {...passProps}
          appElementId="___gatsby"
          visible={visible}
          onEscKeyDown={() => setVisible(false)}
        >
          <ModalContent>
            <ModalTitle>{modalContent['example.default.title']}</ModalTitle>
            <Paragraph>
              <Text>{modalContent['example.default.content']}</Text>
            </Paragraph>
            <ExpanderGroup
              openAllText={modalContent['example.default.groupOpenAll']}
              closeAllText={modalContent['example.default.groupCloseAll']}
            >
              <Expander>
                <ExpanderTitle
                  ariaOpenText={modalContent['example.default.ariaOpen']}
                  ariaCloseText={modalContent['example.default.ariaClose']}
                  toggleButtonAriaDescribedBy="checkbox-id-1"
                >
                  <Checkbox
                    disabled
                    hintText={modalContent['example.default.checkboxHint1']}
                    id="checkbox-id-1"
                  >
                    {modalContent['example.default.checkboxLabel1']}
                  </Checkbox>
                </ExpanderTitle>
                <ExpanderContent>
                  <ExpanderExampleContent />
                </ExpanderContent>
              </Expander>
              <Expander>
                <ExpanderTitle
                  ariaOpenText={modalContent['example.default.ariaOpen']}
                  ariaCloseText={modalContent['example.default.ariaClose']}
                  toggleButtonAriaDescribedBy="checkbox-id-2"
                >
                  <Checkbox
                    hintText={modalContent['example.default.checkboxHint2']}
                    id="checkbox-id-2"
                    checked={checked[2]}
                    onClick={({ checkboxState }) => {
                      setChecked({ ...checked, 2: checkboxState });
                    }}
                  >
                    {modalContent['example.default.checkboxLabel2']}
                  </Checkbox>
                </ExpanderTitle>
                <ExpanderContent>
                  <ExpanderExampleContent />
                </ExpanderContent>
              </Expander>
              <Expander>
                <ExpanderTitle
                  ariaOpenText={modalContent['example.default.ariaOpen']}
                  ariaCloseText={modalContent['example.default.ariaClose']}
                  toggleButtonAriaDescribedBy="checkbox-id-3"
                >
                  <Checkbox
                    hintText={modalContent['example.default.checkboxHint3']}
                    id="checkbox-id-3"
                    checked={checked[3]}
                    onClick={({ checkboxState }) => {
                      setChecked({ ...checked, 3: checkboxState });
                    }}
                  >
                    {modalContent['example.default.checkboxLabel3']}
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
              {modalContent['example.default.ariaPublishDisabled']}
            </VisuallyHidden>
            <Button
              arial-label={modalContent['example.default.publish']}
              onClick={() => setVisible(false)}
              aria-disabled={saveDisabled}
              {...(saveDisabled ? { 'aria-describedby': 'save-disabled' } : {})}
            >
              {modalContent['example.default.publish']}
            </Button>
            <Button
              variant="secondary"
              arial-label={modalContent['example.default.cancel']}
              onClick={() => setVisible(false)}
            >
              {modalContent['example.default.cancel']}
            </Button>
          </ModalFooter>
        </Modal>
      </ComponentExample>
    </ComponentDescription>
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
  const [visible, setVisible] = useState(false);
  return (
    <ComponentDescription mainTitle={title} description={desc} noCode={noCode}>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <Button onClick={() => setVisible(true)}>
          {modalContent['example.openText']}
        </Button>
        <Modal
          {...passProps}
          scrollable={false}
          appElementId="___gatsby"
          visible={visible}
          onEscKeyDown={() => setVisible(false)}
        >
          <ModalContent>
            <ModalTitle>{modalContent['example.confirm.title']}</ModalTitle>
            <Paragraph>
              <Text>{modalContent['example.confirm.content']}</Text>
            </Paragraph>
          </ModalContent>
          <ModalFooter>
            <Button
              arial-label={modalContent['example.confirm.ariaSave']}
              onClick={() => setVisible(false)}
            >
              {modalContent['example.confirm.save']}
            </Button>
            <Button
              variant="secondary"
              arial-label={modalContent['example.confirm.ariaCancel']}
              onClick={() => setVisible(false)}
            >
              {modalContent['example.confirm.cancel']}
            </Button>
          </ModalFooter>
        </Modal>
      </ComponentExample>
    </ComponentDescription>
  );
};

export default Page;
