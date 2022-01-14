import Onboard from "@gnosis.pm/safe-apps-onboard"

const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

const wallets = [
  { walletName: "metamask", preferred: true },
  {
    walletName: "walletConnect",
    preferred: true,
    infuraKey,
  },
  { walletName: "trust", preferred: true },

  { walletName: "authereum" },
  { walletName: "torus" },
  { walletName: "coinbase" },
  { walletName: "walletLink", rpcUrl },
  { walletName: "opera" },
  { walletName: "operaTouch" },
]

const onboard = Onboard({
  networkId: parseInt(process.env.NETWORK_ID || "1"),
  subscriptions: {
    wallet: (wallet) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedWallet", wallet.name || "")
      }
    },
  },
  walletSelect: {
    wallets,
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function connectToWallet(name?: string): Promise<any> {
  const walletSelect = await onboard.walletSelect(name)

  if (walletSelect) {
    await onboard.walletCheck()

    const { wallet } = onboard.getState()

    return wallet.provider
  }

  throw "No wallet selected"
}

export { connectToWallet }
