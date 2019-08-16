const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema(
    {
        title: {type: String, require: false },
        desciption: {type: String, required: false }
    },
    { timestamps: true }
)

module.exports = mongoose.model('notes', Note)