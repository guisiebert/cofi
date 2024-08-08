"use client"

import { useRouter } from "next/navigation"
import { MenuIcon, BeanIcon, CoffeeIcon } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { GetTokensInWallet } from "@/utils/getTokensInWallet"
import { GetMaticInWallet } from "@/utils/old/GetMaticInWallet"
import { useAccount } from "wagmi"

export default function SideMenu() {
  const router = useRouter()

  const beansBalance = GetTokensInWallet("beans")
  const cupsBalance = GetTokensInWallet("cups")
  const maticBalance = GetMaticInWallet()
  const userAddress = useAccount().address

  // const beansBalance = 777
  // const cupsBalance = 777
  // const maticBalance = 777
  // const userAddress = "7x777777777777"

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={50} />
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <div // LOGOS
            className="mr-12 flex justify-between"
          >
            <Image // LOGO
              className=" h-auto w-auto "
              src={"/cofi_typo.png"}
              width={110}
              height={50}
              alt=""
              onClick={() => router.push("/")}
            />

            <Image // ALT LOGO
              className="h-auto w-auto"
              src={"/bean_typo.png"}
              width={110}
              height={50}
              alt=""
            />
          </div>
        </SheetHeader>

        <Separator />

        <div // SOCIAL ICONS
          className="flex justify-between gap-10 p-5 "
        >
          <Link href={"https://telegram.com"} target="_blank">
            <Image src={"/telegram.svg"} width={50} height={50} alt="" />
          </Link>

          <Link href={"https://discord.com"} target="_blank">
            <Image src={"/discord.svg"} width={50} height={50} alt="" />
          </Link>

          <Link href={"https://twitter.com"} target="_blank">
            <Image src={"/twitter-x.svg"} width={50} height={50} alt="" />
          </Link>
        </div>

        <Separator />

        <div // MENU LINKS
          className="flex flex-col gap-10 font-bold"
        >
          <Button variant={"link"} className="text-4xl font-bold" asChild>
            <Link href={"/#main"}>FARM</Link>
          </Button>

          <Button variant={"link"} className="text-4xl font-bold" asChild>
            <Link href={"/#market"}>TRADE</Link>
          </Button>

          <Button variant={"link"} className="text-4xl font-bold" asChild>
            <Link href={"https://www.gitbook.com/"} target="blank">
              DOCS
            </Link>
          </Button>
        </div>

        <Separator />

        <div // BALANCES
          className="flex justify-between rounded-xl border-4 border-emerald-950 bg-emerald-300 px-8 py-5"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="rounded-full border-2 border-solid border-emerald-950 bg-emerald-700 p-1.5">
              <BeanIcon strokeWidth={2} size={35} fill="white" />
            </div>
            <p className="font-bold">{beansBalance.toFixed(0) || "..."}</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="rounded-full border-2 border-solid border-emerald-950 bg-emerald-100 p-1.5">
              <CoffeeIcon strokeWidth={2} size={35} fill="white" />
            </div>
            <p className="font-bold">{cupsBalance.toFixed(0) || "..."} </p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="bg-matic rounded-full border-[3px] border-solid border-emerald-950">
              <Image src={"/eth-logo.png"} alt="" height={45} width={45} />
            </div>
            <p className="font-bold">{maticBalance.toFixed(2)} </p>
          </div>
        </div>

        <SheetFooter className="rounded bg-emerald-950 p-2 text-center text-emerald-300">
          <div // ACCOUNT ADDRESS
          >
            <p>
              <strong>Connected Wallet:</strong>
            </p>
            <p>
              <small>{userAddress}</small>
            </p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
