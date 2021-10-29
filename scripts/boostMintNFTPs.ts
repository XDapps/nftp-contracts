import { ethers, upgrades } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

export const NFTP_ABI = [
  "function testBoostMint(address _addressToSend, uint256 _amountToMint) external"
];

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  const nftpAddress = '0x3B46090e608cBC963356f30857F4DAcC09f5DDC4';
  const boosterAddress = '0xb58eE284cE458765C75D98aD3bea5DE665f0EC20';
  const riddler = '0x13dd6daf273e3844ce310d6bca435437874f96dc';
  const riddler2 = '0x4375daBA68D97573efaf2822B98cfaF582C23bAA';
  const rob = '0x66064b9755Ff3C26C380bE0FbE7F38dF6222BA15';
  const jeff = '0x61636fFac29855c56BCA5Ca6d0893f3fDC92A84F';
  const ved = '0x3228E26245b9B4720a32B2BE94251E570DF6eF3a';
  const fc = '0x6ac44de5fdce0aa8087b7d66e8f0d0b54fe632fb';
  const me = '0xba0797b2BCea8de74eb9EC19F6F2bfC05325e77E';

  const nftpContract = new ethers.Contract(boosterAddress, NFTP_ABI, deployer);
  const formattedAmount = ethers.utils.parseEther('3000');
  const formattedAmount2 = ethers.utils.parseEther('500');
  const result0 = await nftpContract.testBoostMint(me, formattedAmount);
  // const result1 = await nftpContract.testBoostMint(riddler2, formattedAmount);
  // const result2 = await nftpContract.testBoostMint(riddler, formattedAmount);
  // const result3 = await nftpContract.testBoostMint(rob, formattedAmount);
  // const result4 = await nftpContract.testBoostMint(jeff, formattedAmount);
  // const result5 = await nftpContract.testBoostMint(fc, formattedAmount);
  // const result6 = await nftpContract.testBoostMint(ved, formattedAmount2);
  // const result4 = await redeemerContract.addRedeemableToken(nftOwnerVault, erc1155TokenContract, tokenId1, supplyAvailable, formattedPrice1, false);
  // const result2 = await redeemerContract.addRedeemableToken(nftOwnerVault, erc1155TokenContract, tokenId2, supplyAvailable, formattedPrice2, false);
  //Deploy Token & Marketplace Contract

  console.log('result ', result0);
  // console.log('result ', result2);
  // console.log('result ', result3);

}
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
