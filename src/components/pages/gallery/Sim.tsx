import React from "react"
import { SimMetadata } from "src/utils/metadata"

type Props = {
  metadata: SimMetadata
}

const Sim = ({ metadata }: Props): React.ReactElement => {
  const imgUrl = `${process.env.NEXT_PUBLIC_IPFS_GATEWAY}/${metadata.image.slice(7)}`

  return (
    <div style={{ height: "fit-content" }}>
      <img width="143" height="143" src={imgUrl} alt={`SIM ${metadata.id}`} />
      <p>#{metadata.id.padStart(4, "0")}</p>
    </div>
  )
}

export { Sim }
