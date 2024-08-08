import {
  type BaseError,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi"
import { Button } from "../ui/button"
import { GET_TEST_BEANS, GET_TEST_BEANS_ABI } from "@/contracts/addressList"

export default function GetTestTokensButton() {
  const { data: hash, writeContract, isPending, error } = useWriteContract()

  function handleClick() {
    writeContract({
      address: GET_TEST_BEANS,
      abi: GET_TEST_BEANS_ABI,
      functionName: "getTestTokens",
    })
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })

  return (
    <Button
      size={"lg"}
      className="h-16"
      onClick={handleClick}
      disabled={isPending}
    >
      {error
        ? "Already claimed"
        : isConfirmed
        ? "Sent. Refresh page"
        : isConfirming
        ? "Waiting..."
        : isPending
        ? "Confirming..."
        : "Get test tokens"}
    </Button>
  )
}
