//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

interface Delegation {
  function votePowerFromToAt(address _from,address _to,uint _blockNumber)external view returns(uint256);
}

interface FTSOManager {
  function getRewardEpochVotePowerBlock(uint256 _rewardEpoch) external view returns (uint256);
  function getCurrentRewardEpoch() external view returns (uint256);
}

contract TestReader is ERC20Upgradeable, OwnableUpgradeable {
  uint256 public SGBDelegatedDenominator;

  //address of delegation contract we will read off of
  address public delegationAddress;
  //address votepower the user needs to have delegated to to earn rewards
  address public delegatedTo;

  //address of FTSO Manager Contract
  address public ftsoManagerAddress;
  
  //initializer for upgradable
  function initializeContract(string memory _name, string memory _symbol) public {
	_name = _name;
	_symbol = _symbol;
    delegationAddress = 0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED;
    delegatedTo = 0x939789ed3D07A80da886A3E3017d665cBb5591dC;
    ftsoManagerAddress = 0xbfA12e4E1411B62EdA8B035d71735667422A6A9e;
  }

  //Setter Functions

  function setDelegationAddress(address _delegationAddress) external onlyOwner {
    delegationAddress = _delegationAddress;
  }

  function setDelegatedTo(address _delegatedTo) external onlyOwner {
    delegatedTo = _delegatedTo;
  }

  function setFTSOManagerAddress(address _FTSOManagerAddress) external onlyOwner {
    ftsoManagerAddress = _FTSOManagerAddress;
  }

  function votePowerFromToAt(address _user, uint256 _vpBlock) public view returns (uint256) {
  	Delegation delegationContract = Delegation(delegationAddress);
  	return delegationContract.votePowerFromToAt(_user, delegatedTo, _vpBlock);
  }

  function getFTSOManagerAddress() public view returns (address) {
    return ftsoManagerAddress;
	} 
	
function getDelegationAddress() public view returns (address) {
    return delegationAddress;
	} 
	
	function getDelegateTo() public view returns (address) {
    return delegatedTo;
	} 
	
	 function getCurrentRewardEpoch() public view returns (uint256) {
  	FTSOManager ftsoManagerContract = FTSOManager(ftsoManagerAddress);
    return ftsoManagerContract.getCurrentRewardEpoch();
	}

  function getCurrentVPBlock(uint256 _epochNumber) public view returns (uint256) {
  	FTSOManager ftsoManagerContract = FTSOManager(ftsoManagerAddress);
    return ftsoManagerContract.getRewardEpochVotePowerBlock(_epochNumber);
	}
}
