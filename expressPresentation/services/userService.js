const User = require('../database/models/Users')
const publisher = require('../messaging/publisher')

/**
 * Retrieves all users
 * @param id
 * @returns {Promise.<void>}
 */
module.exports.retrieveAllUsers = async () => {
    const users = await User.find()

    return users.map((model) => model.toJSON())
}

/**
 * Creates a user
 * @param id
 * @returns {Promise.<void>}
 */
module.exports.createUser = async (userData) => {
    const model = new User({ ...userData })

    try {
        await model.validate()
        await model.save()
    } catch (error) {
        return error
    }
}

/**
 * Retrieves a user by id
 * @param id
 * @returns {Promise.<void>}
 */
module.exports.retreiveUser = async (id) => {
    const user = await User.findOne({ _id: id })

    return user
}

/**
 * Retrieves a user by id
 * @param id
 * @returns {Promise.<void>}
 */
module.exports.triggerMessage = async (content) => {
    await publisher.publish({ ...content })
}
