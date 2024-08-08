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
						"internalType": "contract IERC20",
						"name": "_inputToken",
						"type": "address"
					},
					{
						"internalType": "contract IERC20",
						"name": "_outputToken",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "_dailyRewardRateInPercent",
						"type": "uint256"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [],
				"name": "claim",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "dailyRewardRateInPercent",
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
				"inputs": [],
				"name": "inputToken",
				"outputs": [
					{
						"internalType": "contract IERC20",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "outputToken",
				"outputs": [
					{
						"internalType": "contract IERC20",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "staker",
						"type": "address"
					}
				],
				"name": "readRewards",
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
				"name": "stake",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "stakes",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
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
			"Feb16/CofiFarm.sol": "CofiFarm"
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
		"@openzeppelin/contracts/token/ERC20/IERC20.sol": {
			"keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
			"license": "MIT",
			"urls": [
				"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
				"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
			]
		},
		"Feb16/CofiFarm.sol": {
			"keccak256": "0xa2e1a24136cf776452cdaf4ecfc0ac4832bff66362852f9c31e72d3ca124dd65",
			"license": "MIT",
			"urls": [
				"bzz-raw://7e6acfd7d2b267ac141cbc87966f0ebbef1c3ce875562daf4038a71ca6d00583",
				"dweb:/ipfs/Qmd5j494tuHUVFwSqTxqgm2YnkCx3mXk72gQYNzhSVN7mQ"
			]
		}
	},
	"version": 1
} as const