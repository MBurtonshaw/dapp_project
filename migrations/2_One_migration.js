const One = artifacts.require("One");
const Ownable = artifacts.require("Ownable");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(One).then((instance) => {
      instance.setMessage("Heads or Tails? ", 
            {value: web3.utils.toWei("4", "ether"), from: accounts[0]});
      instance.setMessage("Begin! ", 
            {value: web3.utils.toWei("4", "ether"), from: accounts[6]});
      instance.setMessage("Heads or Tails? ", 
            {value: web3.utils.toWei("4", "ether"), from: accounts[7]});
      instance.setMessage("Begin! ", 
            {value: web3.utils.toWei("4", "ether"), from: accounts[8]});
      instance.setMessage("Heads or Tails? ", 
            {value: web3.utils.toWei("4", "ether"), from: accounts[9]});
});
}
