import React from "react"
import styled from "@emotion/styled"
import { GetServerSidePropsResult } from "next"
import { ethers } from "ethers"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import artists from "src/static/artists.json"
import { getAlchemyProvider } from "src/api/ethers"
import { FOOTER_HEIGHT, HEADER_DESKTOP_HEIGHT } from "src/styles/constants"
import { Button } from "src/components/Button"
import { getCurrentPrice, getAmountOfSimsRemainingAtCurrentPrice, commissionSim } from "src/api/simulacra"
import { useWalletStore } from "src/stores/wallet"
import { HTMLHead } from "src/components/HTMLHead"
import { formatAmount } from "src/utils/numbers"
import { HideOnMobile, ShowOnMobile } from "src/components/MobileUtils"

type ServerSideProps = {
  currentSimPriceWei: string
  remainingAtCurrentPrice: number
}

const Content = styled.main`
  max-width: 1114px;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 1114px) {
    padding: 0 23px;
  }
`

const MainSection = styled.section`
  height: 100vh;
  margin-top: -${HEADER_DESKTOP_HEIGHT};
  margin-bottom: -${FOOTER_HEIGHT};

  display: grid;

  @media screen and (max-width: 768px), screen and (max-height: 781px) {
    height: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-row-gap: 2rem;
    align-items: start;
  }
`

const FormContainer = styled.div`
  padding: 28px;
  border: 1px solid var(--text);
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 593px;
  justify-self: right;

  & > p + p {
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    justify-self: center;
    padding: 20px 10px;
  }
`

const Anchor = styled.a`
  padding: 8px 20px;
  width: 314px;
  text-align: center;
  border: 1px solid var(--text);
  border-radius: 50px;
  min-height: 24px;
  font-size: 1.25rem;
  color: var(--text);
  background: var(--background);
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 190px;
  }
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 12.5rem;
    width: 260px;
    text-align: center;
  }

  button {
    background: none;
    border: none;
    font-size: 6.25rem;
    font-family: "Voyage";
    padding: 0;
    color: var(--text);
  }

  @media screen and (max-width: 768px) {
    h1 {
      width: 175px;
    }
  }
`

const SelectedArtistsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 2rem;
`

const ActionButton = styled(Button)`
  margin-top: 4.5rem;
  width: 314px;

  @media screen and (max-width: 768px) {
    width: 190px;
  }
`

const DescCol = styled.div`
  height: 630px;
  h1 {
    margin-bottom: 12.5rem;
  }

  a {
    text-decoration: underline;
  }

  p + p,
  p + a {
    margin-top: 1rem;
    display: inline-block;
  }

  @media screen and (max-width: 768px) {
    height: auto;

    h1 {
      margin-bottom: 0;
    }
  }
`

const Disclaimer = styled.p`
  margin-top: 1rem;

  max-width: 314px;
  text-align: center;
  font-size: 0.7rem;
`

const ConnectWalletButton = dynamic(
  function () {
    return import("../../components/ConnectWalletButton")
  },
  { ssr: false },
)

const ConnectBtn = styled(ConnectWalletButton)`
  margin-top: 4.5rem;
  width: 314px;
  padding: 8px 20px;

  @media screen and (max-width: 768px) {
    width: 190px;
  }
`

const ErrorMessage = styled.p`
  margin-top: 0.3rem;
`

function CommissionPage({ currentSimPriceWei, remainingAtCurrentPrice }: ServerSideProps): React.ReactElement {
  const { query, push } = useRouter()
  const [counter, setCounter] = React.useState(query.qty ? parseInt(query.qty as string) : 1)
  const [error, setError] = React.useState("")
  const artistsSelected = Array.isArray(query.artists) && query.artists.length === 3
  const signer = useWalletStore((state) => state.signer)

  const commission = async () => {
    setError("")
    try {
      if (signer && Array.isArray(query.artists)) {
        const { hash } = await commissionSim(signer, query.artists, counter, currentSimPriceWei)

        push({ pathname: "/commission/success", query: { txHash: hash } })
      }
    } catch (err) {
      if ((err as Error).message.includes("insufficient funds")) {
        setError("Insufficient ETH balance")
      }
    }
  }

  return (
    <>
      <HTMLHead title="Commission" />
      <Content>
        <MainSection>
          <Row>
            <DescCol>
              <h1>
                Commission
                <br />a SIM
              </h1>
              <HideOnMobile>
                <p>*selected artists will become more rare throughout the collection.</p>
                <p>*selection does not determine which SIM you get.</p>
                <Link href="/faq">Learn more in the FAQ page. </Link>
              </HideOnMobile>
            </DescCol>
            <FormContainer>
              <AmountContainer>
                <button onClick={() => setCounter((c) => c - 1)} disabled={counter === 1}>
                  -
                </button>
                <h1>{counter}</h1>
                <button onClick={() => setCounter((c) => c + 1)} disabled={counter === remainingAtCurrentPrice}>
                  +
                </button>
              </AmountContainer>
              <p>
                Commission {counter} SIM for{" "}
                {formatAmount(ethers.utils.formatEther(ethers.BigNumber.from(currentSimPriceWei).mul(counter)))} ETH
              </p>
              <p>Max {remainingAtCurrentPrice} SIM</p>

              <Link
                href={{
                  pathname: "/commission/artists",
                  query: {
                    artists: query.artists,
                    qty: counter,
                  },
                }}
                passHref
              >
                <Anchor>Select 3 artists*</Anchor>
              </Link>
              {Array.isArray(query.artists) ? (
                <SelectedArtistsContainer>
                  {query.artists.map((id) => (
                    <p key={id}>{Object.values(artists).find((a) => a.id === id)?.["full-name"]}</p>
                  ))}
                </SelectedArtistsContainer>
              ) : (
                <p style={{ marginTop: "2rem" }}>...</p>
              )}

              {signer ? (
                <ActionButton onClick={commission} disabled={!artistsSelected}>
                  COMMISSION
                </ActionButton>
              ) : (
                <ConnectBtn />
              )}
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <Disclaimer>
                By commissioning, you agree to the <Link href="/terms-of-sale">Terms of sale</Link> and{" "}
                <a href="/terms-of-use.pdf" target="_blank" rel="noreferrer">
                  terms of use
                </a>
              </Disclaimer>
            </FormContainer>
            <ShowOnMobile>
              <p>*selected artists will become more rare throughout the collection.</p>
              <p>*selection does not determine which SIM you get.</p>
              <Link href="/faq">Learn more in the FAQ page. </Link>
            </ShowOnMobile>
          </Row>
        </MainSection>
      </Content>
    </>
  )
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<ServerSideProps>> {
  try {
    const provider = getAlchemyProvider()
    const currentSimPriceWei = await getCurrentPrice(provider)
    const remainingAtCurrentPrice = await getAmountOfSimsRemainingAtCurrentPrice(provider)

    return {
      props: {
        currentSimPriceWei: currentSimPriceWei.toString(),
        remainingAtCurrentPrice: remainingAtCurrentPrice.toNumber(),
      },
    }
  } catch (err) {
    // sale has ended
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
}

export default CommissionPage
