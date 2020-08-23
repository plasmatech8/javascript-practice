# JavaScript: Classes

Following tutorial [JavaScript Classes](https://www.linkedin.com/learning/javascript-classes-2/javascript-classes-demystified?u=2091708)
by Emmanuel Henri on LinkedIn Learning.

## 1. Introduction

-

## 2. Defining Classes

### 2.1 intro

Better classes where introduced in ES6.

There is:
* Syntactic sugar over Prototypes (how to add methods to classes)
* Classes not hoisted (brought to top)

> The prototype is an object that is associated with every functions and
> objects by default in JavaScript, where function's prototype property is
> accessible and modifiable and object's prototype property (aka attribute) is
> not visible. Every function includes prototype object by default.
> (TutorialsTeacher.com)

Class Declaration:
```js
class Car {
    // ...
}
```

Class Expression:
```js
var Car = class {
    // ...
}
```

### 2.2 define basic class

```js
class Car {
  constructor(doors, engine, color) {
    this.door = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine, and a `
      + `beautiful ${this.color} color!`;
  }
}

const car = new Car(4, 'V6', 'blue');

console.log(car);
console.log(car.carStats());
```

### 2.3 class and function differences

Classes and functions are similar.

Functions:
* Hoisted to top of file
* Can be overwritten

Classes:
* Not hoisted
* Cannot be overwritten

### 2.4 strict mode

See [Mozilla Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

Strict mode creates additional errors that would not usually occur and allows
us to improve performance of code.

### 2.5 static methods

```js
class Car {
  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;
    return doors1 + doors2;
  }
}
// ...
Car.totalDoors(car1, car2);
```

### 2.6 ProtoType methods

We can see that all objects have a prototype object.

It shows all methods on the Car object.

```
{…}
    color: "blue"
    doors: 4
    engine: "V6"
    <prototype>: {…}
        carStats: function carStats()
        constructor: class Car { constructor(doors, engine, color) }
        <prototype>: {…}
            __defineGetter__: function __defineGetter__()
            __defineSetter__: function __defineSetter__()
            __lookupGetter__: function __lookupGetter__()
            __lookupSetter__: function __lookupSetter__()
            __proto__:
            constructor: function Object()
            hasOwnProperty: function hasOwnProperty()​​​
            isPrototypeOf: function isPrototypeOf()​​​
            propertyIsEnumerable: function propertyIsEnumerable()​​​
            toLocaleString: function toLocaleString()​​​
            toString: function toString()​​​
            valueOf: function valueOf()​​​
            <get __proto__()>: function __proto__()​​​
            <set __proto__()>: function __proto__()
app.js:23:9
```

## 3. Constructors

```js
class SUV extends Car {
  constructor(doors, engine, color, brand, carStats) {
    super(doors, engine, color);
    this.brand = brand;
    this.carStats = carStats;
    this.wheels = 4;
    this.ac = true;
  }

  myBrand() {
    return `This car's brand is ${this.brand}.`;
  }
}
```

## 4. Extends and Mixins

Use the `extend` keyword to do class inheritance.

Mixins are useful when we want to inherit functionality from multiple classes.

Mixins do not inherit from other classes, they use **composition**.

```js
let mixin = {
  madeIn() {
    console.log('This car was made in 2019!');
  }
}

let carMixin = {
  '__proto__': mixin,
  madeIn() {
    super.madeIn()
  }
}

class AnotherCar extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    Object.assign(this, carMixin);
  }
}

const car4 = new AnotherCar(4, 'v6', 'grey');

car4.madeIn();
```

Use with caution as it is not very commonly used, not very readable.
