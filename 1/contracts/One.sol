pragma solidity >=0.4.22 <0.8.0;

contract One {
    uint balance;
    string message;
    address payable owner;
    address[] winnerList;
    
    constructor() public{
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
    
    function setMessage(string memory newMessage) public onlyOwner payable costs(1 ether) {
        require(msg.value >= 1 ether);
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
        uint toTransfer = balance;
        balance = 0;
        
        to.transfer(toTransfer);
        return toTransfer;
    }
    
    function transfer(address payable to, uint256 amount) public {
        to.transfer(amount);
    }
    
    function coinFlip() public payable costs(1 ether) {
        balance += msg.value;
            if(random() == 0) {
            payMe(msg.sender);
            }
            payMe(owner);
    }
    
    function doubleFlip() public payable costs(2 ether) {
        balance += msg.value;
            if(random() == 0) {
            payMe(msg.sender);
            } 
            payMe(owner);
    }
    
    function tripleFlip() public payable costs(3 ether) {
        balance += msg.value;
            if(random() == 0) {
            payMe(msg.sender);
            } 
            payMe(owner);
    }
    
}