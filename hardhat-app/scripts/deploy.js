const { ethers } = require("hardhat");
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require('../constants');

async function main() {
  const exchangeContract = await ethers.getContractFactory('Exchange');
  const deployedExchangeContract = await exchangeContract.deploy(CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS);

  await deployedExchangeContract.deployed();
  // const deployedExchangeContract  = await ethers.deployContract('Exchange', [CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS]);

  // await deployedExchangeContract.waitForDeployment();

  console.log('Exchange Contract Address: ', deployedExchangeContract.address); // Exchange Contract Address: 0x8A3F3e9021FF230B171475617d13d0C8F600FB04
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});