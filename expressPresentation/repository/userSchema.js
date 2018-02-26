const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    created_at: Date,
    updated_at: Date
})

userSchema.pre('save', function(next) {
    const currentDate = new Date()

    this.updated_at = currentDate

    if (!this.created_at)
      this.created_at = currentDate

    next()
})

module.exports = mongoose.model('users', userSchema)