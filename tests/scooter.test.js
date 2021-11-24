const Scooter = require('../src/scooter')

describe('Scooter class', () => {
    const testScooter = new Scooter(1, 100)
    const testScooter2 = new Scooter(2, 50)

    test('has an id', () => {
        const scooter = new Scooter(1, 100)
        expect(scooter.id).toBe(1)
    })

    test('has a charge', () => {
        expect(testScooter.charge).toBe(100)
    })

    test('rent scooter does not fail', () => {
        expect(testScooter.rent()).toEqual(true)
    })

    test('return scooter does not fail', () => {
        expect(testScooter.return()).toEqual(true)
    })


})