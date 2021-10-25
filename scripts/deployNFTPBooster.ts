import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  
  const NFTPBoosterContractFactory: ContractFactory = await ethers.getContractFactory('NFTPBooster');
  const nftpAddress = '0x455eF3F5fcB557575F12449b3fc1C1f4dc9e4f3e';

  const deployedAddress = ""
  //Deploy Token & Marketplace Contract
  const redeemerContract = await upgrades.deployProxy(NFTPBoosterContractFactory, [nftpAddress], { initializer: 'initializeContract' });
  console.log('Booster deployed to: ', redeemerContract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
