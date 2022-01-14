import { css, Global } from "@emotion/react"

const GlobalStyle = (
  <Global
    styles={css`
      :root {
        --background: #efeeec;
        --text: #181818;

        .img-invert {
          filter: invert(1);
        }
      }

      [data-theme="dark"] {
        --background: #181818;
        --text: #efeeec;

        .img-invert {
          filter: none;
        }
      }

      html,
      body {
        color: var(--text);
        background-color: var(--background);
        font-size: 16px;
        font-family: "Noto Sans", sans-serif;
        padding: 0;
        margin: 0;
        border: none;
        text-decoration: none;
        font-weight: 100;
        outline: 0;
        -webkit-font-smoothing: antialiased;

        @media screen and (max-width: 578px) {
          font-size: 12px;
        }
      }

      h1,
      h2,
      h3,
      h4 {
        font-family: "Voyage", serif;
        line-height: 120%;
        margin: 0;
        padding: 0;
        font-weight: 100;
        outline: 0;
        border: none solid transparent;
        -webkit-font-smoothing: antialiased;
      }

      h1,
      h2 {
        font-size: 3.35rem;

        @media screen and (max-width: 900px) {
          font-size: 2.3rem;
        }
      }

      a {
        color: inherit;
        text-decoration: none;
        background-color: transparent;
      }

      a:hover {
        opacity: 50%;
      }

      button {
        font-family: "Noto Sans", sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      p {
        margin: 0;
      }

      .headroom-wrapper {
        width: 100%;
        z-index: 100;
        max-width: 100vw;
      }
    `}
  />
)

export { GlobalStyle }
