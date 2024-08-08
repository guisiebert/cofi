// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Cofitoken is ERC20 {
    constructor(string memory tokenName, string memory tokenCode, uint256 mintAmount) ERC20(tokenName, tokenCode) {
        _mint(msg.sender, mintAmount * 10 ** decimals());
    }
}