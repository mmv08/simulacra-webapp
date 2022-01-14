function getOpenSeaUrl(chainId: number, contractAddress: string, tokenId: string): string {
  if (chainId === 1) {
    return `https://opensea.io/assets/${contractAddress}/${tokenId}`
  }

  return `https://testnets.opensea.io/assets/${contractAddress}/${tokenId}`
}

export { getOpenSeaUrl }
