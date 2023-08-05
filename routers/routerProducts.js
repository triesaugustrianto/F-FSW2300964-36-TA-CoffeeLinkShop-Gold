const express = require('express')
const app = express()
const router = require('express').Router()
app.use(express.urlencoded())
const path = require('path')
const logger = (req, res, next) => {
    console.log(`Router level : ${req.method} ${req.url}`)
    next()
}
router.use(logger);

router.get('/', (req, res) => {
    res.render('products')
})

module.exports = router