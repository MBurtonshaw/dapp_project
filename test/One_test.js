const One = artifacts.require("One");
const Ownable = artifacts.require("Ownable");
const assert = require("assert");
const truffleAssert = require("truffle-assertions");
const owner = "0x6Cdb694b447B02B5b20ef45375b1B4A38b33F3eA";
const contestant = "0x7e8D5770Bdac27Cf298D314291549C0e32D5ae4C";
const ninthGuy = "0x7d0278e54799752E67A2A585fEbE323d0Cca7ddA";
const one_ether = web3.utils.toWei("1", "ether");

contract("One", async function() {
    let instance;
    beforeEach(async function() {
        instance = await One.new();
    });
    it("should change current message", async function() {
        await instance.setMessage("What up", {value: web3.utils.toWei("1", "ether"), from: owner});
        let thisValue = await instance.getMessage();
        assert.equal(thisValue, "What up");
        await instance.payMe(owner);
    });
    /*it("should pay owner upon contestant loss", async function() {
        let ownerPreBalance = parseFloat(await web3.eth.getBalance(owner));
        let contestantPreBalance = parseFloat(await web3.eth.getBalance(contestant));
        await instance.coinFlip({value: one_ether, from: contestant});
        let ownerPostBalance = parseFloat(await web3.eth.getBalance(owner));
        let contestantPostBalance = parseFloat(await web3.eth.getBalance(contestant));
        if(contestantPostBalance < contestantPreBalance) {
           assert(ownerPostBalance > ownerPreBalance);
           }
    });
    it("should pay contestant upon contestant win", async function() {
        let ownerPreBalance = parseFloat(await web3.eth.getBalance(owner));
        let contestantPreBalance = parseFloat(await web3.eth.getBalance(contestant));
        await instance.coinFlip({value: one_ether, from: contestant});
        let ownerPostBalance = parseFloat(await web3.eth.getBalance(owner));
        let contestantPostBalance = parseFloat(await web3.eth.getBalance(contestant));
        if(contestantPostBalance > contestantPreBalance) {
           assert(ownerPostBalance < ownerPreBalance);
           }
    });*/
});
