var assert = require("assert");
var findItemsOver = require('../findItemsOver');

describe('the findItemsOver function' , function(){
    it('should return all the products that have a quantity higher than 27.' , function(){
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}],
         findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}], 20));

    });

    it('should return all the products that have a quantity higher than 17.' , function(){
        assert.deepEqual([],
         findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}], 20));

    });

    
});
