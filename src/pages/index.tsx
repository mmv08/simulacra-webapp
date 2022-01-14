import styled from "@emotion/styled"
import Link from "next/link"
import dynamic from "next/dynamic"
import { DotImage } from "src/components/DotImage"
import { HTMLHead } from "src/components/HTMLHead"
import { HEADER_DESKTOP_HEIGHT } from "src/styles/constants"
import { getAlchemyProvider } from "src/api/ethers"
import { getCurrentPrice } from "src/api/simulacra"
import { GetServerSidePropsResult } from "next"
import { SaleStageImg } from "src/components/SaleStageImg"

type ServerSideProps = {
  currentSimPriceWei: string
}

const Gallery = dynamic(
  function () {
    return import("../components/pages/index/Gallery")
  },
  { ssr: false },
)

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
  align-items: center;
  height: 100vh;
  margin-top: -${HEADER_DESKTOP_HEIGHT};
`

const DotImage1 = styled(DotImage)`
  top: 20%;
  right: 20%;
`
const DotImage2 = styled(DotImage)`
  bottom: 20%;
  left: 20%;
`
const InfoSection = styled.section`
  display: grid;
  grid-template-columns: 20% 65%;
  justify-content: space-between;
  margin-bottom: 12.5rem;
  grid-row-gap: 12.5rem;

  h2 {
    margin-top: -15px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-row-gap: 2rem;
  }
`

const SaleStages = styled(SaleStageImg)`
  margin-bottom: 9.25rem;
`

function Home({ currentSimPriceWei }: ServerSideProps): React.ReactElement {
  return (
    <>
      <HTMLHead />
      <Content>
        <FixedLink href="https://opensea.io/collection/simulacra-v2">SEE ON OPENSEA</FixedLink>

        <MainSection>
          <h1>
            The simulacrum is never that which conceals the truth—it is the truth which conceals that there is none– the
            simulacrum is true.
          </h1>
          <DotImage1 src="/assets/sim_sample_3.png" alt="Sample SIM" />
          <DotImage2 src="/assets/sim_sample_4.png" alt="Sample SIM" />
        </MainSection>
        <Gallery />
        <InfoSection>
          <h2>Simulacra &&nbsp;simulation</h2>
          <p>
            Simulacra is an NFT art project inspired by Jean Baudrillard’s Simulacra and Simulation. Simulacra refers to
            representations of objects which may or may not have an original
            <br />
            <br />
            <br />
            <br />
            The concept of &apos;Simulacra&apos; begs the necessary question, what is it to be “original”? The lack of a
            conclusive answer evinces the emptiness of originality itself.
          </p>

          <h2>SIMs</h2>
          <p>
            There will be a total of 3,447 unique SIMs. Each of them is created by combining parts of well-known
            painters’ works. Their rarity is further determined by participants, which select up to three special
            artists whose parts will become rarer.
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

export default Home
