import React from "react"
import styled from "@emotion/styled"
import Headroom from "react-headroom"
import Link from "next/link"
import { Button } from "src/components/Button"
import { useWalletStore } from "src/stores/wallet"
import { ThemeToggler } from "./ThemeToggler"
import { useMediaQuery } from "src/hooks/useMediaQuery"
import ConnectWalletButton from "./ConnectWalletButton"
import { getSaleDaysLeft } from "src/api/simulacra"

const SHeader = styled.header`
  width: 100%;
  height: auto;
  transition: top 0.4s;
  max-width: 1114px;
  background: var(--background);
  z-index: 100;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  padding: 20px 0;

  @media screen and (max-width: 1114px) {
    padding: 20px 23px;
  }
`

const LogoCounterContainer = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
  z-index: 1;
`

const Logo = styled.p`
  font-family: "Voyage";
  font-weight: bold;
  margin-right: 1rem;

  & > br {
    display: none;
  }

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 900px) {
    font-size: 2.3rem;
    font-weight: 400;

    & > br {
      display: block;
    }
  }
`

const HamburgerLabel = styled.label`
  display: none;

  @media screen and (max-width: 900px) {
    display: inline-block;
    background: transparent;
    font-style: normal;
    font-size: 1.6rem;
    cursor: pointer;
    z-index: 10000;
  }
`

const HamburgerItems = styled.div`
  display: flex;
  align-items: center;

  a,
  button {
    min-width: 100px;
    padding: 4px 14px;
    text-decoration: none;
    text-align: center;
    @media screen and (max-width: 900px) {
      box-sizing: border-box;
      display: block;
      width: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const ParticipateLink = styled.a`
  text-transform: uppercase;
  padding: 4px 14px;
  border: 1px solid var(--text);
  border-radius: 50px;
  z-index: 50;
  min-height: 24px;
  font-size: 1.25rem;
  color: var(--text);
  background: var(--background);

  @media screen and (min-width: 900px) {
    display: none;
  }
`

const StyledButton = styled(Button)`
  text-align: center;
  padding: 10px 20px;
`

const HamburgerInput = styled.input`
  display: none;
  position: absolute;
  right: 0px;

  @media screen and (max-width: 900px) {
    &:checked ~ ${HamburgerItems} {
      display: flex;
      position: fixed;
      left: 0;
      right: 0;
      width: 100vw;
      margin: 0;
      flex-direction: column;
      height: 100vh;
      align-items: center;
      background: var(--background);

      ${StyledButton} {
        margin-top: 50px;
        width: 90%;
      }

      & > div {
        margin-top: 50px;
      }

      a {
        width: 90%;
        margin-top: 50px;
        left: auto;
        right: auto;
      }
    }
  }
`

function Header(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const isMobile = useMediaQuery("(max-width: 900px)")
  const account = useWalletStore((state) => state.account)
  const daysLeftTillSaleEnd = getSaleDaysLeft()

  const headroomStyles = { zIndex: 100 }
  if (mobileMenuOpen) {
    // @ts-expect-error ://
    headroomStyles.position = "fixed"
  }

  return (
    <Headroom style={headroomStyles} disable={isMobile}>
      <SHeader>
        <LogoCounterContainer>
          <Logo onClick={closeMobileMenu}>
            <Link href="/">SIMULACRA </Link>
            <br />
            <span>commissions closed</span>
          </Logo>
          {daysLeftTillSaleEnd > 0 && (
            <Link href="/commission">{`${daysLeftTillSaleEnd} day${daysLeftTillSaleEnd > 1 ? "s" : ""} left`}</Link>
          )}
        </LogoCounterContainer>
        <nav>
          <HamburgerLabel htmlFor="hamburger-menu-btn">
            <img src="/assets/icon-burger.svg" className="img-invert" alt="Menu icon" style={{ paddingTop: 10 }} />
          </HamburgerLabel>
          <HamburgerInput
            type="checkbox"
            id="hamburger-menu-btn"
            checked={mobileMenuOpen}
            onChange={() => setMobileMenuOpen((open) => !open)}
          />

          <HamburgerItems onClick={closeMobileMenu}>
            <ThemeToggler />
            <Link href="/info">INFO</Link>
            <Link href="/faq">FAQ</Link>
            {account && <Link href={`/gallery/${account}`}>MY COLLECTION</Link>}
            <ConnectWalletButton />
            <ParticipateLink href="https://opensea.io/collection/simulacra-v2">SEE ON OPENSEA</ParticipateLink>
          </HamburgerItems>
        </nav>
      </SHeader>
    </Headroom>
  )
}

export default Header
