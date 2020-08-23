const assert = require('chai').assert;
const app = require('../app');


// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(3, 3);


describe('App', function () {

  describe('sayHello()', function () {
    // Value check
    it('sayHello should return hello', function () {
      assert.equal(sayHelloResult, 'hello');
    });
    // Type check
    it('sayHello should return type string', function () {
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function () {
    // Value check
    it('addNumbers should be above 5', function () {
      assert.isAbove(addNumbersResult, 5);
    });
    // Type check
    it('addNumbers should return type number', function () {
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});
