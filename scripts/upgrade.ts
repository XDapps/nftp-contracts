import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  const NFTPContractFactory: ContractFactory = await ethers.getContractFactory('NFTP');

  const deployedAddress = "0x3B46090e608cBC963356f30857F4DAcC09f5DDC4"
  const upgraded = await upgrades.upgradeProxy(deployedAddress, NFTPContractFactory);
  console.log('upgraded ', upgraded);

 
}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
