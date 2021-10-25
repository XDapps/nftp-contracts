import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';
export const NFTP_ABI = [
  "function addRedeemableToken(address _vaultWallet, address _contractAddress, uint256 _tokenId, uint256 _supply, uint256 _priceInNFTP, bool _isErc721) external",
  "function owner() public view returns (address)"
];
async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  const nftpAddress = '0x455eF3F5fcB557575F12449b3fc1C1f4dc9e4f3e';
  const redeemerAddress = '0x802ff1CAb64CD2e863b48DD453450A86d09D89a7';
  const erc1155TokenContract = '0x1646ac040284DA5878DD85DEfb07ce4eB1E32C26';
  const tokenId1 = 11;
  const tokenId2 = 12;
  const supplyAvailable = 50000;
  const nftpPrice1 = '10';
  const nftpPrice2 = '5';
  const formattedPrice1 = ethers.utils.parseEther(nftpPrice1);
  const formattedPrice2 = ethers.utils.parseEther(nftpPrice2);
  console.log('formattedPrice1 ', formattedPrice2.toBigInt());
  const nftOwnerVault = '0x7279cECD710C12F950425E55A7b3F132119e7960';
  const redeemerContract = new ethers.Contract(redeemerAddress, NFTP_ABI, deployer);
  //const result1 = await redeemerContract.owner();
  const result1 = await redeemerContract.addRedeemableToken(nftOwnerVault, erc1155TokenContract, tokenId1, supplyAvailable, formattedPrice1, false);
  const result2 = await redeemerContract.addRedeemableToken(nftOwnerVault, erc1155TokenContract, tokenId2, supplyAvailable, formattedPrice2, false);
  //Deploy Token & Marketplace Contract

  console.log('result ', result1);
  console.log('result ', result2);
}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
