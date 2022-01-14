import React from "react"
import Head from "next/head"

interface Props {
  title?: string
}

const getTitleWithTemplate = (title: string): string => `${title} | Simulacra`

const HTMLHead = ({ title = "Welcome" }: Props): React.ReactElement => (
  <Head>
    <title>{getTitleWithTemplate(title)}</title>
  </Head>
)

export { HTMLHead }
