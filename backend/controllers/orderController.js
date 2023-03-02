const Order = require('../models/ordersModel')
const mongoose = require('mongoose')

//Get all orders
const getOrders = async(req, res) =>{
    const user_id= req.user._id

    const orders = await Order.find({user_id}).sort({createdAt: -1})
    
    res.status(200).json(orders)
}
//Get single order
const getOrder = async (req, res) =>{
    const{ id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such order'})
    }

    const order = await Order.findById(id)

    if (!order){
        return res.status(400).json({error: 'No such order'})
    }
    res.status(200).json(order)
}

const getExpiryOrder = async(req, res) =>{
    const date = new Date()
    const expiryOrders = await Order.find({createdAt: { $lt: date}}).sort({createdAt: -1})

    if(!expiryOrders){
        return res.status(400).json({error: 'No such order found pass date'})
    }

    res.status(200).json(expiryOrders)
}
//create order
const createOrder = async(req, res) =>{
    const {information, items, expiryItems} = req.body


    let emptyFields = []

/*     if (!department){
        emptyFields.push('department')
    }

    if (!extension){
        emptyFields.push('extension')
    }

    if (!date){
        emptyFields.push('date')
    }

    if (emptyFields.length > 0){
        return res.status(400).json({ error: 'Please fill in all the required fields', emptyFields})
    } */

    try{
        const user_id = req.user._id
        const order = await Order.create({information, items, expiryItems, user_id})
        res.status(200).json(order)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete order
const deleteOrder = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such order'})
    }

    const order = await Order.findOneAndDelete({_id: id})

    if (!order){
        return res.status(400).json({error: 'No such order'})
    }

    res.status(200).json(order)
}
//update order
const updateOrder = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such order'})
    }
    const order = await Order.findOneAndUpdate({_id: id}, {...req.body})

    if (!order){
        return res.status(400).json({error: 'No such order'})
    }

    res.status(200).json(order)

}

module.exports={
    getOrders,
    getOrder,
    getExpiryOrder,
    createOrder,
    deleteOrder,
    updateOrder
}