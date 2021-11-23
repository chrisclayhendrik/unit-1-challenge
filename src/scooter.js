const ChargeStation = require('../src/chargeStation')
const User = require('../src/user')

class Scooter {
    

    constructor(id, charge) {
        this.id = id;
        this.charge = charge;
        this.chargeStationId = [];
        this.scooters =[];
    }
}

module.exports = Scooter;