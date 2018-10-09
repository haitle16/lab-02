'use strict';


// const Vehicle = require('./vehicle-constructor.js');
// const Vehicle = require('./vehicle-class.js');
const Vehicle = require('./vehicle-factory.js');
//
// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());
console.log(mazda.wheels);

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

console.log(harley.wheels);





// let honda = Vehicle.Car('Honda');
// console.log(honda);
// honda.wheels();
//
//
// let biker = Vehicle.Motorcycle('Kawasaki');
// console.log(biker);
// biker.wheels();
// biker.wheelie().toBeTruthy();

// console.log(mazda.name)
// console.log(mazda.wheels)
// console.log(harley.wheels)
