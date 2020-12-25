import "./Ownable.sol";
pragma solidity >=0.4.22 <0.8.0;

contract One is Ownable {
    uint balance;
    uint wager;
    address payable public owner;
    address payable public player1;
    address payable public player2;
    string message;
    address[] winnerList;
    
    constructor() public {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    modifier costs(uint cost) {
        require(msg.value >= cost);
        _;
    }
    
    function random() public view returns(uint) {
        return now % 2;
    }
    
    function setMessage(string memory newMessage) public payable costs(1 ether) {
        message = newMessage;
        balance += msg.value;
    }
    
    function getBalance() public view returns(uint) {
        return balance;
    }
    
    function getMessage() public view returns(string memory) {
        return message;
    }
    
    function payMe(address payable to) public returns(uint) {
        uint toTransfer = wager;
        wager = 0;
        
        to.transfer(toTransfer);
        return toTransfer;
    }
    
    function transfer(address payable to, uint amount) public returns(uint) {
        uint toTransfer = amount;
        to.transfer(toTransfer);
        return toTransfer;
    }
    
    function makeWager() payable public returns(bool) {
        wager = msg.value;
        player1 = msg.sender;
        return true;
    }
    
    function acceptWager() payable public returns(bool) {
        if(msg.value == wager) {
            player2 = msg.sender;
            return true;
        }
    }
    
    function coinFlip() public payable {
            if(random() == 0) {
                payMe(player1);
            } else {
                payMe(player2);
            }
    }
    
    function doubleFlip() public payable costs(20 ether) {
        balance += msg.value;
            payMe(owner);
    }
    
    function tripleFlip() public payable costs(20 ether) {
    
    }
    
}