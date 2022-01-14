import styled from "@emotion/styled"
import Link from "next/link"

const SFooter = styled.footer`
  margin: 30px 0;
`

const Content = styled.div`
  max-width: 1114px;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  & > div {
    z-index: 1;
    & > a {
      margin-left: 40px;

      &:first-of-type {
        margin-left: 0;
      }
    }

    &:first-of-type {
      margin-right: auto;
    }
  }

  @media screen and (max-width: 1114px) {
    padding: 0 23px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    & > div:first-of-type > a {
      margin-left: 15px;

      &:first-of-type {
        margin-left: 0;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 10px;

      & > a {
        margin-left: 0;
      }
    }
  }
`

function Footer(): React.ReactElement {
  return (
    <SFooter>
      <Content>
        <div>
          <Link href="/terms-of-sale">Terms of sale</Link>
          <a href="/terms-of-use.pdf" target="_blank" rel="noreferrer">
            Terms of use
          </a>
        </div>
        <div>
          <a href="https://www.notion.so/Simulacra-3251f89fe2af4cb0a76bd65887f3e3cd" target="_blank" rel="noreferrer">
            Press kit
          </a>
          <a href="https://twitter.com/simulacra_art" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://discord.gg/YWNZrvtdzm" target="_blank" rel="noreferrer">
            Discord
          </a>
          <a href="https://instagram.com/simulacra.art/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a
            href="https://etherscan.io/address/0x8644053aadb0df38e7734f5010fef643316bbb92"
            target="_blank"
            rel="noreferrer"
          >
            Etherscan
          </a>
        </div>
      </Content>
    </SFooter>
  )
}

export { Footer }
