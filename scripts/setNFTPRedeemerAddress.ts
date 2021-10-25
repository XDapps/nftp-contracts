import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

export const NFTP_ABI = [
  "function setRedeemerAddress(address _newRedeemer) external",
  "function owner() public view returns (address)"
];

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  const nftpAddress = '0x455eF3F5fcB557575F12449b3fc1C1f4dc9e4f3e';
  const redeemerAddress = '0x802ff1CAb64CD2e863b48DD453450A86d09D89a7';

  const nftpContract = new ethers.Contract(nftpAddress, NFTP_ABI, deployer);
  const result1 = await nftpContract.setRedeemerAddress(redeemerAddress);
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
