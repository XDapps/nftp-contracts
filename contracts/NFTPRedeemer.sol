//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

//************** Interfaces ***************************************************************************************************** 
interface NFTP {
  function burnPoints(address _accountToBurn, uint256 _amountToBurn) external;
  function balanceOf(address account) external view  returns (uint256);
}
interface ITokenContract1155 {
    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;
	function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external;
}

contract NFTPMRedeemer is OwnableUpgradeable {
address private nftVaultWallet;
address public nftpAddress;

struct RedeemableToken{
	address contractAddress;
	uint256 tokenId;
	uint256 itemId;
	uint256 priceInNFTP;
	bool isErc721;
}

  //If the user claimed rewards for a specific block
mapping(uint256 => RedeemableToken) public itemIds;
  //address votepower the user needs to have delegated to to earn rewards
address public delegatedTo;

  //Events
event BurnApproverSet(address newBurnApprover);
event BoostMinterSet(address newBoostMinter);

  //initializer for upgradable
function initializeContract(string memory _name, string memory _symbol) public {
	_name = _name;
	_symbol = _symbol;
	nftpAddress;
	nftVaultWallet;
}

function redeemNFTPoints(uint256 itemId)external{

}

}
