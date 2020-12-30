pragma solidity >=0.4.22 <0.8.0;

contract Ownable {
    address payable public owner;
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}