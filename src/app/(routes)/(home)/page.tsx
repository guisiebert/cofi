import CharacterCard from "./character-card"
import Characters from "./characters"
import Hero from "./hero"
import MarketCard from "./market"

export default function Home() {
  return (
    <main // BACKGROUND
      style={{ backgroundImage: "url(/bg_wood_loopable.jpg)" }}
      className="bg-center  bg-repeat-y p-5"
    >
      <Hero />

      <Characters />

      <MarketCard />
    </main>
  )
}
