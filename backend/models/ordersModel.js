const mongoose = require('mongoose')
const Schema = mongoose.Schema

const informationSchema = new Schema({
    department:{
        type: String,
    },
    extension:{
        type: Number,
    },
    date:{
        type: Date,
    },
    generalNotes:{
        type: String,
    },
})


const expiryItemSchema = new Schema({
    name:{
        type:String,
    },
    quantity:{
        type: Number,
        default: 0,
    },
    expiryDate:{
        type: Date,
        default: null,
    },
})

const itemSchema = new Schema ({
    name:{
        type:String,
    },
    quantity:{
        type: Number,
        default: 0,
    }
})

const itemsSchema = new Schema ({
    item1:{
        type: itemSchema,
    },
    item2:{
        type: itemSchema,
    },
    item3:{
        type: itemSchema,
    },
    item4:{
        type: itemSchema,
    },
    item5:{
        type: itemSchema,
    },
    expiryitem1:{
        type: expiryItemSchema, 
    },
    expiryitem2:{
        type: expiryItemSchema, 
    },
    expiryitem3:{
        type: expiryItemSchema, 
    },
    expiryitem4:{
        type: expiryItemSchema, 
    },
    expiryitem5:{
        type: expiryItemSchema, 
    },
    notes:{
        type: String,
    },
})



const orderSchema = new Schema({
    information:{
        type: informationSchema, 
        required: true,
    },
    items:{
        type: Object,
    },
    expiryItems:{
        type: Object,
    },
    user_id:{
        type:String,
        required:true
    }
}, {timestamps: true})
module.exports = mongoose.model('Orders', orderSchema)