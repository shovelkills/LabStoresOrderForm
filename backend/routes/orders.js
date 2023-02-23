const express = require('express')
const {
    createOrder,
    getOrder,
    getOrders,
    getExpiryOrder,
    deleteOrder,
    updateOrder
} = require('../controllers/orderController')

const router = express.Router()

//Get all orders
router.get('/', getOrders)
//Get single order
router.get('/:id', getOrder)
//Get Expiry Order
router.get('/', getExpiryOrder)
//POST a new order
router.post('/', createOrder)
//DELETE order
router.delete('/:id', deleteOrder)
//UPDATE a order
router.patch('/:id', updateOrder)

module.exports = router