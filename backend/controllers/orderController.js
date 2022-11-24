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
        return res.status(404).json({error: 'No such order'})
    }
    res.status(200).json(order)
}
//create order
const createOrder = async(req, res) =>{
    const {department, extension, date, notes} = req.body
    try{
        const order = await Order.create({department, extension, date, notes})
        res.status(200).json(order)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete order

//update order

module.exports={
    getOrders,
    getOrder,
    createOrder
}