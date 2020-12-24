const One = artifacts.require("One");
const assert = require("assert");
const truffleAssert = require("truffle-assertions");
const firstGuy = "0x6Cdb694b447B02B5b20ef45375b1B4A38b33F3eA";
const secondGuy = "0x7e8D5770Bdac27Cf298D314291549C0e32D5ae4C";
const ninthGuy = "0x7d0278e54799752E67A2A585fEbE323d0Cca7ddA";
const one_ether = web3.utils.toWei("1", "ether");

contract("One", async function() {
    let instance;
    beforeEach(async function() {
        instance = await One.new();
    });
    it("should change current message", async function() {
        await instance.setMessage("What up", {value: web3.utils.toWei("1", "ether"), from: firstGuy});
        let thisValue = await instance.getMessage();
        assert.equal(thisValue, "What up");
        await instance.payMe(firstGuy);
    });
    it("should flip the coin", async function() {
        let contestantPreBalance = parseFloat(await web3.eth.getBalance(secondGuy));
        await instance.coinFlip({value: web3.utils.toWei("1", "ether"), from: secondGuy});
        let contestantPostBalance = parseFloat(await web3.eth.getBalance(secondGuy));
        await assert(contestantPostBalance != contestantPreBalance);
    });
    /*it("should flip a coin", async function() {
        await truffleAssert.passes(instance.coinFlip({value: one_ether, from: firstGuy}));
    });*/
    /*it("should pay owner upon contestant loss", async function() {
        let ownerPreBalance = parseFloat(await web3.eth.getBalance(firstGuy));
        instance.coinFlip({value: one_ether, from: firstGuy});
        let ownerPostBalance = parseFloat(await web3.eth.getBalance(firstGuy));
        assert.equal(ownerPostBalance > ownerPreBalance);
    });*/
    /*it("should payout contestant upon a contestant win", async function() {
        let ownerPreBalance = parseFloat(await web3.eth.getBalance(firstGuy));
        let contestantPreBalance = parseFloat(await web3.eth.getBalance(secondGuy));
        await instance.coinFlip({value: web3.utils.toWei("1", "ether"), from: secondGuy});
        let ownerPostBalance = parseFloat(await web3.eth.getBalance(firstGuy));
        let contestantPostBalance = parseFloat(await web3.eth.getBalance(secondGuy));
        if(ownerPostBalance > ownerPreBalance) {
            assert(contestantPostBalance < contestantPreBalance);
        }
      
        //check balance before and after of contestant
        //same for owner
        //compare the two? if one goes up the other should go down
    //});*/
   /* it("should payout owner upon a contestant loss", async function() {
        let ownerPreBalance = parseFloat(await web3.eth.getBalance(firstGuy));
        let contestantPreBalance = parseFloat(await web3.eth.getBalance(secondGuy));
        await instance.coinFlip({value: web3.utils.toWei("1", "ether"), from: secondGuy});
        let ownerPostBalance = parseFloat(await web3.eth.getBalance(firstGuy));
        let contestantPostBalance = parseFloat(await web3.eth.getBalance(secondGuy));
       
    });*/
});
