// import {metadata as Cofibean_v3_metadata} from "./abi/Cofibean_v3_metadata"
// import {metadata as Cofibean_v4_metadata} from "./abi/Cofibean_v4_metadata"
// import {metadata as Coficup_v3_metadata} from "./abi/Cofibean_v3_metadata"
// import {metadata as Coficup_v4_metadata} from "./abi/Coficup_v4_metadata"
// import {metadata as CofiFarm_v5_metadata} from "./abi/CofiFarm_v5_metadata"
// import {metadata as CofiSwap_v1_metadata} from "./abi/CofiSwap_v1_metadata"
import { metadata as Cofitoken_v5_metadata } from "./abi/Coficup_v4_metadata"
// import {metadata as CofiTokenSwap_v5_metadata} from "./abi/CofiTokenSwap_v5_metadata"
import { metadata as CofiTokenSwap_v6_metadata } from "./abi/CofiTokenSwap_v5_metadata"
import { metadata as CofiFarm_v6_metadata } from "./abi/CofiFarm_v6_metadata"
import { metadata as GetTestBeans_v7_metadata } from "./abi/GetTestBeans_v7_metadata"

/// ---------------------- v1 ----------------------

const CREATOR_WALLET_v1 = "0xDE814F76293f45f8407d4c25DdB5acC1De851B4A"

// const COFICUP_CONTRACT_v1    = "0x427F8d9183592bc021d2949A5BfE479cfCbD762e"
// const COFIBEAN_CONTRACT_v1   = "0x53353909463a0d336D39FDC82d7853a3fD2e1653"
// const STAKECUPSv1_CONTRACT   = "0x957a4c53F8931DAD057f4A21b729592aC186eA67"

// const FARMv1_WALLET          = "0x09C28bc52213CE3BECEd80ef484D8519e4261294"

/// ---------------------- v2 ----------------------

// const COFICUP_CONTRACT_v2    = "0xf1D2C18ca3Aba9962f7f68e7cD9b199245Ce89a9"

/// ---------------------- v3 ----------------------

// const COFICUP_CONTRACT_v3    = "0xf90F5C654FEDfd33eaa38d4c9fF63178A7746a39"
// const COFICUP_ABI_v3         = Coficup_v3_metadata.output.abi
// const COFIBEAN_CONTRACT_v3   = "0x9315e7464bae8733c72bb7f813a76ddf3c479969"
// const COFIBEAN_ABI_v3        = Cofibean_v3_metadata.output.abi

/// ---------------------- v4 ----------------------

// const COFICUP_CONTRACT_v4    = "0x2AC4b1232D9a90A75C22e464016f98E95af455A3"
// const COFICUP_ABI_v4         = Coficup_v4_metadata.output.abi
// const COFIBEAN_CONTRACT_v4   = "0xe7ab3c2f39fe415bd9d8b2e389808af32113982e"
// const COFIBEAN_ABI_v4        = Cofibean_v4_metadata.output.abi
// const COFISWAP_v1            = "0x580374d1d79190084348848790352cC07f6b6F9B"
// const COFISWAP_ABI_v1        = CofiSwap_v1_metadata.output.abi

/// ---------------------- v5 ----------------------

// const COFIBEAN_CONTRACT_v5 = "0x411f79c33e27a10cb5251923735f5bc8b6028d69";
// const COFICUP_CONTRACT_v5 = "0x751d19621ac8f5574796a1531e090e21381198a7";
const COFITOKEN_ABI_v5 = Cofitoken_v5_metadata.output.abi

// const COFIBEANSWAP_v5        = "0xcd29acb252f8fb7dfd80f498ce8b7f0fdd98c6de"
// const COFICUPSWAP_v5         = "0xc1cb476f38f776f64731438d0b8653a383ce8f69"
// const COFITOKENSWAP_ABI_v5   = CofiTokenSwap_v5_metadata.output.abi

// const COFIBEANFARM_v5        = "0x27b2d5608075e44830b75e1dfc673b2e4dbf379b"
// const COFICUPFARM_v5         = "0xc1de100931044a30a92dda92e3ef3ac32f49ebb1"
// const COFIFARM_ABI_v5        = CofiFarm_v5_metadata.output.abi

/// ---------------------- v6 ----------------------

const COFIBEANFARM_v6 = "0x45efa3299a9b928432376e524f14d30aa4b51d68"
const COFICUPFARM_v6 = "0xbbc947a084f7c716e67277793c4e5a5dde4b0630"
const COFIFARM_ABI_v6 = CofiFarm_v6_metadata.output.abi

const COFIBEANSWAP_v6 = "0x318f2016e4add3a287cea433956ee61ee5489e89"
const COFICUPSWAP_v6 = "0x71c2cca581878b3746c0b21310620c066993f747"
const COFITOKENSWAP_ABI_v6 = CofiTokenSwap_v6_metadata.output.abi

/// ---------------------- v7 ----------------------

const GET_TEST_BEANS_v7 = "0xc8ea68ce1b2bbd006737120de156105a960e616e"
const GET_TEST_BEANS_ABI_v7 = GetTestBeans_v7_metadata.output.abi

/// ---------------------- v8 (Sepolia) ----------------------

const COFIBEAN_CONTRACT_v8 = "0x342dfece0ae201fc7c7a74f7a1dd103bca3ac8d0"
const COFICUP_CONTRACT_v8 = "0x53353909463a0d336d39fdc82d7853a3fd2e1653"
const COFIBEANFARM_v8 = "0x427f8d9183592bc021d2949a5bfe479cfcbd762e" // 1% daily
const COFICUPFARM_v8 = "0x957a4c53f8931dad057f4a21b729592ac186ea67" // 1% daily
const GET_TEST_BEANS_v8 = "0x7c113f18694447946972a2a8f5129d23b26c906e"

/// ---------------------- ALWAYS UP TO DATE ----------------------

export const CREATOR_WALLET = CREATOR_WALLET_v1

export const COFIBEAN_CONTRACT = COFIBEAN_CONTRACT_v8
export const COFICUP_CONTRACT = COFICUP_CONTRACT_v8
export const COFITOKEN_ABI = COFITOKEN_ABI_v5

export const COFIBEANFARM_CONTRACT = COFIBEANFARM_v8
export const COFICUPFARM_CONTRACT = COFICUPFARM_v8
export const COFIFARM_ABI = COFIFARM_ABI_v6

export const GET_TEST_BEANS = GET_TEST_BEANS_v8
export const GET_TEST_BEANS_ABI = GET_TEST_BEANS_ABI_v7

export const COFISWAP = COFIBEANSWAP_v6
export const COFISWAP_ABI = COFITOKENSWAP_ABI_v6
export const COFIBEAN_SWAP = COFIBEANSWAP_v6
export const COFICUP_SWAP = COFICUPSWAP_v6
