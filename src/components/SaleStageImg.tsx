import styled from "@emotion/styled"
import { ethers } from "ethers"

const Img = styled.img`
  width: 100%;
`

function getStageImageByPrice(price: string): string {
  switch (price) {
    case "111111111111111111":
      return "1"

    case "333333333333333333":
      return "2"

    case "666666666666666666":
      return "3"

    case "1000000000000000000":
      return "4"

    case "3000000000000000000":
      return "5"

    case "11000000000000000000":
      return "6"

    case "111000000000000000000":
      return "7"

    default:
      return "sold"
  }
}

function SaleStageImg({ price, className = "" }: { price: string; className?: string }): React.ReactElement {
  const imageName = getStageImageByPrice(price)

  return (
    <Img
      src={`/assets/sale_stages/${imageName}.svg`}
      className={`${className} img-invert`}
      alt={`Picture representing different stages of SIM sale and its price: 0.11 ETH up to 55 SIMs, 0.33 ETH up to 610 SIMs, 0.66 up to 1721, 1 up to 2832, 3 up to 3387, 11 up to 3442, 111 up to 3447". Current stage is ${imageName} and SIM price is ${ethers.utils.formatEther(
        price,
      )}`}
    />
  )
}

export { SaleStageImg }
