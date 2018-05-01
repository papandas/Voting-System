var Election = artifacts.require("./Election.sol");

contract('Election', function(accounts){

    it("--", function(){
        Election.deployed().then(function(instance){
            electionInstance = instance;
            return electionInstance.candidate();
        }).then(function(candidateName){
            assert.equals(candidateName, "Candidate 1", "Candidate Name is good.");
        });
    });

});