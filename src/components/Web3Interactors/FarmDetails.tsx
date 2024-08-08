import { parseBigInt } from "@/utils/parseBigInt"
import { useReadContract } from "wagmi"
import {
  COFIBEANFARM_CONTRACT,
  COFIBEAN_CONTRACT,
  COFICUPFARM_CONTRACT,
  COFICUP_CONTRACT,
  COFITOKEN_ABI,
} from "@/contracts/addressList"
import Link from "next/link"

export default function FarmDetails({
  farmType,
}: {
  farmType: "beans" | "cups"
}) {
  const inputResultWithDecimals = useReadContract({
    address: farmType == "beans" ? COFIBEAN_CONTRACT : COFICUP_CONTRACT,
    abi: COFITOKEN_ABI,
    functionName: "balanceOf",
    args: [farmType == "beans" ? COFIBEANFARM_CONTRACT : COFICUPFARM_CONTRACT],
  })

  const outputResultWithDecimals = useReadContract({
    address: farmType == "beans" ? COFICUP_CONTRACT : COFIBEAN_CONTRACT,
    abi: COFITOKEN_ABI,
    functionName: "balanceOf",
    args: [farmType == "beans" ? COFIBEANFARM_CONTRACT : COFICUPFARM_CONTRACT],
  })

  const inputAmountInContract = inputResultWithDecimals.data
    ? parseBigInt(inputResultWithDecimals.data)
    : 0

  const outputAmountInContract = outputResultWithDecimals.data
    ? parseBigInt(outputResultWithDecimals.data)
    : 0

  return (
    <div>
      <div className="flex items-center justify-between">
        <p>
          {farmType == "beans" ? "$COFIBEAN" : "$COFICUP"} <br />
          in contract:
        </p>
        <p>
          <b>{inputAmountInContract.toFixed(2)}</b>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p>
          {farmType == "beans" ? "$COFICUP" : "$COFIBEAN"} <br />
          in contract:
        </p>
        <p>
          <b>{outputAmountInContract.toFixed(2)}</b>
        </p>
      </div>
      <Link
        target="_blank"
        href={`https://sepolia.etherscan.io/address/${
          farmType == "beans" ? COFIBEANFARM_CONTRACT : COFICUPFARM_CONTRACT
        }`}
        className="flex items-center justify-center underline"
      >
        <small className="text-center mt-2">
          Check {farmType} contract address
        </small>
      </Link>
    </div>
  )
}
