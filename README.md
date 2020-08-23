# javascript-practice

Following tutorial [Intro To JavaScript Unit Testing With Mocha JS & Chai](https://www.youtube.com/watch?v=MLTRHc5dk6s)
by Traversy Media on YouTube.

Using Mocha (unit testing) and Chai (assertion module).

## 01. Getting started

```bash
npm init
npm install -s mocha
npm install -s chai
```
package name: (javascript-practice) mochatest
description: Simple app for testing
entry point: (index.js) app.js

package.json
```json
"test": "npx mocha || true"
```

`|| true` is to avoid annoying error messages.

We can run tests using: `npm run tests`

## 02. Writing tests

Mocha looks for a folder called 'test' and run tests in it.

app.js
```js
module.exports = function () {
  return 'hello';
}
```

tests/appTest.js
```js
const assert = require('chai').assert;
const app = require('../app');

describe('App', function () {
  it('app should return hello', function () {
    assert.equal(app(), 'hello');
  });
});
```

## 03. More advanced tests

When our exports are more complex (export multiple objects/functions). We can
structure the tests differently.

app.js
```js
module.exports = {
  sayHello: function () {
    return 'hello';
  },
  addNumbers: function (value1, value2) {
    return value1 + value2;
  }
}
```

We can put results into constants, and subdivide the tests into subgroups.

appTest.js
```js
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
```