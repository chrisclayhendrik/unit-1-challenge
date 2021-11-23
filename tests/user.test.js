const User = require('../src/user')

describe('User class', () => {

    
})

    test('has a name', () => {
        const testUser = new User('Chris Hendrik', 'chrisclayhendrik@gmail.com', '05-17-1990', 'Dallas')
        expect(testUser.name).toBe('Chris Hendrik')
    })