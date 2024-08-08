import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi"
import {
  COFIBEANFARM_CONTRACT,
  COFICUPFARM_CONTRACT,
  COFIBEAN_CONTRACT,
  COFICUP_CONTRACT,
  COFITOKEN_ABI,
  COFIBEAN_SWAP,
  COFICUP_SWAP,
} from "@/contracts/addressList"
import { Button } from "@/components/ui/button"
import { Toaster, toast } from "sonner"
import { parseEther } from "viem"

export function ApproveButton(props: {
  inputItem: "cups" | "beans"
  allowType: "farm" | "swap"
}) {
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })
  const { inputItem, allowType } = props

  // Error Toast
  {
    error &&
      toast(`Error: ${(error as BaseError).shortMessage || error.message}`)
  }

  // Confirmation Toast
  {
    isConfirmed && toast("Approval confirmed!")
  }

  // Approve Handler
  async function handleClickApprove(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    const itemContract =
      inputItem == "beans" ? COFIBEAN_CONTRACT : COFICUP_CONTRACT
    const itemABI = inputItem == "beans" ? COFITOKEN_ABI : COFITOKEN_ABI

    const farmContract =
      inputItem == "beans" ? COFIBEANFARM_CONTRACT : COFICUPFARM_CONTRACT
    const swapContract = inputItem == "beans" ? COFIBEAN_SWAP : COFICUP_SWAP

    const contractToAllow = allowType == "farm" ? farmContract : swapContract

    writeContract({
      address: itemContract,
      abi: itemABI,
      functionName: "approve",
      args: [contractToAllow, parseEther("100000")],
    })
  }

  return (
    <>
      <Toaster />

      <Button
        className=" font-bold text-lg w-full"
        size={"lg"}
        onClick={handleClickApprove}
        type="submit"
        disabled={isPending || isConfirming}
      >
        {isPending
          ? "Waiting..."
          : isConfirming
          ? "Confirming..."
          : isConfirmed
          ? "Confirmed"
          : `Approve ${allowType}`}
      </Button>
    </>
  )
}
