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
    
    function getWinners() public view returns(address[] memory) {
        return winnerList;
    }
    
    function payout() public returns(uint) {
    
        uint toTransfer = balance;
        balance = 0;
        
        msg.sender.transfer(toTransfer);
        return toTransfer;
    }
    
    function ownerPayout() public returns(uint) {
    
        uint toTransfer = balance;
        balance = 0;
        
        owner.transfer(toTransfer);
        return toTransfer;
    }
    
    
    function coinFlip() public payable costs(1 ether) {
        balance += msg.value;
            if(random() == 0) {
                winnerList.push(msg.sender);
                payout();
            } else {
                ownerPayout();
            }
    }
}