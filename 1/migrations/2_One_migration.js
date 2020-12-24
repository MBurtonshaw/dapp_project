const One = artifacts.require("One");
const Ownable = artifacts.require("Ownable");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(One).then((instance) => {
     // instance.transfer(accounts[0], web3.utils.toWei("10", "ether"), {from: accounts[6]});
      //instance.setMessage("Refund", {value: web3.utils.toWei("5", "ether"), from: accounts[9]});
      /*instance.setMessage("Heads or Tails? ", 
            {value: web3.utils.toWei("1", "ether"), from: accounts[0]});*/
      //when launching real contract, change value to "10" ether so the contract has money to pay out initial wins
    /*  instance.coinFlip({from: accounts[3], value: web3.utils.toWei("1", "ether")});
      instance.setMessage("begin", 
            {value: web3.utils.toWei("5", "ether"), from: accounts[0]});*/
  });
};
