import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import { http } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"

export const config = getDefaultConfig({
  appName: "CoFi - Gamified Yield Protocol",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
  chains: [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  transports: {
    [mainnet.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_CONNECTOR_MAINNET),
    [sepolia.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_CONNECTOR_SEPOLIA),
  },
  ssr: true,
})
