const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    information:{
        type:Map,
        of: new Schema({
            department:{
                type: String,
            },
            date:{
                type: Date, 
            },
            extension:{
                type: Number,
            },
        }),
    },   
    expiryitems:{
        type:Map,
        of: new Schema({
            bloodvial1:{
                type: String,
                quantity:{
                    type: Number, 
                },
                date:{
                    type: Date,
                },
            },
            bloodvial2:{
                type: String,
                quantity:{
                    type: Number, 
                },
                date:{
                    type: Date,
                },
            },
            bloodvial3:{
                type: String,
                quantity:{
                    type: Number, 
                },
                date:{
                    type: Date,
                },
            },
            bloodvial4:{
                type: String,
                quantity:{
                    type: Number, 
                },
                date:{
                    type: Date,
                },
            },
            bloodvial5:{
                type: String,
                quantity:{
                    type: Number, 
                },
                date:{
                    type: Date,
                },
            },
            bloodvial6:{
                type: String,
                quantity:{
                    type: Number, 
                },
                date:{
                    type: Date,
                },
            },
            item1:{
                type: String,
                quantity:{
                    type: Number, 
                },
                date:{
                    type: Date,
                },
            },
            item2:{
                type: String,
                quantity:{
                    type: Number, 
                },
                date:{
                    type: Date,
                },
            },
            item3:{
                type: String,
                quantity:{
                    type: Number, 
                },
                date:{
                    type: Date,
                },
            },
            notes:{
                type: String,
            }
        }),
        
    },
    items:{
        item4:{
            type: String,
            quantity:{
                type: Number, 
            },
        },
        item5:{
            type: String,
            quantity:{
                type: Number, 
            },
        },
        item6:{
            type: String,
            quantity:{
                type: Number, 
            },
        },
        item7:{
            type: String,
            size1:{
                type: String,
                quantity:{
                    type: Number, 
                },
            },
            size2:{
                type: String,
                quantity:{
                    type: Number, 
                },
            },
            size3:{
                type: String,
                quantity:{
                    type: Number, 
                },
            },
        },
        item8:{
            type: String,
            size1:{
                type: String,
                quantity:{
                    type: Number, 
                },
            },
            size2:{
                type: String,
                quantity:{
                    type: Number, 
                },
            },
            size3:{
                type: String,
                quantity:{
                    type: Number, 
                },
            },
        },
        item9:{
            type: String,
            size1:{
                type: String,
                quantity:{
                    type: Number, 
                },
            },
            size2:{
                type: String,
                quantity:{
                    type: Number, 
                },
            },
            size3:{
                type: String,
                quantity:{
                    type: Number, 
                },
            },
        },
    } ,
    notes:{
        type: String,
    }
}, {timestamps: true})

module.exports = mongoose.model('Order', orderSchema)