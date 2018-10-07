'use strict';

class Vehicle{
    constructor(name, wheels){
        this.name = name;
        this.wheels = wheels;
    }
    drive(){
        return 'Moving Forward';
    }
    stop(){
        return 'Stopping';
    }
}
class Car extends Vehicle {
    constructor(name) {
        super();
        this.name = name;
        super.wheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(name) {
        super();
        this.name = name;
        super.wheels = 2;
    }
    wheelie(){
        return 'Whee!';
    }
}

module.exports = {Car, Motorcycle};
