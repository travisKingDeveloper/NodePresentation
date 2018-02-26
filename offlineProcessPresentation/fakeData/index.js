const faker = require('faker')
const User = require('../models/userSchema')

function fakeUser() {
    return new User({
        name: faker.name.firstName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        admin: faker.random.boolean(),
        location: faker.address.streetAddress(),
        created_at: faker.date.past()
    })
} 

module.exports = fakeUser