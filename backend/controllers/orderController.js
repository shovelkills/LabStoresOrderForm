const Order = require('../models/ordersModel')
const mongoose = require('mongoose')

//Get all orders
const getOrders = async(req, res) =>{
    const orders = await Order.find({}).sort({createdAt: -1})
    
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
//create order
const createOrder = async(req, res) =>{
    const {information, expiryItems, items} = req.body


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
        const order = await Order.create({information, expiryItems, items})
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
    createOrder,
    deleteOrder,
    updateOrder
}