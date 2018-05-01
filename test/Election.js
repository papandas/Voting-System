var Election = artifacts.require("./Election.sol");

contract('Election', function(accounts){

    it("Initialized with the 3 candidates.", function(){
        Election.deployed().then(function(instance){
            electionInstance = instance;
            return electionInstance.candidatesCount();
        }).then(function(count){
            assert.equal(count, 3);
        });
    });

    it("Initialized the candidate with correct values.", function(){
        Election.deployed().then(function(instance){
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate){
            assert.equal(candidate[0], 1, "Correct Id");
            assert.equal(candidate[1], "Candidate 1", "Correct name");
            assert.equal(candidate[2], 0, "Correct vote count");
            return electionInstance.candidates(2);
        }).then(function(candidate){
            assert.equal(candidate[0], 2, "Correct Id");
            assert.equal(candidate[1], "Candidate 2", "Correct name");
            assert.equal(candidate[2], 0, "Correct vote count");
            return electionInstance.candidates(3);
        }).then(function(candidate){
            assert.equal(candidate[0], 3, "Correct Id");
            assert.equal(candidate[1], "Candidate 3", "Correct name");
            assert.equal(candidate[2], 0, "Correct vote count");
        });
    });
});