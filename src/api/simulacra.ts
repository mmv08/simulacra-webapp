import { BigNumber, ethers } from "ethers"
import { TransactionResponse } from "@ethersproject/abstract-provider"
import SimulacraAbi from "src/static/simulacra_abi.json"

export const SIMULACRA_ADDRESS = "0x8644053aADb0dF38e7734F5010Fef643316bBB92"

function encodeArtistSelection(selection: number[]): string {
  return selection.reduce(
    (prev, curr) => prev + (curr.toString(16).length === 1 ? `0${curr.toString(16)}` : curr.toString(16)),
    "0x",
  )
}

function getSimulacraContract(
  address: string,
  connection: ethers.providers.BaseProvider | ethers.providers.JsonRpcSigner,
): ethers.Contract {
  return new ethers.Contract(address, SimulacraAbi.abi, connection)
}

function getSaleDaysLeft(): number {
  const saleEnd = 1619863200 * 1000
  const currentDate = new Date()
  const diffInMs = saleEnd - currentDate.getTime()

  return Math.round(diffInMs / (1000 * 60 * 60 * 24))
}

async function getCurrentPrice(provider: ethers.providers.BaseProvider): Promise<BigNumber> {
  const simulacra = getSimulacraContract(SIMULACRA_ADDRESS, provider)
  const currentPrice = await simulacra.getCurrentPrice()

  return currentPrice
}

async function getAmountOfSimsRemainingAtCurrentPrice(provider: ethers.providers.BaseProvider): Promise<BigNumber> {
  const simulacra = getSimulacraContract(SIMULACRA_ADDRESS, provider)
  const currentPrice = await simulacra.remainingAtCurrentPrice()

  return currentPrice
}

async function commissionSim(
  signer: ethers.providers.JsonRpcSigner,
  artistSelection: string[],
  amount: number,
  currentPriceWei: string,
): Promise<TransactionResponse> {
  const simulacra = getSimulacraContract(SIMULACRA_ADDRESS, signer)
  const txValue = ethers.BigNumber.from(currentPriceWei).mul(ethers.BigNumber.from(amount)).toString()

  const sim = await simulacra.commissionPieces(
    encodeArtistSelection(artistSelection.map((a) => parseInt(a, 10))),
    amount,
    {
      value: txValue,
    },
  )

  return sim
}

async function getSimsByOwner(provider: ethers.providers.BaseProvider, owner: string): Promise<string[]> {
  const simulacra = getSimulacraContract(SIMULACRA_ADDRESS, provider)
  const numOfOwnedSims = (await simulacra.balanceOf(owner)).toNumber()
  const requests = []

  for (let i = 0; i < numOfOwnedSims; i++) {
    requests.push(simulacra.tokenOfOwnerByIndex(owner, i))
  }

  const sims = await Promise.all(requests)

  return sims.map((sim) => sim.toString())
}

async function getTokenMetadataUri(provider: ethers.providers.BaseProvider, tokenId: string): Promise<string> {
  const simulacra = getSimulacraContract(SIMULACRA_ADDRESS, provider)
  const uri = await simulacra.tokenURI(tokenId)

  return uri
}

async function getInitialPriceOf(provider: ethers.providers.BaseProvider, tokenId: string): Promise<BigNumber> {
  const simulacra = getSimulacraContract(SIMULACRA_ADDRESS, provider)
  const price = await simulacra.getPriceOf(tokenId)

  return price
}

async function getOwnerOf(provider: ethers.providers.BaseProvider, tokenId: string): Promise<string> {
  const simulacra = getSimulacraContract(SIMULACRA_ADDRESS, provider)
  const owner = await simulacra.ownerOf(tokenId)

  return owner
}

export {
  getCurrentPrice,
  commissionSim,
  getSaleDaysLeft,
  getAmountOfSimsRemainingAtCurrentPrice,
  getSimsByOwner,
  getTokenMetadataUri,
  getInitialPriceOf,
  getOwnerOf,
}
