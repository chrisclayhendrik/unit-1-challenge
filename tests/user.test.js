const User = require('../src/user')

describe('User class', () => {
    const testUser = new User('Chris Hendrik', 'chrisclayhendrik@gmail.com', 'Password1!', 1990, 'Dallas')
    

    test('has a constructor', () => {
        expect(testUser.constructor.name).toBe('User')
    })
    test('has a name', () => {
        expect(testUser.name).toBe(testUser.name)
    })

    test('has an email', () => {   
        expect(testUser.email).toBe(testUser.email)
    })

    test('has a password', () => {  
        expect(testUser.password).toBe(testUser.password)
    })

    test('has a birthyear', () => {  
        expect(testUser.birthYear).toBe(testUser.birthYear)
    })

    test('has a city', () => { 
        expect(testUser.city).toBe(testUser.city)
    })

    test('registers users', () => {
        testUser.register(testUser);
        expect(testUser.users).toContainEqual(testUser)
    })

    test('has a login function', () => {
        expect(testUser.login).toBe(testUser.login)
    })
})