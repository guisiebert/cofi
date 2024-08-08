import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div // HERO CONTAINER
      className="m-5 mx-auto flex min-h-full max-w-6xl flex-col rounded-3xl border-2 border-emerald-950 bg-gradient-to-tr from-[#ce9469] to-[#f0cba8]"
    >
      {/* GUI: ATIVAR */}
      <Navbar />

      <main // MAIN
        className="flex flex-col gap-10 px-8 lg:ml-16"
      >
        <div // TITLE BOX
          className="mx-auto w-full rounded-lg border-[3px] border-emerald-950 bg-emerald-100 p-6 sm:w-[540px] md:mx-0 lg:w-[540px]"
        >
          <h2 className="mb-5 text-[10vw] font-extrabold leading-none sm:text-7xl  ">
            Coffee is the gas we need.
          </h2>
          <p className="max-w-80 font-semibold md:max-w-96">
            CoFi is a gamified yield protocol where DeFi meets the aromatic
            world of coffee.
          </p>
        </div>

        <div // SEPARATOR
          className="hidden h-0.5 w-[70%] rounded bg-emerald-800 lg:block"
        ></div>

        <div // START TODAY
          className="hidden lg:block"
        >
          <Link href={"/#main"}>
            <Button
              variant={"outline"}
              className="
                                  z-30 h-12 w-64  
                                  border-[3px] border-emerald-950
                                  text-lg font-bold text-emerald-950
                          "
            >
              PLAY COFI NOW
            </Button>
          </Link>
        </div>
      </main>

      <Image // COFFEE ITEMS IMAGE
        className="pointer-events-none -mt-6 sm:-mt-20 md:-mt-36 lg:-mt-56 "
        src={"/_coffee_objects_v2.png"}
        height={1200}
        width={1200}
        priority
        alt=""
      />

      <footer // HERO-FOOTER
        className="flex items-stretch justify-between gap-20 px-0 py-6 sm:pl-20 sm:pr-5"
      >
        <div // FIXED
          className="hidden w-4/12 sm:block"
        >
          <h4 className="text-lg font-semibold">Fixed Swapping</h4>
          <p className="font-light">
            {
              "Both $COFIBEAN and $COFICUP can be negotiated at a fixed price inside CoFi's swapping protocol."
            }
          </p>
        </div>
        <div // CONTRACTS
          className="hidden w-4/12 md:block lg:block"
        >
          <h4 className="text-lg font-semibold">Transparent contracts</h4>
          <p className="font-light">
            {
              "You can always check the TVL to be sure there's liquidity for your swapping."
            }
          </p>
        </div>
        <div // CHAINS
          className="mx-auto flex w-9/12 flex-col justify-center sm:m-0 sm:w-6/12 md:justify-end lg:w-4/12
                  "
        >
          <small className="text-center">Chains roadmap</small>
          <div
            className="CHAINS 
                          flex w-full items-center justify-between gap-3 rounded-xl border-[2px] border-emerald-950 bg-emerald-100 p-4"
          >
            <Image
              src={"/eth-logo.png"}
              alt=""
              height={50}
              width={50}
              className=" "
            />

            <Image
              src={"/matic.svg"}
              alt=""
              height={50}
              width={50}
              className=" opacity-30"
            />

            <Image
              src={"/starknet.png"}
              alt=""
              height={50}
              width={50}
              className=" opacity-30"
            />

            <Image
              src={"/arb-logo.svg"}
              alt=""
              height={50}
              width={50}
              className=" opacity-30"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}
