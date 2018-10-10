'use strict';

const Vehicle = () =>({
  drive: () => ('Moving Forward'),
  stop: () => ('Stopping'),
});


function Car(name, wheels) {
  wheels = 4;
  let car = Object.assign(
    {}, {name},{wheels}, Vehicle()
  );
  return Object.freeze(car);
}

function Motorcycle(name, wheels) {
  wheels = 2;
  let bike = Object.assign(
    {}, {name},{wheels}, {wheelie}, Vehicle()
  );
  function wheelie() {return 'Whee!';}
  return Object.freeze(bike);
}


module.exports = {Car, Motorcycle};


