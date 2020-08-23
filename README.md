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
