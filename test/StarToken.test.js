
var StarToken = artifacts.require("./StarToken.sol");

contract("StarToken", function(accounts){

    var tokenInstance;
    it("Intialize the contract with correct values", function() {
        return StarToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.name();

        }).then(function(name) {
          assert.equal(name, "Star Token", "has the correct name");
          return tokenInstance.symbol();
        }).then(function(symbol){
          assert.equal(symbol, "STR", "has the correct symbol");
          return tokenInstance.standard();
        }).then(function(standard){
          assert.equal(standard, "Star Token v1.0.0", "has the correct standard");
        });
      })

      it('allocates the initial supply upon deployment', function() {
        return StarToken.deployed().then(function(instance){
          tokenInstance = instance;
          return tokenInstance.totalSupply();
        }).then(function(totalSupply){
          assert.equal(totalSupply.toNumber(), 1000000, 'Sets the total supply to 1000000');
          return tokenInstance.balanceOf(accounts[0]);
        }).then(function(adminBalance){
          assert.equal(adminBalance.toNumber(), 1000000, "it alloactes the initial supply to the admin")
        })
      })
})
