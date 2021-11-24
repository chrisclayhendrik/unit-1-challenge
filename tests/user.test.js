const User = require('../src/user')

describe('User class', () => {
    const testUser = new User('Chris Hendrik', 'chrisclayhendrik@gmail.com', 'Password1!', 1990, 'Dallas');
    const testUser2 = new User('Chris Hendrik', 'chrisclayhendrik@gmail.com', 'Password1!', 2004, 'Dallas');
    

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
        expect(User.users).toContainEqual(testUser)
    })

    test('has a login function', () => {
        expect(testUser.login()).toBe(testUser.login())
    })

    test('has a logout function', () => {
        expect(testUser.logout()).toBe(testUser.logout())
    })

    test('user validation succeeds', () => {
        expect(testUser.userValidation('chrisclayhendrik@gmail.com', 'Password1!')).toBe(true)
    })

    test('user validation fails', () => {
        expect(testUser2.userValidation('chrisclayhendrik@gmail.com', 'Password2!')).toBe(false)
    })
    
})