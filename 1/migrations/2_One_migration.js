const One = artifacts.require("One");
const Ownable = artifacts.require("Ownable");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(One).then((instance) => {
      instance.setMessage("Heads or Tails? ", 
            {value: web3.utils.toWei("3", "ether"), from: accounts[5]});
  });
};
