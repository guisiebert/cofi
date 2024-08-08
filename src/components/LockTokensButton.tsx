import { FormEvent, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@react-hook/media-query"
import CapitalizeFirstLetter from "@/utils/capitalizeFirstLetter"
import { GetTokensInWallet } from "@/utils/getTokensInWallet"
import {
  type BaseError,
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
} from "wagmi"
import {
  COFIBEANFARM_CONTRACT,
  COFICUPFARM_CONTRACT,
  COFIFARM_ABI,
} from "@/contracts/addressList"
import { parseUnits } from "viem"
import { Toaster, toast } from "sonner"
import { CheckIfAllowance } from "@/utils/CheckIfAllowance"
import { ApproveButton } from "./ApproveButton"

export default function LockTokensButton(props: {
  inputItem: "beans" | "cups"
}) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const userAddress = useAccount().address

  const { inputItem } = props

  const hasAllowance = CheckIfAllowance(inputItem, userAddress!, "farm")

  // If no Allowance = approve button
  if (!hasAllowance) {
    return <ApproveButton inputItem={inputItem} allowType="farm" />
  }

  // Desktop = Dialog
  if (isDesktop && hasAllowance) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <Toaster />
        <DialogTrigger asChild>
          <Button
            className="bg-emerald-950 text-emerald-300 font-bold text-lg w-full"
            size={"lg"}
          >
            Lock {CapitalizeFirstLetter(inputItem)}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Lock {CapitalizeFirstLetter(inputItem)}</DialogTitle>
            <DialogDescription>
              How many {inputItem} would you like to lock?
            </DialogDescription>
          </DialogHeader>
          <DepositForm inputItem={inputItem} />
        </DialogContent>
      </Dialog>
    )
  }

  // Mobile = Drawer
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Toaster />
      <DrawerTrigger asChild>
        <Button variant="outline">Deposit</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Deposit {inputItem}</DrawerTitle>
          <DrawerDescription>
            How many {inputItem} would you like to deposit?
          </DrawerDescription>
        </DrawerHeader>
        <DepositForm inputItem={inputItem} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="ghost" className="mt-5 text-red-500">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

interface DepositFormProps {
  inputItem: "beans" | "cups"
}

function DepositForm(props: DepositFormProps) {
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })
  const { inputItem } = props
  const itemBalance = GetTokensInWallet(inputItem)
  const [qty, setQty] = useState(0)

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

  // Lock Handler
  function handleClickLock(e: FormEvent) {
    e.preventDefault()
    console.log(`Initiating Lock of ${qty} ${inputItem} `)

    const itemContract =
      inputItem == "beans" ? COFIBEANFARM_CONTRACT : COFICUPFARM_CONTRACT
    const itemABI = COFIFARM_ABI

    writeContract({
      address: itemContract,
      abi: itemABI,
      functionName: "stake",
      args: [parseUnits(String(qty), 18)],
    })
  }

  return (
    <form className={cn("grid items-start gap-4 px-4")}>
      <div className="grid gap-2">
        <Label htmlFor="number">Quantity</Label>
        <div className="flex space-x-2">
          <Input
            type="number"
            id="number"
            required
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />
          <Button
            variant={"outline"}
            onClick={(e) => {
              e.preventDefault()
              setQty(Number(itemBalance))
            }}
          >
            Max
          </Button>
        </div>
        <small>
          Your balance: {itemBalance} {inputItem}
        </small>
      </div>
      <Button onClick={handleClickLock} type="submit">
        {isPending
          ? "Waiting..."
          : isConfirming
          ? "Confirming..."
          : isConfirmed
          ? "Confirmed"
          : `Lock ${qty} coffee ${inputItem}`}
      </Button>
    </form>
  )
}
