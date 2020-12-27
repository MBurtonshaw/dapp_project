var web3 = new Web3(Web3.givenProvider);
var contractInstance;
var newGreen = "rgb(12, 214, 98)";
var newBlack = "rgb(1, 14, 6)";
var owner;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
      contractInstance = new web3.eth.Contract(window.abi, "0x47BA2fAa9E4102FF26d64e323ac4284D31d3105B", {from: accounts[0]});
        
    });
    $("body").css("backgroundColor", "rgb(1, 14, 6)");
    $("#container").css("color", "white");
    $("#container").css("width", "100%");
    $("#container").css("height", "100%");
    $("#container").css("margin", "auto");
    $("#container").css("outline", "rgb(12, 214, 98) solid 10px");
    $("#container").css("border", "white solid 2px");
    $("#container").css("text-align", "center");
    $("#container").css("padding-top", "7em");
    $("#button_div").css("margin-top", "8em");
    $("#button_div").css("padding-bottom", "16em");
    $(".middle_text").css("margin", "-0.02em");
    $(".button_divs").css("width", "30%");
    $("#middle_text_2").css("padding-bottom", "1em");
    $("#middle_text_4").css("padding-bottom", "1em");
    $("#middle_text_6").css("padding-bottom", "1em");
    $("#button_div").css("display", "grid");
    $("#button_div").css("grid-template-rows", "100%");
    $("#button_div").css("grid-template-columns", "auto");
    $("#1_div").css("grid-row-start", "1");
    $("#1_div").css("grid-row-end", "1");
    $("#1_div").css("margin", "auto");
    $("#2_div").css("grid-row-start", "1");
    $("#2_div").css("grid-row-end", "1");
    $("#2_div").css("margin", "auto");
    $("#3_div").css("grid-row-start", "1");
    $("#3_div").css("grid-row-end", "1");
    $("#3_div").css("margin", "auto");
    $(".button").css("outline", "2px solid rgb(12, 214, 98)");
    $(".button").css("border", "1px solid black");
    $(".button").css("padding", "5px 12px 5px 12px");
    $(".button").css("border-radius", "8%");
    /////////////////////////////////////////////////////////////////////////
    if (window.innerWidth < 900) {
            $("#container").css("padding-top", "2em");
            $("#button_div").css("display", "block");
            $("#button_div").css("margin-top", "4em");
            $("#1_div").css("padding-bottom", "4em");
            $("#2_div").css("padding-bottom", "4em");
            $("#3_div").css("padding-bottom", "4em");
        }
    /////////////////////////////////////////////////////////////////////////
    $("#button_1").click(() => {
        coinFlip();
    });
    
    $("#button_2").click(() => {
        doubleFlip();
    });
    
    $("#button_3").click(() => {
        tripleFlip();
    });
});
////////////////////////////////////////////////////////////////////////////

function coinFlip() {
    contractInstance.methods.coinFlip().send({value: web3.utils.toWei("1", "ether")});
}
function doubleFlip() {
    contractInstance.methods.doubleFlip().send({value: web3.utils.toWei("2", "ether")});
}
function tripleFlip() {
    contractInstance.methods.tripleFlip().send({value: web3.utils.toWei("3", "ether")});
}