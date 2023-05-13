// .transfer() and .send() send 2300 gwei in gas..... so now we use this shit 
(bool success, ) = msg.sender.call.value(amount)("");
require(success, "Transfer failed.");