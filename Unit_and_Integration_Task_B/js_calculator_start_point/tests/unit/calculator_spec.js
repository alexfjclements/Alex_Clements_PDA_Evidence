var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('should be able to add 1 and 4 to make 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5);
  })

  it('should be able to subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })

  it('should be able to multiply 3 by 5 and find 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('should be able to divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  it('should be able to concatinate multiple number button clicks', function(){
    calculator.numberClick(7);
    calculator.numberClick(1);
    assert.equal(calculator.runningTotal, 71);
  })

  it('should be able to chain multiple operators together', function(){
    calculator.numberClick(7);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 4);
  })

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(7);
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(91);
    assert.equal(calculator.runningTotal, 91);
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 80);
  })

});
