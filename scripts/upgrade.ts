import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  const NFTPContractFactory: ContractFactory = await ethers.getContractFactory('NFTP');

  const deployedAddress = "0x455eF3F5fcB557575F12449b3fc1C1f4dc9e4f3e"
  const upgraded = await upgrades.upgradeProxy(deployedAddress, NFTPContractFactory);
  console.log('upgraded ', upgraded);

 
}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
