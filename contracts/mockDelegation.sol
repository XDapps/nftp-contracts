//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//mock the live delegation contract

contract DelegationMock {
  mapping(address => mapping(address => mapping(uint256 => uint256))) public votePowerMock;

  constructor() {}

  function delegateMock(
    address _to,
    uint256 _amount,
    uint256 _vpBlock
  ) public {
    votePowerMock[msg.sender][_to][_vpBlock] = _amount;
  }

  function votePowerFromToAt(
    address _from,
    address _to,
    uint256 _blockNumber
  ) external view returns (uint256) {
    return votePowerMock[_from][_to][_blockNumber];
  }
}
