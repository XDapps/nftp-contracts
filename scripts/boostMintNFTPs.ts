import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

export const NFTP_ABI = [
  "function testBoostMint(address _addressToSend, uint256 _amountToMint) external"
];

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  const nftpAddress = '0x455eF3F5fcB557575F12449b3fc1C1f4dc9e4f3e';
  const boosterAddress = '0xA175cb791a980C916852B90E65A48862abb40B99';

  const nftpContract = new ethers.Contract(boosterAddress, NFTP_ABI, deployer);
  const formattedAmount = ethers.utils.parseEther('1000');
  const result1 = await nftpContract.testBoostMint(deployer.address, formattedAmount);
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
