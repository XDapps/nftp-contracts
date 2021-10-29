import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

export const NFTP_ABI = [
  "function getRedeemableTokenRemainingSupply(uint256 _itemId)  public view returns(uint256)",
  "function getRedeemableTokenPrice(uint256 _itemId)  public view returns(uint256)",
  "function getRedeemableContract(uint256 _itemId)  public view returns(address)",
  "function getRedeemableTokenId(uint256 _itemId)  public view returns(uint256)",
  "function getRedeemableVaultWallet(uint256 _itemId)  public view returns(address)"
];


export const ABI_1155 = [
  "function balanceOf(address account) external view returns (uint256)",
  "function name() public view returns (string memory)",
  "function symbol() public view returns (string memory) ",
  "function decimals() public view returns (uint8)",
  "function totalSupply() public view returns (uint256)",

];

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();
  const erc1155TokenAddress = '0x1646ac040284DA5878DD85DEfb07ce4eB1E32C26';
  const redeemerAddress = '0x802ff1CAb64CD2e863b48DD453450A86d09D89a7';

  const nftpAddress = '0x3B46090e608cBC963356f30857F4DAcC09f5DDC4';
  const boosterAddress = '0xA175cb791a980C916852B90E65A48862abb40B99';
  const loxIssuer = '0xdceeD23f24e9Cb9d354a4e8E2374692a50Ec7426';
  console.log('loxIssuer1 ', loxIssuer)
  console.log('NFTP_ABI ', NFTP_ABI)
  console.log('deployer ', deployer)

  const nftpContract = new ethers.Contract(redeemerAddress, NFTP_ABI, deployer);
  const erc1155Token = new ethers.Contract(nftpAddress, ABI_1155, deployer);
  //const formattedAmount = ethers.utils.parseEther('1000');
  console.log('loxIssuer', loxIssuer)
  const result1 = await erc1155Token.balanceOf(loxIssuer);
  console.log('result1 ', result1.toNumber());
  const result2 = await erc1155Token.totalSupply();
  console.log('result2 ', result2.toNumber());
  const result3 = await erc1155Token.name();
  console.log('result3 ', result3);
  //const result1 = await redeemerContract.addRedeemableToken(nftOwnerVault, erc1155TokenContract, tokenId1, supplyAvailable, formattedPrice1, false);
  // const result2 = await redeemerContract.addRedeemableToken(nftOwnerVault, erc1155TokenContract, tokenId2, supplyAvailable, formattedPrice2, false);
  //Deploy Token & Marketplace Contract


}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
