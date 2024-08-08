export const metadata = {
	"compiler": {
		"version": "0.8.24+commit.e11b9ed9"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_cofitokenAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "_exchangeRate",
						"type": "uint256"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "funder",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "ContractFunded",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "cofitokenAmount",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "nativeTokenAmount",
						"type": "uint256"
					}
				],
				"name": "SwappedFromCofi",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "nativeTokenAmount",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "cofitokenAmount",
						"type": "uint256"
					}
				],
				"name": "SwappedToCofi",
				"type": "event"
			},
			{
				"inputs": [],
				"name": "exchangeRate",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "fundContract",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getExchangeRate",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "cofitokenAmount",
						"type": "uint256"
					}
				],
				"name": "swapFromCofi",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "swapToCofi",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"stateMutability": "payable",
				"type": "receive"
			}
		],
		"devdoc": {
			"kind": "dev",
			"methods": {},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"Feb13/CofitokenSwap.sol": "CofitokenSwap"
		},
		"evmVersion": "shanghai",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"Feb13/CofitokenSwap.sol": {
			"keccak256": "0xa2711cf95247883f29cbbddb05ebc7ae580375940d6f81b09682eed783ce9260",
			"license": "MIT",
			"urls": [
				"bzz-raw://a4d538ce5d36d82f150d01b8a5716a3d4bc6fceb5bb3b06519fcb6d4fda7abb0",
				"dweb:/ipfs/Qmc2Vg6JcEFMpxp8sJctVhj4WrQ1J2KwMaf1HMU6fR6sna"
			]
		}
	},
	"version": 1
} as const