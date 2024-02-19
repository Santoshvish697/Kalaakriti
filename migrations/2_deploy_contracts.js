var BoredPetsNFT = artifacts.require("BoredPetsNFT");
var Marketplace = artifacts.require("Marketplace");

module.exports = function(deployer) {
  deployer.deploy(Marketplace);
//   const marketplace = await Marketplace.deployed();
//   await deployer.deploy(BoredPetsNFT, marketplace.address);
}