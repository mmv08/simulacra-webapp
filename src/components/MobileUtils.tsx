import styled from "@emotion/styled"

const ShowOnMobile = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: initial;
  }
`

const HideOnMobile = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export { HideOnMobile, ShowOnMobile }
