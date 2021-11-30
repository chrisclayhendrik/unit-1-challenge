const ChargeStation = require('../src/chargeStation')
const User = require('../src/user')
const Payment = require('../src/payment')


const payment = new Payment('Chris Hendrik', 1234123412341234, '05-17-2030', 111)
const user = new User('Chris Hendrik', 'chrisclayhendrik@gmail.com', 'Password1!', 1990, 'Dallas')

class Scooter {
    static chargeStationId = [];
    static scooters =[];

    
    

    constructor(id, charge) {
        this.id = id;
        this.charge = charge;
    }

    

    rent(scooter) {

            if (scooter.charge == 100) {
                console.log(`${user.name} has rented a scooter`)
                scooter.charge - 10;
            }
        }

    return(scooter) {
        if (scooter.charge == 90) {
            console.log(`${user.name} has returned a scooter`)
            scooter.charge = 100;
        }
    }
}
module.exports = Scooter