const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeskSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    total: {
        type: Number,
        default: 0
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})
const Desk = mongoose.model('Desk', DeskSchema)
module.exports = Desk