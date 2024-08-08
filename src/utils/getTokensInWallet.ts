import { useAccount, useReadContract } from "wagmi"
import {
  COFITOKEN_ABI,
  COFIBEAN_CONTRACT,
  COFICUP_CONTRACT,
} from "@/contracts/addressList"
import { parseBigInt } from "@/utils/parseBigInt"

export function getTokensInWallet(
  inputItem: "beans" | "cups" | "matic" | "eth"
) {
  const userAddress = useAccount().address

  const resultWithDecimals = useReadContract({
    address: inputItem == "beans" ? COFIBEAN_CONTRACT : COFICUP_CONTRACT,
    abi: COFITOKEN_ABI,
    functionName: "balanceOf",
    args: [userAddress!],
  })

  const result = resultWithDecimals.data
    ? parseBigInt(resultWithDecimals.data)
    : 0

  return result
}
