import styled from "@emotion/styled"
import { HTMLHead } from "src/components/HTMLHead"

const Content = styled.main`
  max-width: 1114px;
  margin: 0 auto;

  @media screen and (max-width: 1114px) {
    padding: 0 23px;
  }
`

const MainSection = styled.main`
  display: grid;
  grid-template-columns: 20% 65%;
  justify-content: space-between;
  margin-bottom: 12.5rem;
  grid-row-gap: 12.5rem;
  margin-top: 20px;

  h2 {
    margin-top: -15px;
  }

  h3 {
    margin: 1rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-row-gap: 2rem;

    h2 {
      margin-top: 0;
    }
  }
`

function TermsOfSale(): React.ReactElement {
  return (
    <>
      <HTMLHead title="Terms of Sale" />
      <Content>
        <MainSection>
          <h2>Terms of sale</h2>
          <div>
            <h3>DESCRIPTION OF PLATFORM AND ACCEPTANCE OF TERMS</h3>
            <p>
              These Terms of Sale apply to applications provided by JBaud Corp, Inc. d/b/a Simulacra (“Simulacra”) for
              the sale and purchase of non-fungible tokens (“NFTs”) and other Digital Goods (defined below) (with such
              Digital Goods, functionality associated therewith and any proprietary or third-party applications on which
              the NFTs are sold being the “Platform”). Simulacra (“we,” “us,” “our”) offers the Digital Goods to you
              subject to your acceptance of these Terms of Sale. These Terms of Sale, together with the Terms of Use,
              are a binding contract between you and Simulacra. We may update these Terms of Sale by providing a new
              version online and your continued use of the Platform after any such update constitutes your binding
              acceptance of such changes. We may immediately terminate this contract with respect to you if you fail to
              comply with any of the Terms of Sale and the Terms of Use.
            </p>
            <h3>PURCHASE OF DIGITAL GOODS</h3>
            <p>
              We may offer certain products, NFTs, and services for purchase on the Platform, including the generation
              of simulated artworks or ‘SIMs’ (each a “Digital Good”). Digital Goods: * may, where expressly stated in
              the description of such Digital Goods, include additional functionality, content, or subscription access
              to content or services; * may be unique or part of a limited series, or downloadable only once, or
              unlimited; and * may be subject to such additional terms or qualifications as stated in the description of
              the Digital Goods when sold.
            </p>
            <p>
              You agree, in relation to any Digital Goods you have purchased, that you purchase the Digital Goods at the
              price set by the by the stepped bonding curve published on the site, or on any price list published by
              Simulacra, in each case as of the date that Simulacra accepts your offer (the “Price”) and in accordance
              with any description which accompanies those goods. Simulacra may, at its option, use third party
              platforms or wallet extensions to sell Digital Goods (“Third Party Sites”). You hereby agree to adhere to
              any applicable terms of service or privacy policies for those third party extensions or services.
            </p>
            <p>
              Unless stated otherwise Digital Goods will be freely transferable, subject to the proviso that any
              transferee will be subject to these Terms of Sale. Once you have received Digital Goods, you are
              responsible for any loss or damage to, or loss of access to, the Digital Goods or any associated digital
              wallet or private key. Simulacra shall have no liability to you or any other person in such circumstances,
              regardless of cause. You expressly understand and agree that your use of our Platform and any Digital
              Goods is at your sole risk and that our Platform and Digital Goods are provided “as is” and “as
              available.” All sales of Digital Goods are final.
            </p>
            <p>
              Once you have made a purchase of Digital Goods, we encourage you to promptly take the necessary steps to
              complete your transaction (e.g., activate or download a local copy of any content or secure any seed
              phrase or corresponding private key).
            </p>
            <p>
              You may purchase Digital Goods using real or virtual/cryptocurrency if multiple payment options are made
              available to you. You may resell Digital Goods where this is permitted. Anyone receiving such Digital
              Goods from you agrees and is bound by these Terms of Sale.
            </p>
            <p>
              Following a successful purchase, Simulacra agrees to grant to you a non-exclusive, royalty-free,
              irrevocable, perpetual, transferable, sublicensable, worldwide license to display, license, monetize, or
              otherwise exploit for financial gain, your NFT and to hold yourself out as the owner of the rights
              conferred by this license.
            </p>
            <p>
              Notwithstanding any such purchase of Digital Goods, rights, title, and interests in the Simulacra
              Intellectual Property, including Simulacra Intellectual Property incorporated in any Digital Goods and
              including all copyrights, trademarks, and other intellectual property rights therein, are held by
              Simulacra or its licensors. You agree not to infringe those exclusive rights.
            </p>
            <h3>REGISTRATION</h3>
            <p>
              We reserve the right to require that you register with us or one of our Platform partners in order to
              access the NFT or other Digital Goods. If you are required to register an account with us or any such
              third party, you agree to provide accurate, current and complete information about yourself as part of
              that process.
            </p>
            <h3>LICENSE TO USE THE PLATFORM</h3>
            <p>
              Simulacra grants you a limited, non-exclusive, non-transferable, revocable license to access and use the
              Platform, including and any NFTs you may have purchased thereon (including all software, content, virtual
              items and other material associated with the NFTs) for your own personal, noncommercial use only. You may
              not use the Platform for any unlawful purpose. We reserve all rights in and to the Platform, and to any
              NFTs, not expressly granted to you under these Terms of Sale. NFTs are intended for purchase and use by
              persons over the age of 18. You acknowledge and agree that you are not permitted to use the Platform and
              shall not access the Platform if you are under the age of 18. By using the Platform, you certify that you
              are at least 18 years of age and agree to provide us with accurate information concerning your age or
              identity if we request it. You also agree not to assist children under the age of 18 in accessing the
              Platform or attempt to contact children under 18 while accessing or using the Platform.
            </p>
            <h3>SIMULACRA AND THIRD PARTY INTELLECTUAL PROPERTY</h3>
            <p>
              “Intellectual Property” means all intellectual property and intellectual property rights and assets, and
              all rights, interests and protections that are associated with, similar to, or required for the exercise
              of, any of the foregoing, however arising, pursuant to law, whether registered or unregistered, including
              any and all: (a) trademarks, service marks, trade names, brand names, logos, trade dress, design rights
              and other similar designations of source, sponsorship, association or origin, together with the goodwill
              connected with the use of and symbolized by, and all registrations, applications and renewals for, any of
              the foregoing; (b) internet domain names, whether or not trademarks, registered in any top-level domain by
              any authorized private registrar or governmental authority, web addresses, web pages, websites and related
              content, accounts with social media companies and the content found thereon and related thereto, and all
              other indicia of origin, identifiers including social media identifiers, trade dress and similar rights
              and URLs; (c) works of authorship, expressions, designs and design registrations, whether or not
              copyrightable, including copyrights, author, performer, moral and neighboring rights, and all
              registrations, applications for registration and renewals of such copyrights; (d) inventions, discoveries,
              trade secrets, business and technical information and know-how, databases, data collections and other
              confidential and proprietary information and all rights therein; (e) patents (including all reissues,
              divisionals, provisionals, continuations and continuations-in-part, re-examinations, renewals,
              substitutions and extensions thereof), patent applications, and other patent rights and any other
              governmental authority-issued indicia of invention ownership (including inventor’s certificates, petty
              patents and patent utility models); and (f) software and firmware, including data files, source code,
              object code, application programming interfaces, architecture, files, records, schematics, computerized
              databases and other related specifications and documentation.
            </p>
            <p>
              Except where expressly stated otherwise, we (or where applicable, our licensors) own all rights, title and
              interests in and to (i) all of Simulacra’s Intellectual Property; (ii) the Platform, (iii) the NFTs,
              including all proprietary source code, object code and other technology associated with the NFTs and (iv)
              any and all other content and materials available through the Platform, any associated application, and
              all intellectual property rights therein (“Simulacra Intellectual Property”). Simulacra Intellectual
              Property may only be used by you in connection with the NFTs and only as expressly permitted in these
              Terms of Sale. You have no rights in or to any Simulacra Intellectual Property.
            </p>
            <p>
              Unless explicitly stated, you should assume that all Simulacra Intellectual Property is protected by
              copyright, trademark and other applicable intellectual property laws and may not be used except as
              permitted in these Terms of Sale. Simulacra does not grant, by implication, estoppel, or otherwise, any
              license or right to use any Simulacra Intellectual Property or Digital Goods in a manner inconsistent with
              these Terms of Sale without the prior written permission of Simulacra and/or any third party that may own
              additional intellectual property.
            </p>
            <p>
              We reserve the right to modify or discontinue our support for the NFTs (or any parts of any associated
              software or applications relating thereto) with or without notice at any time. Simulacra shall not be
              liable to you or any third party (including, without limitation, our licensors) for any modification,
              suspension or discontinuance of the Platform, any NFT or any associated software, applications or
              functionality.
            </p>
            <h3>SECURITY</h3>
            <p>
              When registering for the Platform or third party services that facilitate access to the Platform you may
              be required to select or provide a username and password, private key, or other form of secure
              authentication that will be used to access your account (“Password”). You are responsible for any use of
              your Password, whether by you or others. You agree to (a) keep your Password confidential and not share it
              with anyone else. Simulacra is not liable for any loss or damage arising from your failure to protect your
              username, password or any other personal information, including but not limited to loss of access to any
              Digital Goods.
            </p>
            <p>
              Where this functionality is provided, you authorize Simulacra to act on instructions received through use
              of your Password or a transaction signed with your public key, and that Simulacra may, but is not
              obligated to, deny access or block any transaction made through use of your Password without prior notice.
              Note that all transactions with the Sim smart contract will be recorded on the Ethereum blockchain and
              will be public. Simulacra will retain no logs of its own of these transactions.
            </p>
            <h3>TERMS OF SERVICE</h3>
            <p>
              By using our Platform, it is your responsibility to know, understand and agree to Simulacra’s Terms of
              Use, which are incorporated herein by reference.
            </p>
            <p>
              In addition, you agree that you shall not (i) remove any proprietary notices or labels on or in the
              Simulacra Intellectual Property and/or not bypass, modify, defeat or circumvent any technologies or
              methods to deliver or protect the NFTs or any other Simulacra Intellectual Property.
            </p>
            <h3>TERMINATION</h3>
            <p>
              We may, in our sole discretion at any time, and for any reason or no reason, and without notice or
              liability, immediately terminate your access to all or any part of the Platform. Termination may include,
              but not be limited to (i) removal or deindexing of the NFTs from Simulacra’s servers, (ii) Simulacra
              withdrawing support for the Platform or any NFT, the deletion of all account information related to the
              NFTs from Simulacra’s servers, and (iii) barring any further use of or access to the Platform.
            </p>
            <h3>DISCLAIMER OF WARRANTY</h3>
            <p>
              THERE IS NO WARRANTY FOR THE PLATFORM OR ANY DIGITAL GOODS, TO THE EXTENT PERMITTED BY APPLICABLE LAW.
              EXCEPT WHEN OTHERWISE STATED IN WRITING SIMULACRA, THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE
              PLATFORM “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
              THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE
              QUALITY AND PERFORMANCE OF THE PLATFORM AND ANY NFT IS WITH YOU. SHOULD THE PROGRAM OR ANY NFT PROVE
              DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
            </p>
            <h3>LIMITATION OF LIABILITY</h3>
            <p>
              IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL SIMULACRA BE LIABLE TO YOU FOR
              DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR
              INABILITY TO USE THE PLATFORM OR ANY DIGITAL GOODS (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA
              BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO
              OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY
              OF SUCH DAMAGES.
            </p>
            <h3>GENERAL INFORMATION</h3>
            <p>
              No Third Party Beneficiaries. You agree that, except as otherwise expressly provided in these Terms of
              Sale, there shall be no third party beneficiaries to this Agreement.
            </p>
            <p>
              Entire Agreement; Waiver; Severability. These Terms of Sale, together with the Terms of Use, constitute
              the entire agreement between you and Simulacra with respect to your use of the Platform. The failure of
              Simulacra to exercise or enforce any right or provision of these Terms of Sale shall not constitute a
              waiver of such right or provision. If any provision of these Terms of Sale is found by a court of
              competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to
              give effect to the parties’ intentions as reflected in the provision, and the other provisions of these
              Terms of Sale remain in full force and effect.
            </p>
            <p>
              Governing law; binding arbitration. This contract will be governed by and construed in accordance with the
              internal laws of the State of New York without giving effect to any choice or conflict of law provision or
              rule (whether of the State of New York or any other jurisdiction) that would result in the application of
              the laws of any other jurisdiction. Any controversy or claim arising out of or relating to this contract,
              or the breach thereof, shall be settled by arbitration administered by the American Arbitration
              Association in accordance with its Commercial Arbitration Rules, and judgment on the award rendered by the
              arbitrator(s) may be entered in any court having jurisdiction thereof. The place of arbitration shall be
              New York County, New York City, New York.
            </p>
            <p>
              Statute of Limitations. You agree that regardless of any statute or law to the contrary, any claim,
              arbitration claim or cause of action arising out of or related to the use of any Digital Goods or the
              Platform must be filed within one (1) year after such claim or cause of action arose or be forever barred.
            </p>
            <p>
              Section Titles. The section titles in these Terms of Sale are for convenience only and have no legal or
              contractual effect.
            </p>
          </div>
        </MainSection>
      </Content>
    </>
  )
}

export default TermsOfSale
