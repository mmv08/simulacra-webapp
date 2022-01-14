import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { getSimsByOwner } from "src/api/simulacra"
import { Sim } from "src/components/pages/gallery/Sim"
import { HTMLHead } from "src/components/HTMLHead"
import { getAlchemyProvider } from "src/api/ethers"
import { getMetadata, SimMetadata } from "src/utils/metadata"

const Content = styled.main`
  max-width: 1114px;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 30% 60%;
  min-height: 100vh;
  margin-top: 100px;
  justify-content: space-between;
  margin-bottom: 100px;

  @media screen and (max-width: 1114px) {
    padding: 0 23px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    margin-top: 40px;
    grid-row-gap: 3rem;
  }
`

const SimContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 3rem;
  height: fit-content;
  justify-items: end;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

type ServerSideProps = {
  sims: SimMetadata[]
}

const Gallery = ({ sims }: ServerSideProps): React.ReactElement => {
  return (
    <>
      <HTMLHead title="Collection" />
      <Content>
        <h1>My collection</h1>
        {sims.length === 0 && (
          <p style={{ marginTop: 15 }}>No SIM yet? Participate in the sale to get a unique piece. </p>
        )}
        <SimContainer>
          {sims.length > 0 &&
            sims.map((sim) => (
              <Link key={sim.id} href={`/sims/${sim.id}`} passHref>
                <a>
                  <Sim metadata={sim} />
                </a>
              </Link>
            ))}
        </SimContainer>
      </Content>
    </>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<ServerSideProps>> {
  const provider = getAlchemyProvider()
  const sims = await getSimsByOwner(provider, context.query.address as string)
  const simsWithMeta = await Promise.all(sims.map((sim) => getMetadata(sim)))

  return {
    props: {
      sims: simsWithMeta,
    },
  }
}

export default Gallery
