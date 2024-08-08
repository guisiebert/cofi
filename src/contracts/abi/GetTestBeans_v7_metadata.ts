export const metadata = {
  compiler: {
    version: "0.8.24+commit.e11b9ed9",
  },
  language: "Solidity",
  output: {
    abi: [
      {
        inputs: [
          {
            internalType: "contract IERC20",
            name: "_cofitoken",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "cofiToken",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getTestTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "hasClaimed",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "rewardAmount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    devdoc: {
      kind: "dev",
      methods: {},
      version: 1,
    },
    userdoc: {
      kind: "user",
      methods: {},
      version: 1,
    },
  },
  settings: {
    compilationTarget: {
      "Feb28/GetTestTokens.sol": "GetTestTokens",
    },
    evmVersion: "shanghai",
    libraries: {},
    metadata: {
      bytecodeHash: "ipfs",
    },
    optimizer: {
      enabled: false,
      runs: 200,
    },
    remappings: [],
  },
  sources: {
    "@openzeppelin/contracts/token/ERC20/IERC20.sol": {
      keccak256:
        "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
      license: "MIT",
      urls: [
        "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
        "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq",
      ],
    },
    "Feb28/GetTestTokens.sol": {
      keccak256:
        "0xd6e37579461ec52deb1079f73e14b601f4a3e7aa1e06db3a46601faec3f4fd87",
      license: "MIT",
      urls: [
        "bzz-raw://d46367c412d4136441ca73262ba4bad2826f6d42ba21b33652ba93c97fa6ff3f",
        "dweb:/ipfs/QmYquUR2mCQVTyfWR8SYRQvSn5jF5i3kEnufX9QHqgFNf1",
      ],
    },
  },
  version: 1,
} as const;
