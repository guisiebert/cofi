"use client"
import Image from "next/image"
import {
  COFIBEAN_CONTRACT,
  COFIBEAN_SWAP,
  COFICUP_SWAP,
  COFITOKEN_ABI,
} from "@/contracts/addressList"
import { parseBigInt } from "@/utils/parseBigInt"
import { useBalance, useReadContract } from "wagmi"
import { FlaskConicalIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import GetTestTokensButton from "@/components/Web3Interactors/GetTestTokensButton"
import { GetTokensInSwap } from "@/utils/GetTokensInSwap"
import { Separator } from "@/components/ui/separator"
import { GetTokensInWallet } from "@/utils/getTokensInWallet"
import { GetTokensLockedInFarm } from "@/utils/old/GetTokensLockedInFarm"
import BuySellTokensButton from "@/components/BuySellTokensButton"

export default function MarketCard() {
  const cupPrice = 0.01
  const beanPrice = 0.0001
  const beansInBeanSwapContract = parseBigInt(
    useReadContract({
      address: COFIBEAN_CONTRACT,
      abi: COFITOKEN_ABI,
      args: [COFIBEAN_SWAP],
    }).data as bigint
  )
  const maticInBeanSwapContract = useBalance({ address: COFIBEAN_SWAP }).data
    ?.formatted

  return (
    <div
      id="market"
      className="
    flex w-full max-w-6xl flex-col items-center
    mx-auto  justify-center

    "
    >
      <Image // HEADER
        src={"/game_assets/store_header.png"}
        className="small medium
              large z-20
              mb-10 w-full md:-mb-10
              md:w-10/12 lg:-mb-10 lg:w-10/12
              "
        alt=""
        width={1150}
        height={220}
      />
      <div // MARKET SECTION
        style={{ backgroundImage: `url(/game_assets/store_bg.jpg)` }}
        className="small large flex w-full max-w-6xl rounded-xl
              border-[3px] border-solid border-emerald-950
              
              bg-cover bg-bottom
              p-4 lg:p-20
              "
      >
        {/* Market window */}
        <div // MARKET CONTAINER
          className=" z-10 mx-auto flex  max-w-4xl flex-col items-center space-y-8 rounded-lg border-2  border-emerald-950 bg-emerald-100 p-4 sm:p-6 lg:p-16"
        >
          <h2 className="text-left text-5xl font-extrabold">CoFi Market</h2>
          <p className="text-left">
            Hello coffee lovers, welcome to <strong>CoFi Market</strong> - the
            decentralized marketplace for coffee lovers. If you&apos;re looking
            to buy or sell anything from coffee beans to coffee cups, you came
            to the right place. My name is Sheila, let me know if you need any
            help.
          </p>

          <div // TESTNET
            className="mx-auto mb-5 flex w-full max-w-xl flex-col items-start justify-center rounded-lg border-2 border-emerald-900 px-3 py-3 sm:px-6 lg:mx-0"
          >
            <Badge
              className="text-md -mt-7 flex gap-2 px-3"
              variant={"destructive"}
            >
              <FlaskConicalIcon />
              Testnet
            </Badge>
            <div className="flex flex-col items-center gap-6 py-3 sm:flex-row">
              <div>
                <h3 className="text-xl font-bold">
                  Get 10 $COFIBEAN to test CoFi.
                </h3>
                <p>
                  CoFi is not live yet but you can test it on Ethereum Sepolia
                  Testnet for free.
                </p>
                <small className="mt-5 block max-w-64 text-xs text-gray-500">
                  <b>First time on a testnet?</b> You&apos;ll need Sepolia ETH
                  to sign this transaction. You can get it on a faucet (like{" "}
                  <Link
                    className="underline"
                    href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia"
                  >
                    here
                  </Link>{" "}
                  {" or "}
                  <Link
                    className="underline"
                    href="https://www.alchemy.com/faucets/ethereum-sepolia"
                  >
                    here
                  </Link>
                  ).
                </small>
              </div>
              <div>
                <GetTestTokensButton />
              </div>
            </div>
          </div>

          <div // NEGOTIATE BEANS & CUPS
            className="flex w-full flex-col justify-between opacity-15 lg:flex-row lg:gap-5"
          >
            <div // NEGOTIATE BEANS
              className="mx-auto mb-5 flex w-full max-w-96 flex-col items-start justify-center space-y-4 rounded-lg border-2 border-emerald-900 px-3 py-3 sm:px-6 lg:mx-0"
            >
              <h2 className="text-xl font-bold">Coffee Beans:</h2>

              <div // STATS
                className="w-full"
              >
                <div className="flex justify-between">
                  <p>Price per bean: </p>
                  <p>{beanPrice} ETH</p>
                </div>
                <div className="flex justify-between">
                  <p>Contract Balance: </p>
                  <p>{maticInBeanSwapContract} ETH</p>
                </div>
                <div className="flex justify-between">
                  <p>Contract Balance: </p>
                  <p>{GetTokensInSwap("beans")} beans</p>
                </div>
                <Separator className="h-1" />
                <div className="flex justify-between">
                  <p>Beans in your wallet: </p>
                  <p>{GetTokensInWallet("beans").toFixed(0)} beans</p>
                </div>
                <div className="flex justify-between">
                  <p>Beans you invested: </p>
                  <p>{GetTokensLockedInFarm("beans").toFixed(0)} beans</p>
                </div>
              </div>

              <div // BUTTONS: BUY/SELL BEANS
                className="flex w-full flex-col justify-center gap-3 md:flex-row  "
              >
                <BuySellTokensButton action="buy" inputItem="beans" />
                <BuySellTokensButton action="sell" inputItem="beans" />
              </div>
            </div>

            <div // NEGOTIATE CUPS
              className="mx-auto mb-5 flex w-full max-w-96 flex-col  items-start justify-center space-y-4 rounded-lg border-2 border-emerald-900 px-3 py-3 sm:px-6 lg:mx-0"
            >
              <h2 className="text-xl font-bold">Cups of Coffee:</h2>

              <div // STATS
                className="w-full"
              >
                <div className="flex justify-between">
                  <p>Price per cup: </p>
                  <p>{cupPrice} ETH</p>
                </div>
                <div className="flex justify-between">
                  <p>Contract Balance: </p>
                  <p>{maticInBeanSwapContract} ETH</p>
                </div>
                <div className="flex justify-between">
                  <p>Contract Balance: </p>
                  <p>{GetTokensInSwap("cups")} cups</p>
                </div>
                <Separator className="h-1" />
                <div className="flex justify-between">
                  <p>Cups in your wallet: </p>
                  <p>{GetTokensInWallet("cups").toFixed(0)} cups</p>
                </div>
                <div className="flex justify-between">
                  <p>Cups you invested: </p>
                  <p>{GetTokensLockedInFarm("cups").toFixed(0)} cups</p>
                </div>
              </div>

              <div // BUTTONS: BUY/SELL CUPS
                className="flex w-full flex-col justify-center gap-3 md:flex-row"
              >
                <BuySellTokensButton action="buy" inputItem="cups" />
                <BuySellTokensButton action="sell" inputItem="cups" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
