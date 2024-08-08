"use client"

import Image from "next/image"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowBigRight, ArrowDown, BeanIcon, CoffeeIcon } from "lucide-react"
import { ClaimTokenButton } from "@/components/ClaimTokenRewardButton"
import LockTokensButton from "@/components/LockTokensButton"
import FarmDetails from "@/components/Web3Interactors/FarmDetails"
import { GetTokensInContract } from "@/utils/GetTokensInContract"
import { GetTokensClaimableInFarm } from "@/utils/old/GetTokensClaimableInFarm"
import { GetTokensLockedInFarm } from "@/utils/old/GetTokensLockedInFarm"

interface CharacterCardPropsType {
  inputItem: "beans" | "cups"
}

export default function CharacterCard({ inputItem }: CharacterCardPropsType) {
  const [detailsToggle, setDetailsToggle] = useState(false)

  const beansFarmReward = GetTokensClaimableInFarm("beans")
  const cupsFarmReward = GetTokensClaimableInFarm("cups")
  const beansFarmStaked = GetTokensLockedInFarm("beans")
  const cupsFarmStaked = GetTokensLockedInFarm("cups")

  let characterSaying

  const farmLogo =
    inputItem == "beans" ? (
      <div className="flex rounded-lg bg-emerald-600 p-3 text-white">
        <BeanIcon /> <ArrowBigRight fill="white" /> <CoffeeIcon />
      </div>
    ) : (
      <div className="flex rounded-lg bg-emerald-600 p-3 text-white">
        <CoffeeIcon /> <ArrowBigRight fill="white" /> <BeanIcon />
      </div>
    )

  if (inputItem == "beans") {
    characterSaying = (
      <p>
        {
          "Hey there, I'm Anthony. I'm looking for coffee beans to train my barista skills. Provide me with some beans and I'll pay you back with endless cups of coffee."
        }
      </p>
    )
  }

  if (inputItem == "cups") {
    characterSaying = (
      <p>
        {
          "Hi, I'm Jose. A cup of coffee always changes my day. Bring me coffee cups and I'll surely reward you daily with the best coffee beans you can find."
        }
      </p>
    )
  }

  return (
    <div
      className="card flex max-w-[568px] flex-col items-center
      space-y-4 
      rounded-xl border-2 border-solid
      border-emerald-950 bg-emerald-100 p-10 
    "
    >
      <Image // CHARACTER IMAGE
        src={
          inputItem == "beans"
            ? "/game_assets/_anthony-barista.jpg"
            : "/game_assets/_jose-field-worker.jpg"
        }
        alt="cofi character"
        height={500}
        width={500}
        className="-mb-20 rounded border-2 border-solid border-emerald-950"
      />

      <Image
        src={
          inputItem == "beans"
            ? "/game_assets/anthony_sign.png"
            : "/game_assets/jose_sign.png"
        }
        alt="cofi character"
        height={110}
        width={460}
        className="z-10 w-10/12"
      />
      {characterSaying}

      {/* FARM CARD */}
      <div
        className=" w-fit min-w-80 space-y-4 rounded border-2 border-solid border-emerald-950
      bg-emerald-300 p-6 text-sm
      "
      >
        <header className="flex items-center justify-between gap-3">
          {farmLogo}
          <div className="flex flex-col items-end">
            <h2 className="text-2xl font-bold">
              {inputItem == "beans" ? "Beans Farm" : "Cups Farm"}
            </h2>
            <Badge variant="default">1% DAILY</Badge>
          </div>
        </header>

        <main>
          <div className="flex justify-between">
            <p>APR:</p>
            <p>
              <b>1% Daily</b>
            </p>
          </div>
          <div className="flex justify-between">
            <p>Stake:</p>
            <p>
              <b>${inputItem == "beans" ? "COFIBEAN" : "COFICUP"}</b>
            </p>
          </div>
          <div className="flex justify-between">
            <p>Earn:</p>
            <p>
              <b>${inputItem == "beans" ? "COFICUP" : "COFIBEAN"}</b>
            </p>
          </div>
          <div className="flex justify-between">
            <p>Staking Fee:</p>
            <p>
              <b>1.0%</b>
            </p>
          </div>
          <div className="flex justify-between">
            <p>Harvesting Fee:</p>
            <p>
              <b>5.0%</b>
            </p>
          </div>

          <Separator className="my-4" />
          {/* EARNED */}
          <div>
            <small className="font-extrabold text-emerald-800">
              <span className="text-emerald-950">
                {inputItem == "beans" ? "CUPS " : "BEANS "}
              </span>
              EARNED:
            </small>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">
                {inputItem == "beans"
                  ? beansFarmReward.toFixed(3)
                  : cupsFarmReward.toFixed(3)}
              </p>
              <ClaimTokenButton inputItem={inputItem} />
            </div>
          </div>

          <Separator className="my-4" />

          {/* DEPOSITED */}
          <div>
            <small className="font-extrabold text-emerald-800">
              <span className="text-emerald-950">
                {inputItem == "beans" ? "BEANS " : "CUPS "}{" "}
              </span>{" "}
              STAKED:
            </small>

            <div className="flex items-center justify-between">
              <p className="w-full text-xl font-bold">
                {" "}
                {inputItem == "beans"
                  ? beansFarmStaked.toFixed(0)
                  : cupsFarmStaked.toFixed(0)}{" "}
              </p>
              <LockTokensButton inputItem={inputItem} />
            </div>
          </div>
        </main>

        <Separator className="my-4" />

        {/* DETAILS */}
        <div
          className=" flex cursor-pointer items-center justify-center gap-1 hover:underline"
          onClick={() => setDetailsToggle((prev) => !prev)}
        >
          <p className="font-bold text-emerald-700">Details</p>
          <ArrowDown size={16} color="rgb(4 120 87)" />
        </div>

        {detailsToggle && <FarmDetails farmType={inputItem} />}
      </div>
    </div>
  )
}
