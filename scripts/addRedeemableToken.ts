import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';
export const NFTP_ABI = [
  "function addRedeemableToken(address _vaultWallet, address _contractAddress, uint256 _tokenId, uint256 _supply, uint256 _priceInNFTP, bool _isErc721) external",
  "function owner() public view returns (address)"
];
async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  const nftpAddress = '0x3B46090e608cBC963356f30857F4DAcC09f5DDC4';
  const redeemerAddress = '0xc882b55846108124717957cDA77923034E0A15eb';
  const erc1155TokenContractOld = '0x1646ac040284DA5878DD85DEfb07ce4eB1E32C26';
  const erc1155TokenContract = '0xC84490846AFEf9Ca5e70535cE993Fd8e4217F425';
  const tokenIdPizza = 10;
  const supplyAvailablePizza = 25;
  const tokenIdBlueberry = 6;
  const supplyAvailableBlueBerry = 250;
  const nftpPrice30 = '30';
  const nftpPrice589 = '589';
  const formattedPrice30 = ethers.utils.parseEther(nftpPrice30);
  const formattedPrice589 = ethers.utils.parseEther(nftpPrice589);
  const nftOwnerVault = '0x7279cECD710C12F950425E55A7b3F132119e7960';
  const redeemerContract = new ethers.Contract(redeemerAddress, NFTP_ABI, deployer);
  const costonIssuer = '0x4375daBA68D97573efaf2822B98cfaF582C23bAA';
  const pizzaSlice = '0x4375daBA68D97573efaf2822B98cfaF582C23bAA';
  const blueBerryIssuer = '0x1bdE9A605EE5A9B007F093AC03E89C43d6dca7dd';
  const lifeIsScam = '0x4375daBA68D97573efaf2822B98cfaF582C23bAA';
  const loxIssuer = '0xdceeD23f24e9Cb9d354a4e8E2374692a50Ec7426';
  const dogeIssuer = '0x7279cECD710C12F950425E55A7b3F132119e7960';
  
  //const result1 = await redeemerContract.owner();
  const result1 = await redeemerContract.addRedeemableToken(pizzaSlice, erc1155TokenContract, tokenIdPizza, supplyAvailablePizza, formattedPrice589, false);
  const result2 = await redeemerContract.addRedeemableToken(blueBerryIssuer, erc1155TokenContract, tokenIdBlueberry, supplyAvailableBlueBerry, formattedPrice30, false);
  //Deploy Token & Marketplace Contract

  console.log('result ', result1);
  console.log('result2 ', result2);
}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
