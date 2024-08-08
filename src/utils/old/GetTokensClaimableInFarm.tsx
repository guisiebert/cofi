import { useAccount, useReadContract } from "wagmi"
import { parseBigInt } from "@/utils/parseBigInt"
import {
  COFIBEANFARM_CONTRACT,
  COFICUPFARM_CONTRACT,
  COFIFARM_ABI,
} from "@/contracts/addressList"

export function GetTokensClaimableInFarm(inputItem: "beans" | "cups") {
  const userAddress = useAccount().address

  const resultWithDecimals = useReadContract({
    address: inputItem == "cups" ? COFICUPFARM_CONTRACT : COFIBEANFARM_CONTRACT,
    abi: COFIFARM_ABI,
    functionName: "readRewards",
    args: [userAddress!],
  })

  const result = resultWithDecimals.data
    ? parseBigInt(resultWithDecimals.data)
    : 0

  return result
}
