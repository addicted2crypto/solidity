pragma solidity ^0.8.0;

contract SimpleDonation {
    mapping(address => uint256) public balances;
    
    event DonationReceived(address indexed donor, uint256 amount);
    
    function donate() public payable {
        require(msg.value > 0, "Donation amount must be greater than 0");
        
        balances[msg.sender] += msg.value;
        emit DonationReceived(msg.sender, msg.value);
    }
    
    function withdraw(uint256 amount) external {
        require(amount > 0, "Withdrawal amount must be greater than 0");
        require(amount <= balances[msg.sender], "Insufficient balance");
        
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }
}
