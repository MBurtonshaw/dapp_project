const One = artifacts.require("One");
const assert = require("assert");
const truffleAssert = require("truffle-assertions");
const firstGuy = "0x475A1d380EA76EA68713180f824C3bEbc780498A";
const secondGuy = "0x5f10699884a4BEcc57f531c2134Ee169191a1546";
const one_ether = web3.utils.toWei("1", "ether");

contract("One", async function() {
    let instance;
    beforeEach(async function() {
        instance = await One.new();
    });
    it("should change current message", async function() {
        await instance.setMessage("What up", {value: web3.utils.toWei("1", "ether")});
        let thisValue = await instance.getMessage();
        assert.equal(thisValue, "What up");
        //await instance.payout({from: firstGuy});
        //delete this ^ at launch
    });
    it("should only let owner change the message", async function() {
        await truffleAssert.fails(instance.setMessage("Sup", {value: web3.utils.toWei("1", "ether"), from: secondGuy})); 
    });
    it("should flip the coin", async function() {
        await truffleAssert.passes(instance.coinFlip({value: web3.utils.toWei("1", "ether"), from: secondGuy}));
    });
    it("should allow for bets no greater than 10 ether", async function() {
        await truffleAssert.fails(instance.coinFlip({value: web3.utils.toWei("11", "ether"), from: secondGuy}));
    });
});

//charge 1 ether
//execute a coin flip w pseudo randomness
//perform animation
//if win, pay 2 eth
//restart game