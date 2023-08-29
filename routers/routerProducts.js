const express = require('express')
const app = express()
const router = require('express').Router()
const db = require('../db/db')

app.use(express.urlencoded()) // untuk post method mengambil req body

const logger = (req, res, next) => {
    console.log(`Router level : ${req.method} ${req.url}`)
    next()
}
router.use(logger); 

router.get('/', async (req, res) => {
    try{
        const data = await db.select('*').from('products')
        res.json({
        status : 201,
        data : data})
        
    }catch (error){ 
        res.json({
            status : 500,
            message : error.message
        })
    } 
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const data = await db.select('*').from('products').where('id', id).first()
        if(!data){
            res.json({
                status : 404,
                message : 'product not found'
            })
        } 
        res.json ({
            status : 201,
            data : data
        })        
    }catch (error){
        res.json({
            status : 500,
            message : error.message
        })
    }
})

router.post('/', async (req, res) => {
    try{
        const {name, price, stock, description} = req.body

        await db('products').insert({
            name        : name,
            price       : price,
            stock       : stock,
            description     : description
        })

        res.status(201).json({
            status  : 201,
            message     : 'product successfully added'
        })
    } catch(error) {
        res.jason({
            status      : 500,
            message     : error.message
        })
    }
})

module.exports = router