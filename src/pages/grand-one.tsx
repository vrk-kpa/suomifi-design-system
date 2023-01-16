import SEO from 'components/seo';
import React from 'react';
import {
  Block,
  Button,
  ExternalLink,
  Heading,
  Paragraph,
  Text,
  suomifiDesignTokens,
} from 'suomifi-ui-components';
import InfoBox from '../GrandOne/InfoBox/InfoBox';
import SmallBox from '../GrandOne/SmallBox/SmallBox';
import '../GrandOne/GrandOnePage.css';

const Page = (): JSX.Element => (
  <>
    <SEO title="Grand One" />

    <Block variant="main">
      <Block variant="div" id="header">
        <Block variant="div" className="container">
          <img
            src="/grand_one/suomifi-logo.svg"
            alt="Suomi.fi logo"
            className="suomifi-logo"
          />
        </Block>
      </Block>

      <Block variant="div" id="hero">
        <Block variant="div" className="container">
          <Heading variant="h1hero">
            Suomi.fi Design System - raflaava otsikko
          </Heading>
          <Block mt="xxl">
            <Text variant="lead">Lorem ipsum dolor sit amet</Text>
          </Block>
          <Block variant="div" mt="xxl" className="buttons">
            <Button
              variant="link"
              icon="linkExternal"
              className="homepage-link"
            >
              Suomi.fi Design System
            </Button>
            <Button variant="link" icon="linkExternal">
              Github
            </Button>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section1">
        <Block variant="div" className="container">
          <Heading variant="h2">Tarinamme alku ja muut taustat</Heading>
          <Block mt="l">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </Block>
          <Block variant="div" mt="xxxl" className="boxes">
            <InfoBox heading="Saavutettavuus" icon="collaboration">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </InfoBox>
            <InfoBox heading="Avoimuus" icon="webDevelopment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </InfoBox>
            <InfoBox heading="Helppokäyttöisyys" icon="touch">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </InfoBox>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section2">
        <Block variant="div" className="container half-container">
          <Block variant="div" className="half">
            <Block mb="l">
              <Heading variant="h2">
                Patterneita, tyyliopasfiilistelyä tai muuta kivaa
              </Heading>
            </Block>
            <Block>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Paragraph>
            </Block>
          </Block>
          <Block variant="div" className="half">
            <Block
              style={{
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '200px',
              }}
            >
              Kuva placeholder
            </Block>
          </Block>
        </Block>
        <Block
          variant="div"
          className="container half-container"
          style={{ marginTop: '90px' }}
        >
          <Block variant="div" className="half">
            <Block mb="l">
              <Heading variant="h2">Joku siisti juttu tähän</Heading>
            </Block>
            <Block>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Paragraph>
            </Block>
          </Block>
          <Block variant="div" className="half">
            <Block
              style={{
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '400px',
              }}
            >
              Kuva placeholder
            </Block>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section3">
        <Block variant="div" className="container half-container">
          <Block variant="div" className="half">
            <Block
              style={{
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '400px',
              }}
            >
              Kuva placeholder
            </Block>
          </Block>
          <Block variant="div" className="half">
            <Block mb="l">
              <Heading variant="h2">
                Pääasia, että tiimi toimii ja saadaan palautetta -
                prosessikuvaus tähän?
              </Heading>
            </Block>
            <Block>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Paragraph>
            </Block>
          </Block>
        </Block>
        <Block
          variant="div"
          className="container half-container"
          style={{ marginTop: '90px' }}
        >
          <Block variant="div" className="half">
            <Block mb="l">
              <Heading variant="h2">
                Jotain kivaa jalkauttamisesta ja sen sellaista?
              </Heading>
            </Block>
            <Block>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Paragraph>
            </Block>
          </Block>
          <Block variant="div" className="half">
            <Block
              style={{
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '600px',
              }}
            >
              Kuva placeholder
            </Block>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section4">
        <Block variant="div" className="container">
          <Heading variant="h2">
            Tulokset ja hyödyt - nostoja tai numeroita jne
          </Heading>
          <Block variant="div" className="boxes" mt="xl">
            <SmallBox>Jotain</SmallBox>
            <SmallBox>Jotain</SmallBox>
            <SmallBox>Jotain</SmallBox>
            <SmallBox>Jotain</SmallBox>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section5">
        <Block variant="div" className="container half-container">
          <Block variant="div" className="half">
            <Block mb="l">
              <Heading variant="h2">
                Suomi.fi Design Systemin tulevaisuus
              </Heading>
            </Block>
            <Block>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Paragraph>
            </Block>
          </Block>
          <Block variant="div" className="half">
            <Block
              style={{
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '500px',
              }}
            >
              Kuva placeholder
            </Block>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section6">
        <Block variant="div" className="container half-container">
          <Block variant="div" className="half">
            <Block mb="l">
              <Heading variant="h2">Tiimi ja tekijät</Heading>
            </Block>
            <Block>
              <Block mb="m">
                <Heading variant="h3">DVV</Heading>
              </Block>
              <Paragraph marginBottomSpacing="l">
                DVV Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Paragraph>
              <Block mb="m">
                <Heading variant="h3">Gofore</Heading>
              </Block>
              <Paragraph>
                Gofore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Paragraph>
            </Block>
          </Block>
          <Block variant="div" className="half">
            <Block
              style={{
                background: 'white',
                padding: suomifiDesignTokens.spacing.m,
              }}
            >
              <Block mb="l">
                <Heading variant="h3">Teknologiaa</Heading>
              </Block>
              <Paragraph marginBottomSpacing="l">
                Reacti pyörii ja Lorem Ipsum ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua
              </Paragraph>
              <ExternalLink
                labelNewWindow="Avautuu uudessa välilehdessä"
                href="https://github.com/vrk-kpa/suomifi-ui-components"
              >
                suomifi-ui-components
              </ExternalLink>
              <br />
              <ExternalLink
                labelNewWindow="Avautuu uudessa välilehdessä"
                href="https://github.com/vrk-kpa/suomifi-design-tokens"
              >
                suomifi-design-tokens
              </ExternalLink>
              <br />
              <ExternalLink
                labelNewWindow="Avautuu uudessa välilehdessä"
                href="https://github.com/vrk-kpa/suomifi-icons"
              >
                suomifi-icons
              </ExternalLink>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  </>
);

export default Page;
