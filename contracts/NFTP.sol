//SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

interface Delegation {
  function votePowerFromToAt(
    address _from,
    address _to,
    uint256 _blockNumber
  ) external view returns (uint256);
}

interface FTSOManager {
  function getRewardEpochVotePowerBlock(uint256 _rewardEpoch) external view returns (uint256);
  function getCurrentRewardEpoch() external view returns (uint256);
}

contract NFTP is ERC20Upgradeable, OwnableUpgradeable {
  uint256 public SGBDelegatedDenominator;
  uint256 public tokenRewardPerVPBPerDenominator;
  uint256 public vpBlocksToClaim;

  //If the user claimed rewards for a specific block
  mapping(address => mapping(uint256 => bool)) public vpBlockClaimed;
  //address of delegation contract we will read off of
  address public delegationAddress;
  //address votepower the user needs to have delegated to to earn rewards
  address public delegatedTo;
  //address of FTSO Manager Contract
  address public ftsoManagerAddress;  
  //address that is allowed to burn tokens when spent
  address public redeemer;
  //If an external contract address is eligible to boost mint
  mapping(address => bool) public boostMinter;

  bool public isTransferable;

  //Events
  event RedeemerSet(address newRedeemer);
  event BoostMinterSet(address newBoostMinter, bool canBoostMint);
  event NFTPointsRedeemed(address indexed redeemingAddress, uint256 amountRedeemed);
  event NFTPsClaimed(address indexed claimingAddress, uint256 rewardsClaimed);
  event NFTPsClaimedWithBoost(address indexed claimingAddress, uint256 basisPointsBoost, uint256 periodBoost, uint256 rewardsClaimed);
  event DirectBoostMint(address indexed receivingAddress, uint256 mintedAmount);

  //initializer for upgradable
  function initializeContract(string memory _name, string memory _symbol) external initializer {
	__ERC20_init(_name, _symbol);
	__Ownable_init();
    delegationAddress = 0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED;
    delegatedTo = 0x939789ed3D07A80da886A3E3017d665cBb5591dC;
    ftsoManagerAddress = 0xbfA12e4E1411B62EdA8B035d71735667422A6A9e;
    SGBDelegatedDenominator = 1000;
	redeemer = 0x802ff1CAb64CD2e863b48DD453450A86d09D89a7;
	boostMinter[0xA175cb791a980C916852B90E65A48862abb40B99] = true;
	tokenRewardPerVPBPerDenominator = 7;
    vpBlocksToClaim = 4; //if not claimed after 4 voting power blocks
	isTransferable = false; //tokens are not transferable on start
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

  function setBlocksToClaim(uint8 _blocksToClaim) external onlyOwner {
    vpBlocksToClaim = _blocksToClaim;
  }

  function setRewardDenominator(uint256 _denominator) external onlyOwner {
    SGBDelegatedDenominator = _denominator;
  }

  function setTokenRewardPerDenominator(uint256 _tokenReward) external onlyOwner {
    tokenRewardPerVPBPerDenominator = _tokenReward;
  }

  function setTransferable(bool _isTransferable) external onlyOwner {
	  isTransferable = _isTransferable;
  }	
  
  function setBoostMinterAddress(address _addressToSet, bool _canBoost) external onlyOwner {
	  boostMinter[_addressToSet] = _canBoost;
	  emit BoostMinterSet(_addressToSet, _canBoost);
  }
  
  function setRedeemerAddress(address _newRedeemer) external onlyOwner {
	  redeemer = _newRedeemer;
	  emit RedeemerSet(_newRedeemer);
  }


  //Override ERC20 Transfer and TransferFrom

  function transfer(address recipient, uint256 amount) public override returns (bool) {
	    require(isTransferable, "NFT points are not currently transferable");
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

  function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public override returns (bool) {
		require(isTransferable, "NFT points are not currently transferable");
        _transfer(sender, recipient, amount);
        uint256 currentAllowance = allowance(sender, _msgSender()); //_allowances[sender][_msgSender()];
        require(currentAllowance >= amount, "ERC20: transfer amount exceeds allowance");
        unchecked {
            _approve(sender, _msgSender(), currentAllowance - amount);
        }

        return true;
    }

	//Burn Points when used - only burnApproverAddress can burn
	function redeemPoints(address _accountToBurn, uint256 _amountToBurn) external {
		require(msg.sender == redeemer);
		_burn(_accountToBurn, _amountToBurn);
		emit NFTPointsRedeemed(_accountToBurn, _amountToBurn);
	}


  //return bNFT tokens earned per voting power block
  function currentRewardRate(address _user) public view returns (uint256) {
  	Delegation delegationContract = Delegation(delegationAddress);
    uint256 currentDelegated = delegationContract.votePowerFromToAt(_user, delegatedTo, block.number);

    return (currentDelegated * tokenRewardPerVPBPerDenominator) / SGBDelegatedDenominator; //in wei
  }

  function rewardClaimableForBlock(address _user, uint256 _vpBlock, uint256 _tokenRewardPerVPBPerDenominator) public view returns (uint256) {
    //if the user already claimed these rewards there's no use to calculate, claimable reward for block is 0
    if (vpBlockClaimed[_user][_vpBlock]) {
      return 0;
    }

  	Delegation delegationContract = Delegation(delegationAddress);
    uint256 delegatedAtBlock = delegationContract.votePowerFromToAt(_user, delegatedTo, _vpBlock);
    //This returns raw tokens delegated in wei

    return (delegatedAtBlock * _tokenRewardPerVPBPerDenominator) / SGBDelegatedDenominator; //claimable reward in wei, 1e18 is 1 bNFT token
  }

  //calculate independently for each voting block because delegated amount/earn rate will be different
  function calculateClaimableRewards(address _user, uint256 _tokenRewardPerVPBPerDenominator) public view returns (uint256) {
  	FTSOManager ftsoManagerContract = FTSOManager(ftsoManagerAddress);
    uint256 blocksToClaim;
    uint256 claimableReward;

    uint256 numEpochs = ftsoManagerContract.getCurrentRewardEpoch() + 1;
    uint256 mostCurrentBlock = ftsoManagerContract.getRewardEpochVotePowerBlock(numEpochs - 1);

    //if the current block has been claimed, return 0 since everything before will have been claimed or expired
    if (vpBlockClaimed[_user][mostCurrentBlock]) {
      return 0;
    }

    //either do the total number of epochs or the last vpBlocksToClaim
    if (numEpochs < vpBlocksToClaim) {
      blocksToClaim = numEpochs;
    } else {
      blocksToClaim = vpBlocksToClaim;
    }

    for (uint256 i = 0; i < blocksToClaim; i++) {
      uint256 blockToClaim = ftsoManagerContract.getRewardEpochVotePowerBlock(numEpochs - 1 - i);
      claimableReward += rewardClaimableForBlock(_user, blockToClaim, _tokenRewardPerVPBPerDenominator);
    }

    return claimableReward;
  }

  function claimRewards() external {
		_claimRewards(msg.sender, tokenRewardPerVPBPerDenominator);
  }

function _claimRewards(address _claimingAddress, uint256 _tokenRewardPerVPBPerDenominator) internal {
  	FTSOManager ftsoManagerContract = FTSOManager(ftsoManagerAddress);
    uint256 numEpochs = ftsoManagerContract.getCurrentRewardEpoch() + 1;
    uint256 mostCurrentBlock = ftsoManagerContract.getRewardEpochVotePowerBlock(numEpochs - 1);
    require(!vpBlockClaimed[_claimingAddress][mostCurrentBlock], "Rewards Already Claimed For Current Voting Power Block");

    uint256 claimableRewards;
    uint256[] memory blocksToClaim = new uint256[](vpBlocksToClaim);
    uint256 index = 0;

    if (numEpochs < vpBlocksToClaim) {
      for (uint256 i = 0; i < numEpochs; i++) {
        uint256 blockToClaim = ftsoManagerContract.getRewardEpochVotePowerBlock(numEpochs - 1 - i);
        if (!vpBlockClaimed[_claimingAddress][blockToClaim]) {
          blocksToClaim[index] = blockToClaim;
          index++;
        }
      }
    } else {
      for (uint256 i = 0; i < vpBlocksToClaim; i++) {
        uint256 blockToClaim = ftsoManagerContract.getRewardEpochVotePowerBlock(numEpochs - 1 - i);
        if (!vpBlockClaimed[_claimingAddress][blockToClaim]) {
          blocksToClaim[index] = blockToClaim;
          index++;
        }
      }
    }
    //don't send a call for the unused portion of the array, only go through index
    for (uint256 i = 0; i < index; i++) {
      claimableRewards += rewardClaimableForBlock(_claimingAddress, blocksToClaim[i], _tokenRewardPerVPBPerDenominator);
      vpBlockClaimed[_claimingAddress][blocksToClaim[i]] = true;
    }
    //need to mint after calculating claimable
    _mint(_claimingAddress, claimableRewards);
	emit NFTPsClaimed(_claimingAddress, claimableRewards);
  }


 // Claim Points using boostContract- only boostMinterAddress can boost mint
  function claimRewardsWithBoost(address claimingAddress, uint256 basisPointsIncrease, uint256 _additionalPointsPerday) external {
	  bool senderIsApproved = boostMinter[msg.sender];
	require(senderIsApproved, 'Boosted rewards must be called through the boost contract');
	uint256 totalPointsPerDay = _additionalPointsPerday + tokenRewardPerVPBPerDenominator;
	uint256 availableRewards = calculateClaimableRewards(claimingAddress, totalPointsPerDay);
	_claimRewards(claimingAddress, totalPointsPerDay);
	uint256 bonusAmount = (availableRewards * basisPointsIncrease)/10000;
    _mint(claimingAddress, bonusAmount);
	emit NFTPsClaimedWithBoost(claimingAddress, basisPointsIncrease, _additionalPointsPerday, bonusAmount);
  }

 // Boost Minter Can Directly Assign Points - only boostMinterAddress can boost mint
  function boostMintDirectly(address _receivingAddress, uint256 _amountToMint) external {
	  bool senderIsApproved = boostMinter[msg.sender];
	require(senderIsApproved, 'Direct Mint must be called through the boost contract');
    _mint(_receivingAddress, _amountToMint);
	emit DirectBoostMint(_receivingAddress, _amountToMint);
  }

}
