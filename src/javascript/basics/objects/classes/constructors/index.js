class Vehicle {
    constructor(engineType, numDoors, make) { 
    this._engineType = engineType,
    this._numberOfDoors = numDoors
    this._make = make
    }
}

class Truck extends Vehicle{
constructor () {
    super('V8', 2, 'Chevy');
}
}

class Car extends Vehicle{
    constructor(){
        super('V4", 4, 'make')
    }
}

const F150 = new Truck('Ford');
const Rodeo = new Car('Toyota')
console.log(Rodeo); Car {_engineType: 'V4', _numberOfDoors: 4, _make}