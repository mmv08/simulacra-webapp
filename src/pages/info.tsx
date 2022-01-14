import styled from "@emotion/styled"
import { GetServerSidePropsResult } from "next"
import Link from "next/link"
import { getAlchemyProvider } from "src/api/ethers"
import { getCurrentPrice } from "src/api/simulacra"
import { DotImage } from "src/components/DotImage"
import { HTMLHead } from "src/components/HTMLHead"
import { SaleStageImg } from "src/components/SaleStageImg"
import { HEADER_DESKTOP_HEIGHT } from "src/styles/constants"

const Content = styled.main`
  max-width: 1114px;
  margin: 0 auto;

  @media screen and (max-width: 1114px) {
    padding: 0 23px;
  }
`

const FixedLink = styled.a`
  position: fixed;
  right: 10%;
  bottom: 10%;
  z-index: 10;
  text-transform: uppercase;
  padding: 8px 20px;
  border: 1px solid var(--text);
  border-radius: 50px;
  min-height: 24px;
  font-size: 1.25rem;
  color: var(--text);
  background: var(--background);
`

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin-top: -${HEADER_DESKTOP_HEIGHT};

  h1 {
    @media screen and (max-height: 714px) {
      font-size: 2.3rem;
    }
  }
`

const DotImage1 = styled(DotImage)`
  top: 20%;
  right: 20%;
`
const DotImage2 = styled(DotImage)`
  bottom: 20%;
  left: 20%;
`

const DetailSection = styled.section`
  display: grid;
  grid-template-columns: 20% 65%;
  justify-content: space-between;
  margin-bottom: 150px;

  row-gap: 40px;
`

const InfoSection = styled.section`
  display: grid;
  grid-template-columns: 20% 65%;
  justify-content: space-between;
  margin-bottom: 150px;
  grid-row-gap: 7.25rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-row-gap: 2rem;
  }
`

const SimArtwork = styled.section`
  display: flex;
  margin-bottom: 9.5rem;

  @media screen and (max-width: 578px) {
    flex-direction: column;

    h2 {
      margin-bottom: 2rem;
    }
  }
`

const SaleStages = styled(SaleStageImg)`
  margin-bottom: 9.25rem;
`

type ServerSideProps = {
  currentSimPriceWei: string
}

function Info({ currentSimPriceWei }: ServerSideProps): React.ReactElement {
  return (
    <>
      <HTMLHead title="Info" />
      <Content>
        {/* <Link href="/commission" passHref>
          <FixedLink>Participate</FixedLink>
        </Link> */}

        <MainSection>
          <h1>
            There will be a total of 3,447 unique SIMs. Each of them is created by combining parts of well-known
            painters’ works.
            <br />
            <br />
            Their rarity is further determined by participants, who select 3 artists whose parts will become more rare.
          </h1>
          <DotImage1 src="/assets/sim_sample_2.png" alt="Sample SIM" />
          <DotImage2 src="/assets/sim_sample_1.png" alt="Sample SIM" />
        </MainSection>
        <DetailSection>
          <h2>1</h2>
          <p>
            Participants “commission” a SIM by paying ETH to a smart contract and selecting 3 artists whose parts will
            become more rare throughout the collection. At this step they already obtain the NFT token, but with no
            image file associated to it.
          </p>

          <h2>2</h2>
          <p>
            This “commission period” will last 11 days. This can be shorter if all SIMs are commissioned before 11 days.
          </p>

          <h2>3</h2>
          <p>
            After the “commission period”, the generation code takes participants’ artist selection as input
            probabilities for a set of artists, then constructs the pieces by taking assets from the artists and
            constructing a new, combined piece. This “generation period” can take up to three days.
          </p>

          <h2>4</h2>
          <p>
            Once the “generation period” is done, the image file for each SIM is generated and randomly associated with
            the existing tokens, making SIMs complete.
          </p>

          <h2>5</h2>
          <p>
            There is a safety mechanism in place that will return the ETH to participants if SIMs are not generated
            after the 3 day “generation period”.
          </p>
        </DetailSection>
        <SimArtwork>
          <h2>3 different artworks can be combined in a single SIM</h2>
          <img
            src="/assets/sim_layers.svg"
            className="img-invert"
            alt="Picture with three layers of a SIM: background, middle-ground and fore-ground"
          />
        </SimArtwork>
        <InfoSection>
          <h2>SIMs</h2>
          <p>
            All SIMs are unique non-fungible ERC721 standard tokens (NFTs). The NFT that participants buy initially
            represents the commission of a SIM. After SIMs are created by the generation code, the NFT will represent
            ownership of the SIM and point to its associated image.
          </p>

          <h2>The price</h2>
          <p>
            The initial sale of SIM will be carried through a stepped bonding curve. The first SIMs will go at a lower
            price. As participation increases, the price will also increase. The following diagram can give users an
            idea of how much it will cost depending on how many SIMs have been sold.
          </p>
        </InfoSection>
        <SaleStages price={currentSimPriceWei} />
      </Content>
    </>
  )
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<ServerSideProps>> {
  try {
    const provider = getAlchemyProvider()
    const currentSimPriceWei = await getCurrentPrice(provider)

    return {
      props: {
        currentSimPriceWei: currentSimPriceWei.toString(),
      },
    }
  } catch (err) {
    // sale has ended
    return {
      props: {
        currentSimPriceWei: "0",
      },
    }
  }
}

export default Info
