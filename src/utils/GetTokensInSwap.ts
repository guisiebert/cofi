import { useReadContract } from "wagmi"
import {
  COFITOKEN_ABI,
  COFIBEAN_CONTRACT,
  COFICUP_CONTRACT,
  COFIBEAN_SWAP,
  COFICUP_SWAP,
} from "@/contracts/addressList"
import { parseBigInt } from "@/utils/parseBigInt"

export function GetTokensInSwap(swapToken: "beans" | "cups") {
  const resultWithDecimals = useReadContract({
    address: swapToken == "beans" ? COFIBEAN_CONTRACT : COFICUP_CONTRACT,
    abi: COFITOKEN_ABI,
    functionName: "balanceOf",
    args: [swapToken == "beans" ? COFIBEAN_SWAP : COFICUP_SWAP],
  })

  const result = resultWithDecimals.data
    ? parseBigInt(resultWithDecimals.data)
    : 0

  return result
}
