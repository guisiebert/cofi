// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract CofitokenSwap {
    IERC20 private cofitoken; // the token to be swapped by the native token
    uint256 public exchangeRate; // for every 1 native tokens how many X $cofitoken
    
    constructor(address _cofitokenAddress, uint256 _exchangeRate) {
        cofitoken = IERC20(_cofitokenAddress);
        exchangeRate = _exchangeRate;
    }

    // Returns the exchange rate between native tokens and $cofibean
    function getExchangeRate() public view returns (uint256) {
        return exchangeRate; // For example, 1 native token = 100 $cofibean
    }
    
    // Allows funding the contract with $cofitoken
    function fundContract(uint256 amount) external {
        // Transfer $cofitoken to the contract from the sender's address
        require(cofitoken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        
        // Emit an event to indicate the successful funding
        emit ContractFunded(msg.sender, amount);
    }
    
    function swapToCofi() external payable {
        uint256 amount = msg.value;

        // Verifications
        require(cofitoken.balanceOf(address(this)) > amount, "Swap contract hasn't enough cofitokens");
        
        // Calculate the amount of $cofitoken to send based on the received native tokens
        uint256 cofitokenAmount = amount * getExchangeRate();
        
        // Transfer $cofitoken to the user
        require(cofitoken.transfer(msg.sender, cofitokenAmount), "Transfer failed");

        // Emit an event to indicate the successful swap
        emit SwappedToCofi(msg.sender, amount, cofitokenAmount);
    }

    function swapFromCofi(uint256 cofitokenAmount) payable external {
        // Calculate the amount of native tokens to send back based on the received $cofitoken
        uint256 amount = cofitokenAmount / getExchangeRate();

        // Approve the transfer of $cofitoken tokens from the user's address to this contract
        require(cofitoken.transferFrom(msg.sender, address(this), cofitokenAmount), "Transfer failed");

        // Send the same amount of ETH to the sender 
        (bool success, ) = msg.sender.call{value: amount}(""); 
        require(success, "ETH transfer failed");

        // Emit an event to indicate the successful swap back
        emit SwappedFromCofi(msg.sender, cofitokenAmount, amount);
    }

    receive() external payable {} 

    // Event emitted when the contract is funded with $cofitoken
    event ContractFunded(address indexed funder, uint256 amount);
    
    // Event emitted when tokens are swapped to Cofi
    event SwappedToCofi(address indexed user, uint256 nativeTokenAmount, uint256 cofitokenAmount);
    
    // Event emitted when tokens are swapped from Cofi
    event SwappedFromCofi(address indexed user, uint256 cofitokenAmount, uint256 nativeTokenAmount);
    
}
    
// TO-DOS:
// - DEV's FEE 
// - Allowance
// - better error handling
// - gas optimization

// QUESTIONS:
// - contract needs a receive function? >>>> 
// - why is it easily exploited?
// - should I consider transaction fees or slippage?
// - sending ETH like this could potentially be a security risk due to reentrancy attacks. Why?
