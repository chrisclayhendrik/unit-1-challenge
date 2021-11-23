const ChargeStation = require('../src/chargeStation.js');

describe('ChargeStation class', () => {
    const testChargeStation = new ChargeStation(1, 'Dallas');
})
    test('ChargeStation has id', () => {
        const testChargeStation = new ChargeStation(1, 'Dallas');
        expect(testChargeStation.id).toBe(1);
    })