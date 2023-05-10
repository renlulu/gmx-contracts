const { ethers } = require("hardhat")

async function main() {
    const WETH = await ethers.getContractFactory("WETH9");
    const weth = await WETH.deploy();
    console.log("mock weth address: ", weth.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error)
      process.exit(1)
    })