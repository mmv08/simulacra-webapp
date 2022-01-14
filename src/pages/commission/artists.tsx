import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"
import artists from "src/static/artists.json"
import { FOOTER_HEIGHT } from "src/styles/constants"
import { AnchorBtn } from "src/components/AnchorBtn"
import { HTMLHead } from "src/components/HTMLHead"
import { HideOnMobile, ShowOnMobile } from "src/components/MobileUtils"

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

  p + p {
    margin-top: 20px;
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
  padding-right: 0;

  @media screen and (max-width: 768px) {
    justify-self: center;
    padding: 20px 10px;
  }
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: flex-start;
  grid-row-gap: 10px;
  max-height: 440px;
  overflow-y: scroll;
  width: 100%;
`

const Artist = styled.div`
  label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    &:checked + label {
      img {
        border: 1px solid var(--text);
      }

      p {
        opacity: 1;
      }
    }
  }

  img {
    border-radius: 8px;
    margin-right: 10px;
    width: 96px;
    height: 96px;

    padding: 10px;

    @media screen and (max-width: 768px) {
      margin-right: 5px;
      width: 65px;
      height: 65px;
    }
  }

  input {
    display: none;
  }

  p {
    opacity: 0.5;
    font-size: 1.25rem;
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

const ConfirmBtnAnchor = styled(AnchorBtn)`
  margin-top: 4.5rem;
`

function ArtistsSelectionPage(): React.ReactElement {
  const { query } = useRouter()
  const initialSelection = Array.isArray(query.artists) ? query.artists?.map((a) => a) : []
  const [selectedArtists, setSelectedArtists] = React.useState<Set<string>>(new Set(initialSelection))

  const toggleArtist = (id: string): void => {
    const newSet = new Set(selectedArtists)

    if (newSet.has(id)) {
      newSet.delete(id)

      setSelectedArtists(newSet)
    } else if (newSet.size < 3) {
      newSet.add(id)

      setSelectedArtists(newSet)
    }
  }

  return (
    <>
      <HTMLHead title="Select artists" />
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
              <Gallery>
                {Object.values(artists).map((a) => (
                  <Artist key={a.id}>
                    <input
                      type="checkbox"
                      checked={selectedArtists.has(a.id)}
                      id={a.artist}
                      onChange={() => toggleArtist(a.id)}
                    />
                    <label htmlFor={a.artist}>
                      <img src={`/assets/artists_previews/${a.artist}.jpg`} alt={`${a["full-name"]} Painting`} />
                      <p>{a["full-name"]}</p>
                    </label>
                  </Artist>
                ))}
              </Gallery>
              <Link
                href={{
                  pathname: "/commission",
                  query: {
                    ...query,
                    artists: [...selectedArtists],
                  },
                }}
                passHref
              >
                <ConfirmBtnAnchor>Confirm selection</ConfirmBtnAnchor>
              </Link>
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

export default ArtistsSelectionPage
