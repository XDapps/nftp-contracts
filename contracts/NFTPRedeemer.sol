// //SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";

// //************** Interfaces ***************************************************************************************************** 
interface INFTP {
   function redeemPoints(address _accountToBurn, uint256 _amountToBurn) external;
   function balanceOf(address account) external view  returns (uint256);
 }
 interface ITokenContract1155 {
    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;
 	function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external;
 }
 interface ITokenContract721 {
     function transferFrom(address from, address to, uint256 tokenId) external;
 }

 contract NFTPRedeemer is OwnableUpgradeable {
//address of the NFTP ERC20 Contract
address public nftpAddress;
uint256 private _tokenCounter;
string private _name;
string private _symbol;
bool public paused;

struct RedeemableToken{
	address vaultWallet;
	address contractAddress;
	uint256 tokenId;
	uint256 itemId;
	uint256 remainingSupply;
	uint256 priceInNFTP;
	bool isErc721;
}

//mapping to each redeemable token
 mapping(uint256 => RedeemableToken) public itemIds;
// address votepower the user needs to have delegated to to earn rewards

//   //Events
 event ContractPaused(bool isPaused);
 event TokenAdded(address indexed contractAddress, uint256 indexed tokenId, uint256 indexed itemId, uint256 remainingSupply, uint256 priceInNFTP);
 event TokenUpdated(uint256 indexed itemId, uint256 qtyAdded, uint256 qtyRemoved, uint256 priceInNFTP);
 event TokenRedeemed(address indexed contractAddress, uint256 indexed tokenId, uint256 indexed itemId, uint256 redeemedQty, uint256 redeemedPrice);

//   //initializer for upgradable
 function initializeContract(string memory _nameInitialize, string memory _symbolInitialize, address _nftpAddress) public {
	__Ownable_init();
 	_name = _nameInitialize;
 	_symbol = _symbolInitialize;
	 paused = false;
	 nftpAddress = _nftpAddress;
	 _tokenCounter = 0;
 }

//***************************** Setter Functions ****************************************/
// add redeemable token
    function addRedeemableToken(address _vaultWallet, address _contractAddress, uint256 _tokenId, uint256 _supply, uint256 _priceInNFTP, bool _isErc721) onlyOwner external {
	_tokenCounter = _tokenCounter + 1;
	uint256 newItemId = _tokenCounter;
	itemIds[newItemId] = RedeemableToken(_vaultWallet, _contractAddress, _tokenId, newItemId, _supply, _priceInNFTP, _isErc721);
	emit TokenAdded(_contractAddress, _tokenId, newItemId, _supply, _priceInNFTP);
    }
// update vault wallet 
function updateRedeemableTokenVaultWallet(uint256 _itemToUpdate, address _newVaultWallet) onlyOwner external {
	itemIds[_itemToUpdate].vaultWallet = _newVaultWallet;
}
// update redeemable token qty
function updateRedeemableTokenQty(uint256 _itemToUpdate, uint256 _qtyToAdd, uint256 _qtyToSub) onlyOwner external {
	itemIds[_itemToUpdate].remainingSupply += _qtyToAdd;
	itemIds[_itemToUpdate].remainingSupply -= _qtyToSub;
    emit TokenUpdated(_itemToUpdate, _qtyToAdd, _qtyToSub, itemIds[_itemToUpdate].priceInNFTP);
}
// update redeemable token price
function updateRedeemableTokenPrice(uint256 _itemToUpdate, uint256 _priceInNFTP) onlyOwner external {
	itemIds[_itemToUpdate].priceInNFTP =_priceInNFTP;
    emit TokenUpdated(_itemToUpdate, 0, 0, _priceInNFTP);
}
// update redeemable token price
function updateRedeemableTokenERC721(uint256 _itemToUpdate, bool _isERC721) onlyOwner external {
	itemIds[_itemToUpdate].isErc721 =_isERC721;
}
//updatePauseStatus
function setPausedStatus(bool _isPaused) onlyOwner external {
	paused =_isPaused;
	emit ContractPaused(_isPaused);
}

//***************************** View Functions ****************************************/
    function name()  public view returns (string memory) {
        return _name;
    }   
 	function symbol()  public view returns (string memory) {
        return _symbol;
    }
 	function getRedeemableTokenRemainingSupply(uint256 _itemId)  public view returns (uint256) {
        return itemIds[_itemId].remainingSupply;
    }
 	function getRedeemableTokenPrice(uint256 _itemId)  public view returns (uint256) {
        return itemIds[_itemId].priceInNFTP;
    }
 	function getRedeemableContract(uint256 _itemId)  public view returns (address) {
        return itemIds[_itemId].contractAddress;
    }
 	function getRedeemableTokenId(uint256 _itemId)  public view returns (uint256) {
        return itemIds[_itemId].tokenId;
    }
 	function getRedeemableVaultWallet(uint256 _itemId)  public view returns (address) {
        return itemIds[_itemId].vaultWallet;
    }


//***************************** Redeem Functions ****************************************/

 function claimRedeemableToken(uint256 _itemToClaim, uint256 _qtyToClaim)external{
	 uint256 qtyAvailable = itemIds[_itemToClaim].remainingSupply;
	 require(_qtyToClaim <= qtyAvailable, "Error, quantity not available");
	 uint256 priceEach = itemIds[_itemToClaim].priceInNFTP;

	 INFTP nftpContract = INFTP(nftpAddress);
	 uint256 claimersNFTPBalance = nftpContract.balanceOf(msg.sender);
	 uint256 amountOwed = priceEach * _qtyToClaim;
	 require(claimersNFTPBalance >= amountOwed, "Error, not enough NFTPs");
	nftpContract.redeemPoints(msg.sender, amountOwed);

	 address transferFromAddress = itemIds[_itemToClaim].vaultWallet;
	 address contractAddress = itemIds[_itemToClaim].contractAddress;
	 uint256 tokenId = itemIds[_itemToClaim].tokenId;
	 bool isErc721 = itemIds[_itemToClaim].isErc721;
	 if(isErc721){
		_transferNFT721(transferFromAddress, contractAddress, tokenId);
	 } else{
		_transferNFT1155(transferFromAddress, contractAddress, tokenId, _qtyToClaim);
	 }

	itemIds[_itemToClaim].remainingSupply -=_qtyToClaim;
 	emit TokenRedeemed(contractAddress, tokenId, _itemToClaim, _qtyToClaim, priceEach);
 }

 
 function _transferNFT721(address _transferFrom, address _tokenContract, uint256 _tokenId)internal{
	ITokenContract721 tokenContract = ITokenContract721(_tokenContract);
    tokenContract.transferFrom(_transferFrom, msg.sender, _tokenId);

 }
 function _transferNFT1155(address _transferFrom, address _tokenContract, uint256 _tokenId, uint256 _qtyToTransfer)internal{
	ITokenContract1155 tokenContract = ITokenContract1155(_tokenContract);
		tokenContract.safeTransferFrom(_transferFrom, msg.sender, _tokenId, _qtyToTransfer, '');
 }

 }
