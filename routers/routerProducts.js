const express = require('express')
const app = express()
const router = require('express').Router()
const db = require('../db/db')
const productController = require('../controllers/productController')

app.use(express.urlencoded()) // untuk post method mengambil req body

const logger = (req, res, next) => {
    console.log(`Router level : ${req.method} ${req.url}`)
    next()
}
router.use(logger);

router.get('/api/products/', productController.show)
router.get('/api/products/:id', productController.showById)
router.post('/api/products/', productController.insert)
router.put('/api/products/:id', productController.update)
router.delete('/api/products/:id', productController.delete)

module.exports = router