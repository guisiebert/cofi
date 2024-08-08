import { formatUnits } from "viem"

export function parseBigInt(
  inputNumber: bigint | undefined,
  decimalsDesired: number = 0
) {
  if (inputNumber == undefined) return 0

  return Number(formatUnits(inputNumber, 18))
}
