// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0; 

import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; 

contract CofiFarm { 

    // VARIABLES
    IERC20 public inputToken; 
    IERC20 public outputToken; 
    uint256 public dailyRewardRateInPercent; // 1 = 100% per day
    mapping(address => Stake) public stakes; 
    struct Stake { uint256 amount; uint256 startTime; } 

    // CONSTRUCTOR
    constructor(IERC20 _inputToken, IERC20 _outputToken, uint256 _dailyRewardRateInPercent) {
        inputToken = _inputToken;
        outputToken = _outputToken;
        dailyRewardRateInPercent = _dailyRewardRateInPercent;
    }

    // STAKE
    function stake(uint256 amount) external { 
        // Verifications
        require(amount > 0, "Cannot stake 0"); 
        require(inputToken.balanceOf(msg.sender) >= amount, "You don't have that balance");
        require(outputToken.balanceOf(address(this)) > 0, "Contract rewards are out of stock");

        // Transfer input token
        require(inputToken.transferFrom(msg.sender, address(this), amount), "Stake failed"); 

        // Claim any available reward
        if (stakes[msg.sender].amount > 0) {
            claim();
        }

        // Register stake
        stakes[msg.sender] = Stake({ 
            amount: stakes[msg.sender].amount + amount, // Increment the stake amount 
            startTime: block.timestamp // Reset the stake time 
        }); 
    } 

    // REWARDS
    function readRewards(address staker) public view returns (uint256) { 
        // 
        Stake memory userStake = stakes[staker]; 
        
        // Time since stake
        uint256 timeElapsed = block.timestamp - userStake.startTime; 

        // Calculate rewards
        uint256 reward = timeElapsed * dailyRewardRateInPercent * userStake.amount / 86400; // << Seconds in a Day 
        return reward; 
    } 

    // CLAIMING
    function claim() public {
        // Verifications
        require(stakes[msg.sender].amount > 0, "You don't have any value staked");
        require(outputToken.balanceOf(address(this)) > 0, "Contract rewards are out of stock");

        // Calculate reward
        uint256 reward = readRewards(msg.sender);

        // Send reward
        outputToken.transfer(msg.sender, reward);

        // Reset timeElapsed
        stakes[msg.sender].startTime = block.timestamp;
    }


}


// --------------------------------------------------------
// --------------------------------------------------------


// TO-DOS:
// - Test case of multiple stakes along time (should withdraw when new deposits are made)
// - Staking and harvesting fee
// - Allow reading of dailyRewardRateInPercent
// - Correct reward speed
// - Handle "out of stock" error
// - Should it be ownable??
// - Should it be pausable?? 
// - Should Reward Rate be changeable??
// - Gas saving (readRewards public)

 