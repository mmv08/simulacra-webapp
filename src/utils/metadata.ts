import fs from "fs/promises"
import path from "path"

type SimMetadata = {
  description: string
  external_url: string
  background_color: string
  name: string
  image: string
  attributes: { trait_type: string; value: string }[]
  id: string
}

async function getMetadata(simId: string): Promise<SimMetadata> {
  const pathToMetadata = path.join(process.cwd(), "src", "static", "metadata", `${simId}.json`)
  const metadata = await fs.readFile(pathToMetadata)
  const metaJson: SimMetadata = JSON.parse(metadata.toString())

  metaJson.id = simId

  return metaJson
}

export type { SimMetadata }
export { getMetadata }
