//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//mock the live FTSO Manager Contracts

contract FTSOManagerMock {
  struct RewardEpochData {
    uint256 votepowerBlock;
    uint256 startBlock;
    uint256 startTimestamp;
  }

  RewardEpochData[] public rewardEpochs;

  constructor() {}

  function addRewardEpoch(
    uint256 _vpBlock,
    uint256 _startBlock,
    uint256 _startTimestamp
  ) public {
    rewardEpochs.push(RewardEpochData(_vpBlock, _startBlock, _startTimestamp));
  }

  function getCurrentRewardEpoch() external view returns (uint256) {
    return rewardEpochs.length - 1;
  }

  function getRewardEpochVotePowerBlock(uint256 _rewardEpoch) public view returns (uint256) {
    return rewardEpochs[_rewardEpoch].votepowerBlock;
  }
}
