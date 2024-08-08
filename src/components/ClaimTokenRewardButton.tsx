import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi"
import {
  COFIFARM_ABI,
  COFIBEANFARM_CONTRACT,
  COFICUPFARM_CONTRACT,
} from "@/contracts/addressList"

import { Button } from "@/components/ui/button"
import { Toaster, toast } from "sonner"

export function ClaimTokenButton(props: { inputItem: "cups" | "beans" }) {
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })
  const { inputItem } = props

  // Error Toast
  {
    error &&
      toast(`Error: ${(error as BaseError).shortMessage || error.message}`)
  }

  // Confirmation Toast
  {
    isConfirmed &&
      toast("Transaction confirmed!", {
        action: {
          label: "View Tx",
          onClick: () =>
            window.open(`https://sepolia.etherscan.io/tx/${hash}`, "_blank"),
        },
      })
  }

  // Claim Handler
  async function handleClickHarvest(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    const itemContract =
      inputItem == "beans" ? COFIBEANFARM_CONTRACT : COFICUPFARM_CONTRACT
    const itemABI = COFIFARM_ABI

    writeContract({
      address: itemContract,
      abi: itemABI,
      functionName: "claim",
    })
  }

  return (
    <>
      <Toaster />

      <Button
        size={"lg"}
        className=" font-bold text-lg"
        onClick={handleClickHarvest}
        type="submit"
        disabled={isPending || isConfirming}
      >
        {isPending
          ? "Waiting..."
          : isConfirming
          ? "Confirming..."
          : isConfirmed
          ? "Confirmed"
          : "Harvest"}
      </Button>
    </>
  )
}
