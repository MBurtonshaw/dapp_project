pragma solidity >=0.4.22 <0.8.0;

contract Ownable {
    address public owner;
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}