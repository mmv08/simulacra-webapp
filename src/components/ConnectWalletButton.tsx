import React from "react"
import styled from "@emotion/styled"
import { ethers } from "ethers"
import { Button } from "src/components/Button"
import { connectToWallet } from "src/api/wallet"
import { useWalletStore } from "src/stores/wallet"
import { textShortener } from "src/utils/strings"

const StyledButton = styled(Button)`
  text-align: center;
  padding: 10px 20px;
`

function ConnectWalletButton({ className = "" }: { className?: string }): React.ReactElement {
  const [fetchAndSetProvider, updateProvider, disconnect, account] = useWalletStore((state) => [
    state.fetchAndSetProvider,
    state.updateProvider,
    state.disconnect,
    state.account,
  ])

  const handleProviderConnect = React.useCallback(async () => {
    try {
      const provider = await connectToWallet(localStorage.getItem("selectedWallet") ?? undefined)

      provider.on("accountsChanged", updateProvider)
      provider.on("disconnect", disconnect)

      fetchAndSetProvider(new ethers.providers.Web3Provider(provider))
    } catch (err) {
      console.error(err)
    }
  }, [fetchAndSetProvider, updateProvider, disconnect])

  React.useEffect(() => {
    if (localStorage.getItem("selectedWallet")) {
      handleProviderConnect()
    }
  }, [handleProviderConnect])

  return (
    <StyledButton className={className} onClick={handleProviderConnect} disabled={!!account}>
      {textShortener(account, 4, 4) || "CONNECT WALLET"}
    </StyledButton>
  )
}

export default ConnectWalletButton
