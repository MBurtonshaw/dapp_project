import "./Ownable.sol";
pragma solidity >=0.4.22 <0.8.0;

contract One is Ownable {
    uint balance;
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
    
    function transfer(address payable to, uint amount) public returns(uint) {
        uint toTransfer = amount;
        to.transfer(toTransfer);
        return toTransfer;
    }
    
    function coinFlip() public payable costs(1 ether) {
        balance += msg.value;
        if(random() == 0) {
            transfer(msg.sender, 2 ether);
        } else {
            transfer(owner, 1 ether);
        }
    }
    
    function doubleFlip() public payable costs(2 ether) {
        balance += msg.value;
        if(random() == 0) {
            transfer(msg.sender, 4 ether);
        } else {
            transfer(owner, 2 ether);
        }
    }
    
    function tripleFlip() public payable costs(3 ether) {
        balance += msg.value;
        if(random() == 0) {
            transfer(msg.sender, 6 ether);
        } else {
            transfer(owner, 3 ether);
        }
    }
    
}