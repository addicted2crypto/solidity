// Description: Safe math implemintation for safe function call. 


// My Solution with safemath import =>



pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract SafeIncrementContract {
    using SafeMath for uint8;
    uint8 public number = 255;

    function increment() public {
        number = number.add(1);
    }
}