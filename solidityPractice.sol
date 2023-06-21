// .transfer() and .send() send 2300 gwei in gas..... so now we use this shit 
//contract ScopePractice {

  // Local variable
  uint private localVariable = 10;

  // State variable
(bool success, ) = msg.sender.call.value(amount)("");
require(success, "Transfer failed.");
