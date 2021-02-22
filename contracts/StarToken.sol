// SPDX-License-Identifier: MIT
pragma solidity ^0.7.4;

contract StarToken {
    string public name = "Star Token";
    string public symbol = "STR";
    string public standard = "Star Token v1.0.0";
    uint256 public totalSupply;

mapping(address => uint256) public balanceOf;
 
 constructor(uint256  _initialSupply) {
     balanceOf[msg.sender] = _initialSupply;
     totalSupply = _initialSupply;
 }

 function transfer(address _to, uint256 _value) public view returns (bool success) {
     require(balanceOf[msg.sender] >= _value);
     
 }
}
