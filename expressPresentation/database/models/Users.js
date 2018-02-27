const mongoose = require('mongoose')
const uuid = require('uuid/v4')
const name = require('path').basename(__filename, '.js')
const Schema = mongoose.Schema

const schema = new Schema({
    _id: { type: String, default: uuid, required: '{PATH} is required!' },
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    created_at: Date,
    updated_at: Date
}, { collection: name })

schema.pre('save', function(next) {
    const currentDate = new Date()

    this.updated_at = currentDate

    if (!this.created_at)
      this.created_at = currentDate

    next()
})

module.exports = mongoose.model('Users', schema)