// //SPDX-License-Identifier: MIT

// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
// import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

// interface Delegation {
//   function votePowerFromToAt(
//     address _from,
//     address _to,
//     uint256 _blockNumber
//   ) external view returns (uint256);
// }

// interface FTSOManager {
//   function getRewardEpochVotePowerBlock(uint256 _rewardEpoch) external view returns (uint256);
//   function getCurrentRewardEpoch() external view returns (uint256);
// }

// contract NFTPBooster is OwnableUpgradeable {
//   uint256 public SGBDelegatedDenominator;
//   uint256 public tokenRewardPerVPBPerDenominator;
//   uint256 public vpBlocksToClaim;

//   //If the user claimed rewards for a specific block
//   mapping(address => mapping(uint256 => bool)) public vpBlockClaimed;
//   //address of delegation contract we will read off of
//   address public delegationAddress;
//   //address votepower the user needs to have delegated to to earn rewards
//   address public delegatedTo;

//   //Events
//   event BurnApproverSet(address newBurnApprover);
//   event BoostMinterSet(address newBoostMinter);

//   //initializer for upgradable
//   function initializeContract(string memory _name, string memory _symbol) public {
// 	_name = _name;
// 	_symbol = _symbol;
//   }




// }
