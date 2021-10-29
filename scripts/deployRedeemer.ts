import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  // const SGBMarketplaceFactory: ContractFactory = await ethers.getContractFactory('SGBMarketplace');
  const NFTPRedeemerContractFactory: ContractFactory = await ethers.getContractFactory('NFTPRedeemer');
  const nftpAddress = '0x3B46090e608cBC963356f30857F4DAcC09f5DDC4';

  const deployedAddress = "0xc882b55846108124717957cDA77923034E0A15eb"
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
