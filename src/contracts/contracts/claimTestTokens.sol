// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0; 

import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; 

contract GetTestTokens { 

    // VARIABLES
    IERC20 public cofiToken; 
    uint256 public rewardAmount = 10 * (10 ** 18); 
    mapping(address => bool) public hasClaimed; 

    // CONSTRUCTOR
    constructor(IERC20 _cofitoken) {
        cofiToken = _cofitoken;
    }

    function getTestTokens() external { 
        require(cofiToken.balanceOf(address(this)) > rewardAmount, "Insufficient rewards on contract account");
        require(!hasClaimed[msg.sender], "Reward already claimed."); 
        cofiToken.transfer(msg.sender, rewardAmount);
        hasClaimed[msg.sender] = true; 
    } 

}
