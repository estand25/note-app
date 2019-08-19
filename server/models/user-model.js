const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: {type: String, required: true},
        email: {type: String, required: true},
        bio: {type: String, required: false},
        image: {type: String, required: false},
        hash: {type: String, required: false},
        salt: {type: String, required: false}
    },
    {timestamps: true}
)

mongoose.model('User', User)