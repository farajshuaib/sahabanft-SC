// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, run } from "hardhat";

async function main() {
  await run("clean");
  await run("compile");
  // We get the contract to deploy
  const Marketplace = await ethers.getContractFactory("SahabaMarketplace");
  const nftMarket = await Marketplace.deploy();

  await nftMarket.deployed();

  console.log("NFTMarket deployed to:", `${nftMarket.address}`);

  await nftMarket.deployTransaction.wait(6);

  await run("verify:verify", {
    address: nftMarket.address,
    contract: "contracts/SahabaMarketplace.sol:SahabaMarketplace",
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
