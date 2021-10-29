import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  const NFTPRedeemerContractFactory: ContractFactory = await ethers.getContractFactory('NFTPRedeemer');

  const deployedAddress = "0xc882b55846108124717957cDA77923034E0A15eb"
  const upgraded = await upgrades.upgradeProxy(deployedAddress, NFTPRedeemerContractFactory);
  console.log('upgraded ', upgraded);
}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
