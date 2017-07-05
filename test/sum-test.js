const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it('Should return undefined if non-numbers are passed in.', function(){
      expect (sum('a')).to.be.an('undefined');
      expect(sum('$')).to.be.an('undefined');
      expect(sum([1,2])).to.be.an('undefined');
      expect(sum({})).to.be.an('undefined');
    });

    it('Should return the sum of multiple numbers.', function(){
      expect (sum(1, 2, 3)).to.equal(6);
      expect(sum(7, 8, 9, 10)).to.equal(34);
      expect(sum(0)).to.equal(0);
      expect(sum(1)).to.equal(1);
    });


    it('Should allow negative numbers as arguments.', function(){
      expect (sum(1, -1)).to.equal(0);
      expect (sum(-1, -2)).to.equal(-3);
    });

    it('Should allow decimal numbers as arguments.', function(){
      expect (sum(1.1, 2)).to.equal(3.1);
      expect (sum(-1.1, -2.1)).to.equal(-3.2);
    });


});
