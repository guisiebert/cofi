import { useReadContract } from "wagmi"
import {
  COFIBEANFARM_CONTRACT,
  COFIBEAN_CONTRACT,
  COFIBEAN_SWAP,
  COFICUPFARM_CONTRACT,
  COFITOKEN_ABI,
  COFICUP_CONTRACT,
  COFICUP_SWAP,
} from "@/contracts/addressList"

export function CheckIfAllowance(
  inputItem: "beans" | "cups",
  userAddress: `0x${string}`,
  allowType: "farm" | "swap"
) {
  const itemContract =
    inputItem == "beans" ? COFIBEAN_CONTRACT : COFICUP_CONTRACT
  const itemABI = COFITOKEN_ABI

  const farmContract =
    inputItem == "beans" ? COFIBEANFARM_CONTRACT : COFICUPFARM_CONTRACT
  const swapContract = inputItem == "beans" ? COFIBEAN_SWAP : COFICUP_SWAP

  const contractToAllow = allowType == "farm" ? farmContract : swapContract

  const allowance = useReadContract({
    address: itemContract,
    abi: itemABI,
    functionName: "allowance",
    args: [userAddress!, contractToAllow],
  })

  const allowed = allowance.data! > 0

  return allowed
}
