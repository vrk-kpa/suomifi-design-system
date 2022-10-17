import React, { useState } from 'react';

import languageMenuContent from '../../../locale/fi/languagemenu.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import { LanguageMenu, LanguageMenuItem } from 'suomifi-ui-components';

const Page = (): JSX.Element => {
  const [language, setLanguage] = useState(
    languageMenuContent['example.menuitem1short'],
  );

  const pageContent = (
    <Layout sideNavData={sideNavData}>
      <SEO title={languageMenuContent.title} />
      <Heading variant="h1">{languageMenuContent.title}</Heading>

      <Paragraph variant="lead">
        <Text variant="lead">{languageMenuContent.intro}</Text>
      </Paragraph>

      <ComponentDescription>
        <ComponentExample>
          <LanguageMenu name={language}>
            <LanguageMenuItem
              onSelect={() =>
                setLanguage(languageMenuContent['example.menuitem1short'])
              }
              selected={
                language === languageMenuContent['example.menuitem1short']
              }
            >
              {languageMenuContent['example.menuitem1']}
            </LanguageMenuItem>
            <LanguageMenuItem
              onSelect={() =>
                setLanguage(languageMenuContent['example.menuitem2short'])
              }
              selected={
                language === languageMenuContent['example.menuitem2short']
              }
            >
              {languageMenuContent['example.menuitem2']}
            </LanguageMenuItem>
            <LanguageMenuItem
              onSelect={() =>
                setLanguage(languageMenuContent['example.menuitem3short'])
              }
              selected={
                language === languageMenuContent['example.menuitem3short']
              }
            >
              {languageMenuContent['example.menuitem3']}
            </LanguageMenuItem>
          </LanguageMenu>
        </ComponentExample>
      </ComponentDescription>

      <NoteBox
        title={languageMenuContent['note.title']}
        items={languageMenuContent['note.items']}
      />

      {languageMenuContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={section.paragraphs}
          links={section.links}
        />
      ))}
    </Layout>
  );
  return pageContent;
};
export default Page;
