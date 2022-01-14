import styled from "@emotion/styled"
import useCollapse from "react-collapsed"
import React from "react"
import { HTMLHead } from "src/components/HTMLHead"

const Content = styled.main`
  max-width: 1114px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  margin-top: 7rem;

  hr {
    width: 100%;
    border-color: var(--text);
  }

  @media screen and (max-width: 1114px) {
    padding: 0 23px;
  }
`

const SQContainer = styled.div`
  width: 100%;

  a {
    text-decoration: underline;
  }
`

const SQTitle = styled.span`
  text-align: left;
  color: var(--text);
`

const SButton = styled.button`
  width: 100%;
  font-family: "Voyage", serif;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: none;
  font-size: 3.3rem;
  padding: 30px 0;
`

const SAnswer = styled.section`
  font-size: 1.125rem;
  line-height: normal;
  margin-bottom: 30px;
`

function Question({ title, children }: { title: string; children: React.ReactNode }): React.ReactElement {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <SQContainer>
      <SButton {...getToggleProps()}>
        <SQTitle>{title}</SQTitle>
        <img src={isExpanded ? "/assets/icon-minus.svg" : "/assets/icon-plus.svg"} className="img-invert" />
      </SButton>
      <SAnswer {...getCollapseProps()}>{children}</SAnswer>
    </SQContainer>
  )
}

function Faq(): React.ReactElement {
  return (
    <>
      <HTMLHead title="FAQ" />
      <Content>
        <hr />
        <Question title="What is a NFT?">
          A non-fungible token (NFT) is a special type of token which represents something unique; NFTs are not mutually
          interchangeable. This is in contrast to cryptocurrencies like bitcoin, and many network or utility tokens,
          that are fungible in nature (one bitcoin is the same as any other one bitcoin).
        </Question>
        <hr />
        <Question title="What is a SIM?">
          SIMs are composed of two things, an ERC721 non-fungible token and an associated image file. The token is
          generated when users deposit ETH to the bonding curve during the “commission period”. The image is associated
          with the token once the “generation period” is over.
        </Question>
        <hr />
        <Question title="How are SIMs images generated?">
          The images are created by the generation code, which takes participants’ artist selection as input
          probabilities for a set of artists, then constructs the pieces by taking assets from the artists and
          constructing a new, combined piece.
          <br />
          The generation code will be shared after all SIMs are distributed.
          <br /> The final images will be randomly associated with the tokens.
        </Question>
        <hr />
        <Question title="How do I buy a SIM?">
          Click on ‘Participate’ and follow the required steps. You will need{" "}
          <a href="https://ethereum.org/en/wallets" target="_blank" rel="noreferrer">
            an Ethereum wallet
          </a>{" "}
          and some Ether in order to buy the piece and to pay for transaction fees.
        </Question>
        <hr />
        <Question title="How much does one SIM cost?">
          The initial sale of SIMs will be carried through a stepped bonding curve. The first SIMs will go at a lower
          price. As participation increases, the price will also increase. The following diagram can give users an idea
          of how much it will cost depending on how many SIMs have been sold:
          <img
            src="/assets/sale_stages/sold.svg"
            className="img-invert"
            style={{ width: "100%", marginTop: "0.5rem" }}
            alt="Picture representing different stages of SIM sale and its price: 0.11 ETH up to 55 SIMs, 0.33 ETH up to 610 SIMs, 0.66 up to 1721, 1 up to 2832, 3 up to 3387, 11 up to 3442, 111 up to 3447"
          />
        </Question>
        <hr />
        <Question title="When will I get a SIM?">
          The process has three periods:
          <ul>
            <li>
              “Commission period” -&gt; First 11 days in which participants can buy into the bonding curve to commission
              a SIM. Participants get a token with no associated image file yet.
            </li>

            <li>
              “Generation period” -&gt; Starts either after all 3,447 pieces are commissioned, or after 11 days.
              Consists of a 3 day period in which the generation code creates and distributes the images. It can finish
              before if the generation code takes less time.
            </li>

            <li>
              “Reveal period” -&gt; Starts after the pieces have been generated and distributed. Marks the end of the
              process.
            </li>
          </ul>
        </Question>
        <hr />
        <Question title="Is there a safe mechanism?">
          The smart contract will allow participants to claim their ETH back if the pieces are not generated and
          distributed before three days have passed since the “generation period”.
        </Question>
        <hr />
        <Question title="How many SIMs will there be?">There will be up to 3,447 SIMs.</Question>
        <hr />
        <Question title="Do I know what my SIM will be?">
          No, SIMs images will be randomly distributed among participants before the “generation period” is over.
        </Question>
        <hr />
        <Question title="I changed my mind, can I get my ETH back?">
          Participants can no longer withdraw their ETH once they buy into the bonding curve. The only circumstance in
          which users could get their ETH back is if the “generation period” is not over 3 days after it started. Check
          “Is there a safe mechanism?” for more information.
        </Question>
        <hr />
        <Question title="What are the risks?">
          Though the team has extensive experience developing software, there are cases in which bugs or mistakes can
          result in a loss of funds. The Simulacra team is not liable for any losses participants might incur on. Make
          sure you read our Terms and conditions with attention.
        </Question>
        <hr />
        <Question title="What effect does my artist selection have?">
          The assets of the most preferred artists will become more scarce, making them more rare throughout the
          collection.
        </Question>
        <hr />
        <Question title="Why is there a limit to how many SIMs I can commission?">
          To make a simpler and more secure smart contract, the Simulacra team decided only let participants commision
          as many SIMs as there are available in the current price range.
        </Question>
        <hr />
        <Question title="How long does the sale last?">
          The sale can last up to 14 days. It can also finish if all SIMs are commissioned, created and distributed
          before that time. Check the “When will I get a SIM?” question for more information.
        </Question>
        <hr />
        <Question title="Where will SIM images be hosted?">
          The hosting service for the first 2 years will be paid by the team beforehand, but after that users will be
          responsible for pinning. We can recommend services, like{" "}
          <a href="https://pinata.cloud" target="_blank" rel="noreferrer">
            pinata.cloud
          </a>
          , or hosting their own IPFS node.
        </Question>
        <hr />
        <Question title="What happens if all SIMs are commissioned before the 11 days of the “commission period”?">
          The “commission period” will be over, and the SIMs’ image will be created and distributed after the generation
          code has done its work.
        </Question>
        <hr />
        <Question title="Who was Jean Baudrillard?">
          Jean Baudrillard was a French postmodern/post-structuralist philosopher that inspired this project. You can
          read more about him in{" "}
          <a href="https://en.wikipedia.org/wiki/Jean_Baudrillard" target="_blank" rel="noreferrer">
            wikipedia
          </a>
          , or buy the book that inspired this project{" "}
          <a
            href="https://www.amazon.com/Simulacra-Simulation-Body-Theory-Materialism/dp/0472065211"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </Question>
        <hr />
        <Question title="Who is behind Simulacra.art?">
          A team of developers, artists, and friends that work full-time in the crypto space for several years. In the
          future we may come out of anonymity and recognize our work.
        </Question>
        <hr />
      </Content>
    </>
  )
}

export default Faq
