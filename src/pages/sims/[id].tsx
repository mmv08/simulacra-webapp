import React from "react"
import styled from "@emotion/styled"
import { ethers } from "ethers"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { useRouter } from "next/router"
import { FOOTER_HEIGHT, HEADER_DESKTOP_HEIGHT } from "src/styles/constants"
import { HTMLHead } from "src/components/HTMLHead"
import { getInitialPriceOf, getOwnerOf, SIMULACRA_ADDRESS } from "src/api/simulacra"
import { formatAmount } from "src/utils/numbers"
import { textShortener } from "src/utils/strings"
import { getOpenSeaUrl } from "src/utils/openSea"
import { getAlchemyProvider } from "src/api/ethers"
import { getMetadata, SimMetadata } from "src/utils/metadata"

const Content = styled.main`
  max-width: 1114px;
  margin: 0 auto;
  height: 100vh;
  margin-bottom: -${FOOTER_HEIGHT};
  margin-top: -${HEADER_DESKTOP_HEIGHT};
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 342px;
    height: 320px;
  }

  @media screen and (max-width: 1114px) {
    padding: 0 23px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    flex-direction: column;
    justify-content: flex-start;
    height: fit-content;
    margin-bottom: 0;

    img {
      width: 242px;
      height: 220px;
    }
  }
`

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
`

const Heading = styled.p`
  color: #8d8d8d;
  text-transform: uppercase;
`

const Column = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;

    width: 327px;

    & + div {
      margin-top: 2rem;
    }

    @media screen and (max-width: 1114px) {
      width: 300px;
    }
  }

  &:first-of-type {
    margin-right: 30px;
  }

  @media screen and (max-width: 1114px) {
    &:first-of-type {
      margin-right: 0;
    }
  }
`

const Row = styled.div`
  display: flex;
  font-size: 1.25rem;

  @media screen and (max-width: 1114px) {
    flex-direction: column;

    ${Column} {
      margin-top: 2rem;
    }
  }
`

const OpenSeaLink = styled.a`
  text-transform: uppercase;
  padding: 4px 20px;
  margin-top: 2rem;
  border: 1px solid var(--text);
  border-radius: 50px;
  z-index: 50;
  min-height: 24px;
  font-size: 1.25rem;
  color: var(--text);
  background: var(--background);
  display: inline-block;
  width: 100%;
  text-align: center;
`

type ServerSideProps = {
  initialPrice: string
  owner: string
  metadata: SimMetadata
}

function SimPage({ initialPrice, owner, metadata }: ServerSideProps): React.ReactElement {
  const {
    query: { id = "" },
    push,
  } = useRouter()

  React.useEffect(() => {
    if (typeof id !== "string") {
      push("/")
    }
  }, [id, push])

  const imgUrl = `${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/${metadata.image.slice(7)}`

  return (
    <>
      <HTMLHead title={`#${(id as string).padStart(4, "0")}`} />
      <Content>
        <img src={imgUrl} alt={`SIM ${id}`} />
        <Metadata>
          <h1>#{(id as string).padStart(4, "0")}</h1>
          <Row>
            <Column>
              {metadata.attributes.map(({ trait_type: trait, value }) => (
                <div key={trait}>
                  <Heading>{trait}</Heading>
                  <p>{value}</p>
                </div>
              ))}
            </Column>
            <Column>
              <div>
                <Heading>OWNED BY</Heading>
                <p>{textShortener(owner, 4, 4)}</p>
              </div>
              <div>
                <Heading>PRICE</Heading>
                <p>{formatAmount(ethers.utils.formatEther(initialPrice))} ETH</p>
              </div>
              <OpenSeaLink href={getOpenSeaUrl(1, SIMULACRA_ADDRESS, id as string)} target="_blank" rel="norreferrer">
                VIEW ON OPEN SEA
              </OpenSeaLink>
            </Column>
          </Row>
        </Metadata>
      </Content>
    </>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<ServerSideProps>> {
  try {
    const provider = getAlchemyProvider()
    const initialPrice = await getInitialPriceOf(provider, context.query.id as string)
    const owner = await getOwnerOf(provider, context.query.id as string)
    const metadata = await getMetadata(context.query.id as string)

    return {
      props: {
        initialPrice: initialPrice.toString(),
        owner,
        metadata,
      },
    }
  } catch (err) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
}

export default SimPage
