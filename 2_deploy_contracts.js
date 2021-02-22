var StarToken = artifacts.require("./StarToken.sol");

module.exports = function(deployer) {
  deployer.deploy(StarToken, 1000000);
};
