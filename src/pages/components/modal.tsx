import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { suomifiDesignTokens, ModalProps } from 'suomifi-ui-components';
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
import Section, { Props as SectionProps } from 'components/Section';
import ComponentExample from 'components/ComponentExample';

const Page = (): JSX.Element => (
  <Translation ns={['modal']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading variant="h1">{t('title')}</Heading>

        <ResponsiveParagraph.lead>
          <ResponsiveText.lead>{t('intro')}</ResponsiveText.lead>
        </ResponsiveParagraph.lead>

        <ConfirmExample title="" desc="" noCode />

        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t<SectionProps[]>('sections').map((section, index) => (
          <Section
            key={index}
            mainTitle={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
          />
        ))}

        <ConfirmExample
          title={t('example.confirm.heading')}
          desc={t('example.confirm.description')}
          noCode={false}
        />

        <DefaultExample
          title={t('example.default.heading')}
          desc={t('example.default.description')}
        />
        <DefaultExample
          variant="smallScreen"
          title={t('example.smallScreen.heading')}
          desc={t('example.smallScreen.description')}
        />
      </Layout>
    )}
  </Translation>
);

const ExpanderExampleContent = (): JSX.Element => (
  <Translation ns={['modal']}>
    {(t) => (
      <>
        <Paragraph>
          <Text.bold>{t('example.default.checkboxContentEdited')}</Text.bold>
          <br />
          <Text>{t('example.default.date')}</Text>
        </Paragraph>
        <Paragraph>
          <Text.bold>{t('example.default.checkboxContentEditedBy')}</Text.bold>
          <br />
          <Text>{t('example.default.email')}</Text>
        </Paragraph>
      </>
    )}
  </Translation>
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
    <Translation ns={['modal']}>
      {(t) => (
        <ComponentDescription mainTitle={title} description={desc}>
          <ComponentExample
            style={{ marginBottom: suomifiDesignTokens.spacing.s }}
          >
            <Button onClick={() => setVisible(true)}>
              {t('example.openText')}
            </Button>
            <Modal
              {...passProps}
              appElementId="___gatsby"
              visible={visible}
              onEscKeyDown={() => setVisible(false)}
            >
              <ModalContent>
                <ModalTitle>{t('example.default.title')}</ModalTitle>
                <Paragraph>
                  <Text>{t('example.default.content')}</Text>
                </Paragraph>
                <ExpanderGroup
                  openAllText={t('example.default.groupOpenAll')}
                  closeAllText={t('example.default.groupCloseAll')}
                >
                  <Expander>
                    <ExpanderTitle
                      ariaOpenText={t('example.default.ariaOpen')}
                      ariaCloseText={t('example.default.ariaClose')}
                      toggleButtonAriaDescribedBy="checkbox-id-1"
                    >
                      <Checkbox
                        disabled
                        hintText={t('example.default.checkboxHint1')}
                        id="checkbox-id-1"
                      >
                        {t('example.default.checkboxLabel1')}
                      </Checkbox>
                    </ExpanderTitle>
                    <ExpanderContent>
                      <ExpanderExampleContent />
                    </ExpanderContent>
                  </Expander>
                  <Expander>
                    <ExpanderTitle
                      ariaOpenText={t('example.default.ariaOpen')}
                      ariaCloseText={t('example.default.ariaClose')}
                      toggleButtonAriaDescribedBy="checkbox-id-2"
                    >
                      <Checkbox
                        hintText={t('example.default.checkboxHint2')}
                        id="checkbox-id-2"
                        checked={checked[2]}
                        onClick={({ checkboxState }) => {
                          setChecked({ ...checked, 2: checkboxState });
                        }}
                      >
                        {t('example.default.checkboxLabel2')}
                      </Checkbox>
                    </ExpanderTitle>
                    <ExpanderContent>
                      <ExpanderExampleContent />
                    </ExpanderContent>
                  </Expander>
                  <Expander>
                    <ExpanderTitle
                      ariaOpenText={t('example.default.ariaOpen')}
                      ariaCloseText={t('example.default.ariaClose')}
                      toggleButtonAriaDescribedBy="checkbox-id-3"
                    >
                      <Checkbox
                        hintText={t('example.default.checkboxHint3')}
                        id="checkbox-id-3"
                        checked={checked[3]}
                        onClick={({ checkboxState }) => {
                          setChecked({ ...checked, 3: checkboxState });
                        }}
                      >
                        {t('example.default.checkboxLabel3')}
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
                  {t('example.default.ariaPublishDisabled')}
                </VisuallyHidden>
                <Button
                  arial-label={t('example.default.publish')}
                  onClick={() => setVisible(false)}
                  aria-disabled={saveDisabled}
                  {...(saveDisabled
                    ? { 'aria-describedby': 'save-disabled' }
                    : {})}
                >
                  {t('example.default.publish')}
                </Button>
                <Button
                  variant="secondary"
                  arial-label={t('example.default.cancel')}
                  onClick={() => setVisible(false)}
                >
                  {t('example.default.cancel')}
                </Button>
              </ModalFooter>
            </Modal>
          </ComponentExample>
        </ComponentDescription>
      )}
    </Translation>
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
    <Translation ns={['modal']}>
      {(t) => (
        <ComponentDescription
          mainTitle={title}
          description={desc}
          noCode={noCode}
        >
          <ComponentExample
            style={{ marginBottom: suomifiDesignTokens.spacing.s }}
          >
            <Button onClick={() => setVisible(true)}>
              {t('example.openText')}
            </Button>
            <Modal
              {...passProps}
              scrollable={false}
              appElementId="___gatsby"
              visible={visible}
              onEscKeyDown={() => setVisible(false)}
            >
              <ModalContent>
                <ModalTitle>{t('example.confirm.title')}</ModalTitle>
                <Paragraph>
                  <Text>{t('example.confirm.content')}</Text>
                </Paragraph>
              </ModalContent>
              <ModalFooter>
                <Button
                  arial-label={t('example.confirm.ariaSave')}
                  onClick={() => setVisible(false)}
                >
                  {t('example.confirm.save')}
                </Button>
                <Button
                  variant="secondary"
                  arial-label={t('example.confirm.ariaCancel')}
                  onClick={() => setVisible(false)}
                >
                  {t('example.confirm.cancel')}
                </Button>
              </ModalFooter>
            </Modal>
          </ComponentExample>
        </ComponentDescription>
      )}
    </Translation>
  );
};

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
