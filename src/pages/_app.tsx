import { ThemeProvider } from "next-themes"
import Head from "next/head"
import { AppProps } from "next/app"
import dynamic from "next/dynamic"
import { GlobalStyle } from "src/styles/global"
import { Footer } from "src/components/Footer"
import { WalletProvider } from "src/stores/wallet"

const Header = dynamic(
  function () {
    return import("../components/Header")
  },
  { ssr: false },
)

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ThemeProvider>
      <WalletProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Simulacra is an NFT art project inspired by Jean Baudrillard’s Simulacra and Simulation. Simulacra refers to
            representations of objects which may or may not have an original"
          />

          <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Simulacra" />
          <meta
            property="og:description"
            content="Simulacra is an NFT art project inspired by Jean Baudrillard’s Simulacra and Simulation. Simulacra refers to
            representations of objects which may or may not have an original"
          />
          <meta property="og:url" content="https://simulacra.art" />
          <meta property="og:image" content="/assets/og-image.jpeg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@simulacra_art" />
          <meta name="twitter:title" content="Simulacra" />
          <meta
            name="twitter:description"
            content="Simulacra is an NFT art project inspired by Jean Baudrillard’s Simulacra and Simulation. Simulacra refers to
            representations of objects which may or may not have an original"
          />
          <meta name="twitter:creator" content="@simulacra_art" />
          <meta
            name="twitter:image:alt"
            content="Simulacra is an NFT art project inspired by Jean Baudrillard’s Simulacra and Simulation. Simulacra refers to
            representations of objects which may or may not have an original"
          />
          <meta name="twitter:image" content="https://www.simulacra.art/assets/og-image.jpeg" />
        </Head>
        {GlobalStyle}
        <Header />
        <Component {...pageProps} />
        <Footer />
      </WalletProvider>
    </ThemeProvider>
  )
}

export default MyApp
