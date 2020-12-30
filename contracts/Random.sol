pragma solidity >=0.4.22 <0.8.0;
import "https//github.com/provable-things/ethereum-api/provableAPI.sol";

contract Random is usingProvable{
    uint256 NUM_RANDOM_BYTES_REQUESTED = 1;
    uint256 public latestNumber;
    
    constructor() public {
        update();
    }
    
    function __callback(bytes32 _queryId, string memory _result, bytes memory _proof) public {
        require(msg.sender = provable_cbAdress());
        
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(_result))) % 100;
        latestNumber = randomNumber;
        emit generatedRandomNumber(randomNumber);
    }
}