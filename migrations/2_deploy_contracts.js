const ConvertLib = artifacts.require("ConvertLib");
const BasicSolidity = artifacts.require("BasicSolidity");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, BasicSolidity);
  deployer.deploy(BasicSolidity);
};
