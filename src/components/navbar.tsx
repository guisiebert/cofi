"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { BeanIcon, CoffeeIcon } from "lucide-react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Button } from "./ui/button"
import Link from "next/link"
import SideMenu from "./side-menu"
import { getTokensInWallet } from "@/utils/getTokensInWallet"

export default function Navbar() {
  const router = useRouter()
  const beansBalance = getTokensInWallet("beans")
  const cupsBalance = getTokensInWallet("cups")

  return (
    <header // HEADER
      className="w-full px-6 py-4"
    >
      <div // TOP HEADER
        className="top-bar flex items-center pb-3 pt-0"
      >
        <Image // LOGO
          className="mr-auto cursor-pointer w-auto h-8"
          src={"/cofi_typo.png"}
          width={100}
          height={100}
          alt=""
          onClick={() => router.push("/")}
        />

        <div // BALANCES
          className="mr-5 hidden space-x-4 sm:flex"
        >
          <div className="flex items-center gap-1">
            <div className="rounded-full border-2 border-solid border-emerald-950 bg-emerald-700 p-1.5">
              <BeanIcon strokeWidth={2} size={24} fill="white" />
            </div>
            {beansBalance.toFixed(0) || "..."}
          </div>

          <div className="flex items-center gap-1">
            <div className="rounded-full border-2 border-solid border-emerald-950 bg-emerald-100 p-1.5">
              <CoffeeIcon strokeWidth={2} size={24} fill="white" />
            </div>
            {cupsBalance.toFixed(0) || "..."}
          </div>
        </div>

        <ConnectButton
          accountStatus={"address"}
          showBalance={false}
          chainStatus={"icon"}
        />
      </div>

      <div // SEPARATOR
        className="SEPARATOR mx-0 h-1 rounded bg-emerald-950"
      ></div>

      <div // SUBHEADER
        className="sub-bar flex items-center py-5"
      >
        <Image // ALT LOGO
          className="mr-auto w-auto h-8"
          src={"/bean_typo.png"}
          width={100}
          height={100}
          alt=""
        />

        <div // MENU LINKS
          className="mr-4 hidden gap-7 font-bold sm:flex"
        >
          <Button variant={"link"} className="m-0 p-0 font-bold" asChild>
            <Link href={"/#main"}>FARM</Link>
          </Button>

          <Button variant={"link"} className="m-0 p-0 font-bold" asChild>
            <Link href={"/#market"}>TRADE</Link>
          </Button>

          <Button variant={"link"} className="m-0 p-0 font-bold" asChild>
            <Link href={"https://www.gitbook.com/"} target="blank">
              DOCS
            </Link>
          </Button>
        </div>

        <div // SOCIAL ICONS
          className="ml-2 hidden gap-4 sm:flex"
        >
          <Link href={"https://telegram.com"} target="_blank">
            <Image src={"/telegram.svg"} width={23} height={23} alt="" />
          </Link>
          <Link href={"https://discord.com"} target="_blank">
            <Image src={"/discord.svg"} width={25} height={25} alt="" />
          </Link>
          <Link href={"https://twitter.com"} target="_blank">
            <Image src={"/twitter-x.svg"} width={20} height={20} alt="" />
          </Link>
        </div>

        <div // SOCIAL ICONS
          className="ml-2 flex gap-4 sm:hidden"
        >
          <SideMenu />
        </div>
      </div>
    </header>
  )
}
