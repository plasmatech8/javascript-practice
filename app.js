// 2. Defining classes

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine, and a `
      + `beautiful ${this.color} color!`;
  }

  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;
    return doors1 + doors2;
  }
}

const car1 = new Car(4, 'V6', 'blue');
const car2 = new Car(2, 'V2', 'red');

console.log(car1);
console.log(car1.carStats());

console.log(Car.totalDoors(car1, car2));

// 3. Constructors

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

const car3 = new SUV(4, 'v6', 'grey', 'mazda');

console.log(car3.myBrand());

// 4. Extends and Mixins

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