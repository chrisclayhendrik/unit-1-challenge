const Scooter = require('../src/scooter')

describe('Scooter class', () => {
    test('has an id', () => {
        const scooter = new Scooter(1, 100)
        expect(scooter.id).toBe(1)
    })
})