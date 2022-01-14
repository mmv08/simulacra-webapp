import React from "react"
import { GetServerSidePropsResult, GetServerSidePropsContext } from "next"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Link from "next/link"
import { FOOTER_HEIGHT, HEADER_DESKTOP_HEIGHT } from "src/styles/constants"
import { HTMLHead } from "src/components/HTMLHead"

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
  padding: 0 118px;
  border: 1px solid var(--text);
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 593px;
  justify-self: right;
  height: 630px;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    height: 385px;
  }
`

const Anchor = styled.a<{ dim?: boolean }>`
  padding: 8px 20px;
  border: 1px solid var(--text);
  border-radius: 50px;
  min-height: 24px;
  font-size: 1.25rem;
  color: var(--text);
  background: var(--background);

  &:not(:first-child) {
    margin-top: 2rem;
  }

  ${(props) =>
    props.dim &&
    css`
      border: none;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    `}
`

const LinksContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 10px;
`

function SuccessPage(): React.ReactElement {
  return (
    <>
      <HTMLHead title="Success" />
      <Content>
        <MainSection>
          <Row>
            <h1>
              Thank you!
              <br />
              <br />
              Your transaction is being mined.
            </h1>
            <FormContainer>
              <p>
                Your SIM has been commissioned.
                <br />
                <br />
                Please wait until the “commission period” and the “generation period” are over in order to have an image
                associated to your SIM.
              </p>
              <LinksContainer>
                <Link href="/commission" passHref>
                  <Anchor>COMMISSION MORE</Anchor>
                </Link>
                <Link href="/" passHref>
                  <Anchor dim>Go to home page</Anchor>
                </Link>
              </LinksContainer>
            </FormContainer>
          </Row>
        </MainSection>
      </Content>
    </>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<Record<string, unknown>>> {
  if (!context.query.txHash) {
    return {
      redirect: {
        destination: "/commission",
        permanent: false,
      },
    }
  }

  return { props: {} }
}

export default SuccessPage
