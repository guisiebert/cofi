import Image from "next/image"
import CharacterCard from "./character-card"

export default function Characters() {
  return (
    <div
      id="main"
      className="mx-auto flex max-w-6xl flex-col items-center justify-center space-y-10"
    >
      <Image
        src={"/game_assets/farm-sign.png"}
        width={500}
        height={500}
        alt=""
        className="z-10 mb-0 w-[35rem]
        lg:-mb-16 lg:w-1/2
        "
      />

      <div
        className="flex flex-col 
      gap-5
      lg:flex-row
      "
      >
        <CharacterCard inputItem={"beans"} />
        <CharacterCard inputItem={"cups"} />
      </div>
    </div>
  )
}
