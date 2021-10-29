import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  
  const NFTPBoosterContractFactory: ContractFactory = await ethers.getContractFactory('NFTPBooster');
  const nftpAddress = '0x3B46090e608cBC963356f30857F4DAcC09f5DDC4';

  const deployedAddress = "0xb58eE284cE458765C75D98aD3bea5DE665f0EC20"
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
