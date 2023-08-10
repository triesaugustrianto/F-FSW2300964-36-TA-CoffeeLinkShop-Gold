const express = require('express')
const app = express()
const router = require('express').Router()
app.use(express.urlencoded()) // untuk post method mengambil req body
//const {json} = require('body-parser')

const products = require('../db/products.json')

const logger = (req, res, next) => {
    console.log(`Router level : ${req.method} ${req.url}`)
    next()
}
router.use(logger);

router.get('/', (req, res) => {
    res.json(products)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json(products.find((product) => {
        return product.id == id
    }))
})

router.post('/', (req, res) => {
    const product = req.body

    products.push({
        data : {
            "id"        : products.length + 1,
            "name"      : product.name,
            "price"     : product.price,
            "category"  : product.category,
            "quantity"  : product.quantity
        }
    })

    console.log(products)
    res.json({
        message : "data has ben added"
    })
})

module.exports = router