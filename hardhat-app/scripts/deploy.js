const { ethers } = require("hardhat");
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require('../constants');

async function main() {
  const exchangeContract = await ethers.getContractFactory('Exchange');
  const deployedExchangeContract = await exchangeContract.deploy(CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS);

  await deployedExchangeContract.deployed();
  // const deployedExchangeContract  = await ethers.deployContract('Exchange', [CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS]);

  // await deployedExchangeContract.waitForDeployment();

  console.log('Exchange Contract Address: ', deployedExchangeContract.address); // Exchange Contract Address: 0x3a26d3b827dD1C84DB118a12c67F3E2aEc49F422
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});