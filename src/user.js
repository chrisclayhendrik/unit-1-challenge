class User {

    static users = [];
        
    constructor(name, email, password, birthYear, city) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthYear = birthYear;
        this.city = city;
        
        
    }

        
     register(user) {
        if(user.birthYear <= 2003) {
        User.users.push(user);
    } else if(user.birthYear >= 2004) {
        console.log('You must be 18 years old or older to register.')
    }
}

     userValidation(email, password) {
        if (email === this.email && password === this.password) {
            return true;
    }
        console.log("Incorrect email/password. Please try again.")
        return false;
    }

     login(userValidation) {
        if (userValidation) {
            console.log("You have logged in successfully.")
        }

    }

     logout(login) {
        if (login) {
            console.log("You have logged out successfully.")
        } else {
            console.log("You are not logged in.")
        }
    }

    
}

module.exports = User;