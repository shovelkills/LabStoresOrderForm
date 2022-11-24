const express = require('express')
const {
    createOrder,
    getOrder,
    getOrders
} = require('../controllers/orderController')

const router = express.Router()

//Get all orders
router.get('/', getOrders)
//Get single order
router.get('/:id', getOrder)

//POST a new order
router.post('/', createOrder)
//DELETE order
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE an order'})
})
//UPDATE a order
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a order'})
})

module.exports = router