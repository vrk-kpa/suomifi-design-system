import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Block,
  ExternalLink,
  Heading,
  Paragraph,
  Text,
  suomifiDesignTokens,
  Icon,
  StaticIcon,
  VisuallyHidden,
} from 'suomifi-ui-components';
import BoxWithIcon from '../GrandOne/BoxWithIcon/BoxWithIcon';

const Page: NextPage = () => (
  <>
    <Head>
      <title>Grand One | Suomi.fi Design System</title>
    </Head>

    <Block className="grand-one" variant="main" id="main">
      <Block variant="div" id="hero">
        <Block variant="div" className="container"></Block>
      </Block>

      <Block variant="div" id="section1">
        <Block variant="div" className="container">
          <Block style={{ textAlign: 'center' }}>
            <img src="/grand-one/suomifi_flag.png" alt="Suomi.fi logo" />
          </Block>
          <Block mt="xl">
            <Heading
              variant="h1hero"
              style={{
                color: suomifiDesignTokens.colors.brandBase,
                textAlign: 'center',
              }}
            >
              Suomi.fi – koko kansan Design System
            </Heading>
          </Block>
          <Block mt="xxl">
            <Heading variant="h2">
              “Kuinka monta erilaista OK-painiketta julkishallinnon sähköisiin
              asiointipalveluihin kannattaa eri virastoissa oikein suunnitella?”
            </Heading>
          </Block>
        </Block>
        <Block variant="div" className="container half-container" mt="xl">
          <Block variant="div" className="half">
            <Paragraph marginBottomSpacing="l">
              Tämä oli se kysymys, joka vuonna 2020 löi lukkoon päätöksen koko
              julkishallinnolle avoimen Suomi.fi Design Systemin rakentamisesta
              silloisessa Väestörekisterikeskuksessa (nykyinen Digi- ja
              väestötietovirasto).
            </Paragraph>
            <Paragraph>
              Ennen Design System -työn aloittamista yksittäisiä kansalaisten
              asiointipalveluja kehitettiin kyllä samoilla teknologioilla, mutta
              erityisesti saavutettavuuden huomioiminen vaati työtä jokaisessa
              tiimissä erikseen. Lisäksi toteutukset eri palveluissa erosivat
              toisistaan ja käyttöliittymäkomponenttien ylläpito vaati paljon
              ylimääräistä työtä. Viraston UX- ja palvelumuotoilutiimin vetäjä
              esitti tuolloin ratkaisuksi yhteisen Design Systemin kehittämistä,
              käyttöönottoa ja työn rahoittamista. Pitkäjänteisen hyötyjen
              perustelutyön jälkeen ehdotus hyväksyttiin ja samalla päätettiin,
              että Design System ja sen käyttöliittymäkomponentit julkaistaan
              avoimesti kaikkien käyttöön. Keskeiseksi mittariksi asetettiin
              saavutettavuuden varmistaminen ja päätettiin, että Design Systemin
              ulkoasun tulisi olla tarpeeksi neutraali, jotta eri toimijoiden
              olisi mahdollisimman helppo omaksua se käyttöönsä.
            </Paragraph>
          </Block>
          <Block variant="div" className="half">
            <Paragraph marginBottomSpacing="l">
              Digi- ja väestötietoviraston yhtenä tehtävänä on edesauttaa
              julkishallinnon digitalisaation etenemistä, ja korkealaatuinen ja
              kaikille avoin Suomi.fi Design System on yksi monista keinoista,
              joilla virasto tehtäväänsä edistää. Viraston omat sähköiset
              palvelut huomasivat myös tarpeen Design Systemille: DVV:llä on
              Suomi.fi-palvelujen lisäksi lukuisia muita sähköisiä
              asiointipalveluja, jotka hyötyvät yhteiskäyttöisistä
              käyttöliittymäkomponenteista ja niiden taustalla tehdystä
              suunnittelu- ja ajattelutyöstä.
            </Paragraph>
            <Paragraph>
              Työ polkaistiin käyntiin alkuvuodesta 2020 ja Suomi.fi Design
              Systemille koottiin kolmen ohjelmistokehittäjän tiimi ja oma
              UX/UI-suunnittelija. Työtä ohjasi viraston UX- ja palvelumuotoilu
              –tiimin vetäjä. Suunnittelutyöhön sekä tyylioppaan ja
              komponenttien muodostamiseen osallistui tiimin oman
              UX/UI-suunnittelijan lisäksi heti myös muita DVV:llä
              työskenteleviä suunnittelijoita.
            </Paragraph>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section2">
        <Block variant="div" className="container">
          <ul className="boxes">
            <li>
              <BoxWithIcon
                variant="simple"
                icon={<Icon icon="settings" className="simplebox-icon" />}
              >
                661 viikottaista komponenttikirjaston latausta
              </BoxWithIcon>
            </li>
            <li>
              <BoxWithIcon
                variant="simple"
                icon={<Icon icon="authorise" className="simplebox-icon" />}
              >
                5 577 064 käyttäjää
              </BoxWithIcon>
            </li>
            <li>
              <BoxWithIcon
                variant="simple"
                icon={<Icon icon="heart" className="simplebox-icon" />}
              >
                Suomi.fi visuaalisen ilmeen tunnettuus 90%
              </BoxWithIcon>
            </li>
          </ul>
        </Block>
        <Block variant="div" className="container half-container" mt="xxxl">
          <Block variant="div" className="half">
            <Paragraph>
              Tänään Suomi.fi Design System on julkisen hallinnon jokaisen
              asiointipalvelun osa. Kaikki Suomessa asuvat ovat nähneet SFI DS
              -komponentteja jossain elämänsä vaiheessa tai tulevat niitä vielä
              näkemään (esimerkiksi vahvan tunnistautumisen yhteydessä). SFI DS
              näkyy muun muassa seuraavissa asioinnin tukipalveluissa:
              Suomi.fi-verkkopalvelu, Palvelutietovaranto, Tunnistus, Viestit,
              Valtuudet, Kartat, Maksut, Palveluhallinta ja palveluväylän
              Liityntäkatalogi. Lisäksi Työ- ja elinkeinoministeriön
              yrityslupahakemusten digitalisointiin tähtäävä luvat ja valvonta
              -hanke hyödyntää Suomi.fi Design Systemiä.
            </Paragraph>
          </Block>
          <Block variant="div" className="half">
            <Paragraph>
              “Koko kansan Design System” on osa jokaisen suomalaisen arkea ja
              edistää osaltaan kansalaisten asiointipalvelujen yhtenäistä ja
              sujuvaa käyttökokemusta. Tämä myös näkyy ja tuntuu: Suomi.fi:n
              visuaalisella ilmeellä on tutkitusti 90% tunnettuus suomalaisten
              keskuudessa (Lähde: DVV tunnettuustutkimus 2022).
            </Paragraph>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section3">
        <Block variant="div" className="container" mb="xxxl">
          <Heading variant="h2">
            Suomi.fi Design Systemin pääperiaatteet
          </Heading>
        </Block>
        <Block variant="div" className="container half-container ">
          <Block variant="div" className="half">
            <ul className="boxes-2">
              <li>
                <BoxWithIcon
                  icon={
                    <Icon icon="signLanguageContent" className="box-icon" />
                  }
                  style={{ marginBottom: suomifiDesignTokens.spacing.xl }}
                >
                  Saavutettavuus
                </BoxWithIcon>
              </li>
              <li>
                <BoxWithIcon
                  icon={
                    <StaticIcon
                      icon="collaboration"
                      baseColor={suomifiDesignTokens.colors.blackBase}
                      className="box-icon"
                    />
                  }
                  style={{ marginBottom: suomifiDesignTokens.spacing.xl }}
                >
                  Avoimuus
                </BoxWithIcon>
              </li>
              <li>
                <BoxWithIcon
                  icon={
                    <StaticIcon
                      icon="webDevelopment"
                      baseColor={suomifiDesignTokens.colors.blackBase}
                      className="box-icon"
                    />
                  }
                >
                  Helppokäyttöisyys
                </BoxWithIcon>
              </li>
            </ul>
          </Block>
          <Block variant="div" className="half">
            <Paragraph marginBottomSpacing="l">
              Koska Suomi.fi Design System on rakennettu palvelemaan kaikkia
              vauvasta vaariin, on yksi sen tärkeimmistä tavoitteista ollut
              saavutettavuuden edistäminen sähköisissä asiointipalveluissa jo
              kauan ennen kuin saavutettavuuslainsäädäntö on siihen
              velvoittanut.
            </Paragraph>
            <Paragraph marginBottomSpacing="l">
              Konkreettinen keino tähän pääsemiseksi on ollut saavutettavuustyön
              tekeminen muille mahdollisimman helpoksi: SFI DS –tiimi ratkoo
              vaikeita asioita muiden puolesta ja jakaa ratkaisunsa avoimesti
              kaikkien hyödynnettäväksi.
            </Paragraph>
            <Paragraph>
              Kaikki SFI DS -ratkaisut ovat avointa lähdekoodia, löydettävissä
              ja hyvin dokumentoitu eri kohderyhmät (ohjelmistokehittäjät,
              tuoteomistajat ja UX/UI-suunnittelijat) huomioiden. Kehitystiimit
              voivat käyttää Design Systemiä joko kokonaisuudessaan tai
              hyödyntää tilanteensa mukaan vain osia siitä. Erikseen käytettäviä
              osia voivat olla esimerkiksi ikonit, tyylitokenit ja tyyliopas.
              Komponenttikirjasto puolestaan yhdistää edellä mainitut osat
              valmiiksi käyttöliittymäkomponenteiksi ja patterneiksi
              ohjeistuksineen.
            </Paragraph>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section4">
        <Block variant="div" className="container half-container">
          <Block variant="div" className="half left"></Block>
          <Block variant="div" className="half right">
            <Block className="text-container">
              <Block mb="xl">
                <Heading
                  style={{ color: suomifiDesignTokens.colors.whiteBase }}
                  variant="h2"
                >
                  Käyttöliittymäkomponentit
                </Heading>
              </Block>
              <Paragraph
                marginBottomSpacing="l"
                style={{ color: suomifiDesignTokens.colors.whiteBase }}
              >
                Suomi.fi Design Systemin kaikki elementit on suunniteltu ja
                kehitetty saavutettavuusvaatimusten mukaan (WCAG 2.1
                -kriteeristön tasot A ja AA). Komponentit julkaistaan ReactJS
                (Javascript & Typescript) ‑muodossa ja julkaistava kirjasto
                noudattaa semanttista versiointia.
              </Paragraph>
              <Paragraph
                style={{ color: suomifiDesignTokens.colors.whiteBase }}
              >
                Avoimen dokumentaation kautta pyritään tarjoamaan selkeitä
                käyttöesimerkkejä sekä ohjeistusta saavutettavien ja
                yhdenmukaisten ratkaisujen luomiseen. Kaikki komponentit ja
                dokumentaatio ovat julkisesti tarkasteltavissa Design Systemin
                omalla sivulla sekä GitHubissa. UX/UI-suunnittelijoiden ja
                ohjelmistokehittäjien arjen helpottamiseksi dokumentaatio on
                myös leivottu osaksi Figmasta löytyvän tyylioppaan
                komponentteja.
              </Paragraph>
              <Block variant="div" mt="xxl">
                <Block mb="l">
                  <ExternalLink
                    href="https://designsystem.suomi.fi"
                    labelNewWindow="Avautuu uudessa välilehdessä"
                    style={{ color: suomifiDesignTokens.colors.whiteBase }}
                    underline="initial"
                  >
                    Suomi.fi Design System
                  </ExternalLink>
                </Block>
                <Block>
                  <ExternalLink
                    href="https://github.com/vrk-kpa/suomifi-ui-components"
                    labelNewWindow="Avautuu uudessa välilehdessä"
                    style={{ color: suomifiDesignTokens.colors.whiteBase }}
                    underline="initial"
                  >
                    GitHub
                  </ExternalLink>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section5">
        <Block variant="div" className="container">
          <Block mb="xl">
            <Heading variant="h2">Laatu varmistetaan yhdessä oppien</Heading>
          </Block>
        </Block>
        <Block variant="div" className="container half-container">
          <Block variant="div" className="half">
            <Paragraph marginBottomSpacing="l">
              Suomi.fi Design Systemin tekemisen filosofiana on alusta asti
              ollut pyrkimys korkeaan laatuun ja edelläkävijyyteen: on haluttu
              näyttää hyvää esimerkkiä siitä, miten tehdä alusta asti
              saavutettavaa Design Systemiä eikä vain tyydytä kopioimaan
              valmiita ratkaisuja.
            </Paragraph>
            <Paragraph>
              Jo konseptitason suunnitteluvaiheessa mukana on
              saavutettavuusasiantuntija, joka myös validoi valmiit
              ratkaisuehdotukset. Kaikille tekijöille pyritään saamaan myös
              mahdollisimman hyvä saavutettavuusosaaminen, ja jokainen SFI DS:n
              parissa työskentelevä on saanut saavutettavuuskoulutuksen. Tietoa
              hyvistä ratkaisuista jaetaan aktiivisesti erilaisissa
              keskeneräisten UX/UI-konseptien sparraussessioissa, joka toinen
              viikko pidettävässä UX/UI-suunnittelutiimin yhteisessä
              katselmoinnissa sekä Slackissa päivän polttavia kysymyksiä
              ohjelmistokehittäjien ja UX/UI-suunnittelijoiden välillä
              kiivaastikin pallotellen.
            </Paragraph>
          </Block>
          <Block variant="div" className="half">
            <Paragraph>
              Tällä hetkellä SFI DS:n kehittämisestä vastaa neljän hengen
              täysiaikainen ohjelmistokehittäjien tiimi. UX/UI-suunnittelu
              toimii jaetun vastuun periaatteella DVV:n eri palveluihin
              jalkautuneen 13 hengen konsulteista koostuvan suunnittelutiimin
              kesken: jokainen saa osallistua SFI DS:n kehitykseen oman
              mielenkiintonsa ja käytössä olevan ajan mukaan – toiset jo pitkään
              ja vakiintuneina, toiset enemmänkin vierailevina tähtinä. Näin
              jokaista komponenttia katsoo monta asiaansa vihkiytynyttä
              silmäparia ja uudet komponentit, patternit ja muut elementit
              välittyvät suunnittelijoiden mukana suorinta reittiä palveluihin.
              Palveluista nousevia tarpeita puolestaan pallotellaan viikoittain
              suunnittelijoiden ja SFI DS -tiimin ohjelmistokehittäjien kesken.
            </Paragraph>
          </Block>
        </Block>
        <Block variant="div" className="container">
          <Block mt="xl">
            <img
              src="/grand-one/DS_process.png"
              alt="Suomi.fi Design Systemin kehittämisprosessi"
              style={{ maxWidth: '100%' }}
              aria-describedby="imagedescripion"
            />
            <VisuallyHidden id="imagedescripion">
              Design Systemin kehitystarpeet, esimerkiksi uudet
              käyttöliittymäkomponentit, syntyvät Design Systemiä käyttävissä
              palveluissa. Tarpeet priorisoidaan yhteistyössä Design Systemin
              tuoteomistajan, ohjelmistokehittäjien ja muotoilijoiden kesken.
              Priorisoinnin jälkeen tunnistettu kehitystarve siirtyy
              muotoiluvaiheeseen, johon osallistuvat UX/UI-suunnittelijoiden ja
              ohjelmistokehittäjien lisäksi saavutettavuusasiantuntija.
              Muotoiluvaiheen tuloksena syntyy esimerkiksi uuden komponentin
              visuaalinen toteutus, joka otetaan osaksi muotoilijoiden
              tyyliopasta. Muotoiluratkaisun hyväksymisen jälkeen siirrytään
              kehitysvaiheeseen, jossa ohjelmistokehittäjät tuottavat uuden
              elementin osaksi Design Systemin komponenttikirjastoa. Kuten
              muotoiluvaiheessakin, myös ohjelmistokehitysvaiheessa
              osallistetaan sidosryhmiä eli eri DVV:n palveluissa työskenteleviä
              kehittäjiä sekä saavutettavuusasiantuntijaa. Kehityksen
              valmistuttua työn alla olleen komponentin saavutettavuus vielä
              validoidaan erikseen asiantuntijan kanssa, ja julkaistaan
              virallisesti vasta sen jälkeen. Uusi komponentti otetaan käyttöön
              Suomi.fi-palveluissa ja käyttäjät antavat jatkuvaa palautetta
              Design System -tiimille. Komponenttia jatkokehitetään ja
              ylläpidetään palautteen perusteella.
            </VisuallyHidden>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section6">
        <Block variant="div" className="container half-container">
          <Block variant="div" className="half">
            <Block mb="xl">
              <Heading variant="h2">
                Kehittäminen on avointa ja palaute tervetullutta
              </Heading>
            </Block>
            <Paragraph marginBottomSpacing="l">
              Heti Suomi.fi Design Systemin alkutaipaleelta lähtien palautteen
              antaminen ja kerääminen on haluttu saada mahdollisimman helpoksi.
              Prosessia on iteroitu moniammatillisesti matkan varrella useaan
              otteeseen, jotta erilaiset tarpeet, hyödynnettävyys ja näkökulmat
              tulevat varmasti huomioitua.
            </Paragraph>
            <Paragraph>
              Kehitys pyritään pitämään läpinäkyvänä, ja tekemisessä
              ensisijaisena on aina kehittäjien, UX/UI-suunnittelijoiden ja
              käyttäjien palveleminen mahdollisimman hyvin. Läpinäkyvyys näkyy
              muun muassa kirjaston Open Source -luonteena sekä tiiviinä
              kommunikaationa Suomi.fi-palvelujen kehittäjien suuntaan: Design
              Systemin -kehittäjät tukevat palvelujen kehittäjiä käyttöönotossa
              tarvittaessa myös henkilökohtaisesti. Palaute käyttöönotoista ja
              Design Systemin käytöstä kehitystyössä on ollut erittäin
              positiivista.
            </Paragraph>
          </Block>
          <Block variant="div" className="half">
            <Block variant="div" className="quotebox" mb="xl">
              <Block mb="m" style={{ textAlign: 'center' }}>
                <blockquote className="quote">
                  &quot;Saavutettavuus on hyvin toteutettu ja vähentää
                  merkittävästi komponenttien käyttäjän työmäärää. Varmaan myös
                  hyvin kuvaa esimerkkien ja komponenttien toimivuutta se, että
                  aika harvoin tarvitsee kysyä miten joku toimii tai miksi ei
                  toimi oletetulla tavalla.&quot;
                </blockquote>
              </Block>
              <Text smallScreen>
                – Ohjelmistokehittäjä, Suomi.fi-palvelutietovaranto
              </Text>
            </Block>
            <Block variant="div" className="quotebox">
              <Block mb="m" style={{ textAlign: 'center' }}>
                <blockquote className="quote">
                  &quot;Design Systemin käyttöönotto on ollut todella helppoa ja
                  onnistuu asteittain vanhan toteutuksen rinnalla. Komponenttien
                  release changelogit on hyvin dokumentoitu, niiden
                  saavutettavuuteen panostetaan paljon ja design tokenit ovat
                  saatavilla omiin tyyleihin hyödynnettäviksi. Myös
                  kommunikointiyhteys tiimiin toimii hyvin ja tarpeisiin on
                  reagoitu nopeasti.&quot;
                </blockquote>
              </Block>
              <Text smallScreen>– Ohjelmistokehittäjä, Suomi.fi-valtuudet</Text>
            </Block>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section7">
        <Block variant="div" className="container">
          <Block mb="xl">
            <Heading variant="h2">Suomi.fi Design Systemin tulevaisuus</Heading>
          </Block>
        </Block>
        <Block variant="div" className="container half-container">
          <Block variant="div" className="half">
            <Paragraph marginBottomSpacing="l">
              Design Systemin kehittäminen ja uusien komponenttien luominen on
              jatkuvaa työtä. Lähitulevaisuudessa pyritään tarjoamaan valmiita
              suunnittelu- ja toteutusmalleja yhä laajemmista kokonaisuuksista,
              kuten lomakkeista ja niiden osista. Myös uusia komponentteja
              lisätään jatkuvan tarpeen mukaan.
            </Paragraph>
            <Paragraph marginBottomSpacing="l">
              Pitkällä aikavälillä pyritään löytämään lisää mahdollisuuksia
              tehdyn työn hyödyntämiseen myös muualla kuin
              Suomi.fi-kontekstissa. Tavoitteena on, että julkisten palveluiden
              toimijat tiivistäisivät yhteistyötään digitaalisten palveluiden
              osalta vielä aiempaa enemmän, jotta jokainen toimija ei päätyisi
              rakentamaan samoja asioita uudelleen alusta lähtien.
            </Paragraph>
            <Paragraph>
              Digi- ja väestötietovirastolla on aktiivinen rooli etsiä
              yhtymäkohtia ja yhteistyömahdollisuuksia digitaalisten palveluiden
              rakentamisessa muiden isojen julkisten toimijoiden kanssa.
              Suomi.fi Design System toimii tämän työn kärkenä. Avoimuudella ja
              muokattavuudellaan SFI DS pyrkii varmistamaan helpon käyttöönoton
              myös muissa organisaatioissa ja palveluissa, jotta ensimmäiset
              askeleet parempaan yhteistyöhön olisivat mahdollisimman helppoja.
            </Paragraph>
          </Block>
          <Block variant="div" className="half">
            <Block style={{ textAlign: 'center' }}>
              <img
                src="grand-one/nimenmuutoshakemus-mobile.png"
                alt="Suomi.fi komponentteja mobiilinäytöllä"
                style={{ maxWidth: '245px' }}
              />
            </Block>
          </Block>
        </Block>
      </Block>

      <Block variant="div" id="section8">
        <Block variant="div" className="container half-container">
          <Block variant="div" className="half">
            <Block mb="l">
              <Heading
                variant="h3"
                as="h2"
                style={{ color: suomifiDesignTokens.colors.whiteBase }}
              >
                Tekijät
              </Heading>
            </Block>
            <Block mb="l">
              <Text style={{ color: suomifiDesignTokens.colors.whiteBase }}>
                Suomi.fi Design Systemin kehittämisestä vastaa Digi- ja
                väestötietovirasto
              </Text>
            </Block>
            <Block mb="l">
              <Text
                variant="bold"
                style={{ color: suomifiDesignTokens.colors.whiteBase }}
              >
                UX/UI-suunnittelu ja ohjelmistokehitys
              </Text>
            </Block>
            <Block>
              <Text style={{ color: suomifiDesignTokens.colors.whiteBase }}>
                Gofore
              </Text>
            </Block>
          </Block>
          <Block variant="div" className="half">
            <Block mb="l">
              <Text
                smallScreen
                style={{ color: suomifiDesignTokens.colors.whiteBase }}
              >
                GRAND ONE 2023 - PARAS DESIGN SYSTEM
              </Text>
            </Block>
            <Block mb="l">
              <ExternalLink
                href="https://designsystem.suomi.fi"
                labelNewWindow="Avautuu uudessa välilehdessä"
                style={{ color: suomifiDesignTokens.colors.whiteBase }}
                underline="initial"
              >
                Suomi.fi Design System
              </ExternalLink>
            </Block>
            <Block>
              <ExternalLink
                href="https://github.com/vrk-kpa/suomifi-ui-components"
                labelNewWindow="Avautuu uudessa välilehdessä"
                style={{ color: suomifiDesignTokens.colors.whiteBase }}
                underline="initial"
              >
                GitHub
              </ExternalLink>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  </>
);

export default Page;
