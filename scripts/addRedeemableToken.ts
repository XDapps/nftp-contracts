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
  const erc1155TokenContract = '0x1646ac040284DA5878DD85DEfb07ce4eB1E32C26';
  const tokenId1 = 11;
  const tokenId2 = 12;
  const tokenId3 = 10;
  const supplyAvailable = 140;
  const nftpPrice100 = '100';
  const nftpPrice3000 = '3000';
  const formattedPrice100 = ethers.utils.parseEther(nftpPrice100);
  const formattedPrice3000 = ethers.utils.parseEther(nftpPrice3000);
  const nftOwnerVault = '0x7279cECD710C12F950425E55A7b3F132119e7960';
  const redeemerContract = new ethers.Contract(redeemerAddress, NFTP_ABI, deployer);
  const costonIssuer = '0x4375daBA68D97573efaf2822B98cfaF582C23bAA';
  const loxIssuer = '0xdceeD23f24e9Cb9d354a4e8E2374692a50Ec7426';
  const dogeIssuer = '0x7279cECD710C12F950425E55A7b3F132119e7960';
  //const result1 = await redeemerContract.owner();
  const result1 = await redeemerContract.addRedeemableToken(dogeIssuer, erc1155TokenContract, tokenId1, 49000, formattedPrice100, false);
  const result2 = await redeemerContract.addRedeemableToken(loxIssuer, erc1155TokenContract, tokenId2, 49000, formattedPrice100, false);
  const result3 = await redeemerContract.addRedeemableToken(costonIssuer, erc1155TokenContract, tokenId3, supplyAvailable, formattedPrice3000, false);
  //Deploy Token & Marketplace Contract

  console.log('result ', result2);
  console.log('result ', result2);
}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
