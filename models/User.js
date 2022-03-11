const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Tao User
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
    // Admin: {
    //     type: Boolean,
    //     required: true
    // }
})

module.exports = mongoose.model('users', UserSchema)