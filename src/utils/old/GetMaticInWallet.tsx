import { useAccount, useBalance } from "wagmi"
import { parseBigInt } from "@/utils/parseBigInt"

export function GetMaticInWallet(address: `0x${string}` = `0x0`) {
  // const userAddress = address == "0x0" ? useAccount().address : address;
  const userAddress = useAccount().address

  const res = useBalance({
    address:
      // Any address sent in params?
      address == `0x0`
        ? // If NO, use this user address
          userAddress
        : // If YES, use params
          address,
  })

  return parseBigInt(res.data?.value)
}
