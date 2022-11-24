const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    department:{
        type: String,
        required: true
    },
    extension:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    notes:{
        type: String,
        required: true
    },
}, {timestamps: true})
module.exports = mongoose.model('Orders', orderSchema)