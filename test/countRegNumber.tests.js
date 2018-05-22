var assert = require("assert");
var countRegNumber = require('../countRegNumber');

describe('the countRegNumber function' , function(){
    it('should return the number of registration numbers in the string received as a parameter' , function(){
        assert.equal(2, countRegNumber('CA 42665, AA 12 RT GP'));
    });

  
});
