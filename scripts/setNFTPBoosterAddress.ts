import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

export const NFTP_ABI = [
  "function setRedeemerAddress(address _newRedeemer) external",
  "function setBoostMinterAddress(address _addressToSet, bool _canBoost) external"
];

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  const nftpAddress = '0x3B46090e608cBC963356f30857F4DAcC09f5DDC4';
  const boosterAddress = '0xb58eE284cE458765C75D98aD3bea5DE665f0EC20';

  const nftpContract = new ethers.Contract(nftpAddress, NFTP_ABI, deployer);
  const result1 = await nftpContract.setBoostMinterAddress(boosterAddress, true);
  //const result1 = await redeemerContract.addRedeemableToken(nftOwnerVault, erc1155TokenContract, tokenId1, supplyAvailable, formattedPrice1, false);
  // const result2 = await redeemerContract.addRedeemableToken(nftOwnerVault, erc1155TokenContract, tokenId2, supplyAvailable, formattedPrice2, false);
  //Deploy Token & Marketplace Contract

  console.log('result ', result1);

}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
