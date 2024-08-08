import { useContext, useState } from "react"
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
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi"
import {
  COFIBEAN_CONTRACT,
  COFICUP_CONTRACT,
  COFISWAP_ABI,
} from "@/contracts/addressList"
import { BaseError, parseEther } from "viem"
import { GetMaticInWallet } from "@/utils/old/GetMaticInWallet"
import { getTokensInWallet } from "@/utils/getTokensInWallet"
import { Separator } from "@radix-ui/react-separator"
import { Toaster, toast } from "sonner"
import { ApproveButton } from "./ApproveButton"
import { CheckIfAllowance } from "@/utils/CheckIfAllowance"

export default function BuySellTokensButton(props: {
  inputItem: "beans" | "cups"
  action: "buy" | "sell"
}) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const beansPrice = 0.01
  const cupsPrice = 1

  const { inputItem, action } = props

  // Desktop = Dialog
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <Toaster />
        <DialogTrigger asChild>
          <Button
            className="bg-emerald-950 text-lg font-bold text-emerald-300"
            size={"lg"}
          >
            {CapitalizeFirstLetter(action)} {CapitalizeFirstLetter(inputItem)}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {CapitalizeFirstLetter(action)} {CapitalizeFirstLetter(inputItem)}
            </DialogTitle>
            <DialogDescription>
              How many {inputItem} would you like to {action}?
            </DialogDescription>
          </DialogHeader>
          <BuySellForm
            inputItem={inputItem}
            action={action}
            beansPrice={beansPrice}
            cupsPrice={cupsPrice}
          />
        </DialogContent>
      </Dialog>
    )
  }

  // Mobile = Drawer
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Toaster />
      <DrawerTrigger asChild>
        <Button
          className="bg-emerald-950 text-lg font-bold text-emerald-300"
          size={"lg"}
        >
          {CapitalizeFirstLetter(action)} {CapitalizeFirstLetter(inputItem)}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>
            {CapitalizeFirstLetter(action)} {CapitalizeFirstLetter(inputItem)}
          </DrawerTitle>
          <DrawerDescription>
            How many {inputItem} would you like to {action}?
          </DrawerDescription>
        </DrawerHeader>
        <BuySellForm
          inputItem={inputItem}
          action={action}
          beansPrice={beansPrice}
          cupsPrice={cupsPrice}
        />
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

interface BuySellFormProps {
  inputItem: "beans" | "cups"
  action: "buy" | "sell"
  beansPrice: number
  cupsPrice: number
}

function BuySellForm(props: BuySellFormProps) {
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })
  const { inputItem, action, beansPrice, cupsPrice } = props
  const itemPrice = inputItem == "beans" ? beansPrice : cupsPrice
  const [qty, setQty] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const maticBalanceInWallet = GetMaticInWallet()
  const itemBalanceInWallet = Number(getTokensInWallet(inputItem))

  const userAddress = useAccount().address
  const hasAllowance = CheckIfAllowance(inputItem, userAddress!, "swap")

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
            window.open(`https://mumbai.polygonscan.com/tx/${hash}`, "_blank"),
        },
      })
  }

  function handleQtyChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQty(Number(e.target.value))
    setTotalPrice(Number(e.target.value) * itemPrice)
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (action == "buy") {
      buyTokens()
    }
    if (action == "sell") {
      sellTokens()
    }
  }

  async function handleMax(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (action == "buy") {
      const qty: number = maticBalanceInWallet / itemPrice
      setQty(qty)
      setTotalPrice(qty * itemPrice)
    }

    if (action == "sell") {
      const qty: number = itemBalanceInWallet
      setQty(qty)
      setTotalPrice(qty * itemPrice)
    }
  }

  function buyTokens() {
    console.log(
      `initiating purchase of ${qty} ${inputItem} for ${totalPrice} ETH`
    )

    const itemContract =
      inputItem == "beans" ? COFIBEAN_CONTRACT : COFICUP_CONTRACT

    writeContract({
      address: itemContract,
      abi: COFISWAP_ABI,
      functionName: "swapToCofi",
      value: parseEther(String(totalPrice)),
    })
  }

  function sellTokens() {
    console.log(
      `initiating selling of ${qty} ${inputItem} for ${totalPrice} ETH`
    )
    const itemContract =
      inputItem == "beans" ? COFIBEAN_CONTRACT : COFICUP_CONTRACT

    writeContract({
      address: itemContract,
      abi: COFISWAP_ABI,
      functionName: "swapToCofi",
      value: parseEther(String(totalPrice)),
    })
  }

  return (
    <form className={cn("grid items-start gap-4 px-4")}>
      <div className={`grid gap-2 ${!hasAllowance && "text-slate-200"}`}>
        {/* QUANTITY INPUT */}
        <Label htmlFor="qty">Quantity in {inputItem}</Label>
        <div className="flex space-x-2">
          <Input
            type="number"
            id="qty"
            required
            value={qty}
            onChange={handleQtyChange}
            disabled={!hasAllowance}
          />
          <Button
            variant={"outline"}
            onClick={handleMax}
            disabled={!hasAllowance}
          >
            Max
          </Button>
        </div>
        {action == "sell" && (
          <small>
            Your {inputItem} balance: {itemBalanceInWallet}
          </small>
        )}

        <Separator />

        {/* PRICE INPUT */}
        <Label htmlFor="totalCost">Price in ETH</Label>
        <div className="flex space-x-2">
          <Input
            type="number"
            id="totalCost"
            value={totalPrice.toFixed(2)}
            readOnly
            disabled={!hasAllowance}
            // onChange={() => console.log("new total price is ", totalPrice)}
          />
        </div>
        {action == "buy" && (
          <small>Your ETH balance: {maticBalanceInWallet.toFixed(2)}</small>
        )}
      </div>

      <Separator />

      {/* // If no Allowance = approve button */}
      {!hasAllowance && (
        <ApproveButton inputItem={inputItem} allowType="swap" />
      )}

      {/* SUBMIT BUTTON */}
      {hasAllowance && (
        <Button onClick={handleSubmit} type="submit">
          {isPending
            ? "Waiting..."
            : isConfirming
            ? "Confirming..."
            : isConfirmed
            ? "Confirmed"
            : `${CapitalizeFirstLetter(action)} ${qty.toFixed(
                0
              )} coffee ${inputItem}`}
        </Button>
      )}
    </form>
  )
}
