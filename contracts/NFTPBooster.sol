// //SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";

// interface Delegation {
//   function votePowerFromToAt(
//     address _from,
//     address _to,
//     uint256 _blockNumber
//   ) external view returns (uint256);
// }

 interface INFTP {
   function boostMintDirectly(address _receivingAddress, uint256 _amountToMint) external;
   function claimRewardsWithBoost(address claimingAddress, uint256 basisPointsIncrease, uint256 _additionalPointsPerday) external;
}

contract NFTPBooster is OwnableUpgradeable {

bool public paused;
address private _nftpAddress;

  //Events
  event BurnApproverSet(address newBurnApprover);
  event BoostMinterSet(address newBoostMinter);

  //initializer for upgradable
  function initializeContract(address _nftpAddressInit) public {
	__Ownable_init();
	_nftpAddress = _nftpAddressInit;
  }

// update vault wallet 
function testBoostMint(address _addressToSend, uint256 _amountToMint) onlyOwner external {
	INFTP nftpContract = INFTP(_nftpAddress);
	nftpContract.boostMintDirectly(_addressToSend, _amountToMint);	
}
}
