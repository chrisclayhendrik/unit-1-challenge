const Scooter = require('../src/scooter');
class ChargeStation {
    
    static chargeStations = [];

    constructor(id, city) {
        this.id = id;
        this.city = city;
            
    }

    lock(scooter) {
        if (scooter.charge < 100) {
            Scooter.lock(scooter);
        }
    }

    unlock(scooter) {
        if (scooter.charge = 100) {
            Scooter.unlock(scooter);
        }
    }

    track() {
        console.log(ChargeStation.chargeStations);
    }
}

module.exports = ChargeStation;