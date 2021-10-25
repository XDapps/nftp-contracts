import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  // const SGBMarketplaceFactory: ContractFactory = await ethers.getContractFactory('SGBMarketplace');
  const NFTPRedeemerContractFactory: ContractFactory = await ethers.getContractFactory('NFTPRedeemer');
  const nftpAddress = '0x455eF3F5fcB557575F12449b3fc1C1f4dc9e4f3e';

  const deployedAddress = "0x802ff1CAb64CD2e863b48DD453450A86d09D89a7"
  //Deploy Token & Marketplace Contract
  const redeemerContract = await upgrades.deployProxy(NFTPRedeemerContractFactory, ["NFTP Redeemer", "NFTPR", nftpAddress], { initializer: 'initializeContract' });
  console.log('Redeemer deployed to: ', redeemerContract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
