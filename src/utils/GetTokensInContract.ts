import { useAccount, useReadContract } from "wagmi"
import {
  COFITOKEN_ABI,
  COFIBEAN_CONTRACT,
  COFICUP_CONTRACT,
} from "@/contracts/addressList"
import { parseBigInt } from "./parseBigInt"

export function GetTokensInContract(
  farmToken: "beans" | "cups",
  itemToCheck: "beans" | "cups"
) {
  const resultWithDecimals = useReadContract({
    address: farmToken == "beans" ? COFIBEAN_CONTRACT : COFICUP_CONTRACT,
    abi: COFITOKEN_ABI,
    functionName: "balanceOf",
    args: [itemToCheck == "beans" ? COFIBEAN_CONTRACT : COFICUP_CONTRACT],
  })

  const result = resultWithDecimals.data
    ? parseBigInt(resultWithDecimals.data)
    : 0

  return result
}
