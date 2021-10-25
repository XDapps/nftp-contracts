import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  const NFTPRedeemerContractFactory: ContractFactory = await ethers.getContractFactory('NFTPRedeemer');

  const deployedAddress = "0x802ff1CAb64CD2e863b48DD453450A86d09D89a7"
  const upgraded = await upgrades.upgradeProxy(deployedAddress, NFTPRedeemerContractFactory);
  console.log('upgraded ', upgraded);


}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
