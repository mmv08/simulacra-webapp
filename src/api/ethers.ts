import { ethers } from "ethers"

function getAlchemyProvider(): ethers.providers.BaseProvider {
  return ethers.getDefaultProvider(process.env.NEXT_PUBLIC_ALCHEMY_URL)
}

export { getAlchemyProvider }
