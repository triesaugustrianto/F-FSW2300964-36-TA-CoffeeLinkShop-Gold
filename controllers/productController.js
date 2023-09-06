const db = require('../db/db.js')
const productModel = require('../models/productModel.js')

module.exports = {
    show : async (req, res) => {
        try{
            const data = await productModel.getAll()
    
                res.status(200).json({
                    status : 200,
                    data : data
                })       
        }catch (error){ 
            res.json({
                status : 500,
                message : error.message
            })
        }
    }, 
    showById : async (req, res) => {
        const id = req.params.id
        try{
            const data = await productModel.getById(id)
            
            if(!data){
                res.json({
                    status : 404,
                    message : 'product not found'
                })
            } else {
                res.status(200).json ({
                    status : 200,
                    data : data
                }) 
            }       
        }catch (error){
            res.json({
                status : 500,
                message : error.message
            })
        }
    }, 
    insert : async (req, res) => {
        try{
            const {name, price, stock, description} = req.body
    
            const data = await productModel.insert(name, price, stock, description)
    
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
    },
    
    update : async (req, res) => {
        try{
            const {
                name,
                price,
                stock,
                description
            } = req.body
            const id = req.params.id
            const data = await productModel.getById(id)
               
                if(!data){
                    res.status(404).json({
                        status  : 404,
                        message : "product not found"
                     })
                } else {
                    await productModel.update(id, name, price, stock, description)
                    
                    res.status(200).json({
                        status      : 200,
                        message     : 'product update is success'
                    })
                }
        }catch (error){
            res.json({
                status      : 500,
                message     : error.message
            })
        }
    },

    delete : async (req, res) => {
        try{
            const id = req.params.id
            const data = await productModel.getById(id)

            if(!data){
                res.status(404).json({
                    status  : 404,
                    message : "product not found"
                })
            } else {
                await productModel.delete(id)   
                res.status(200).json({
                    status      : 200,
                    message     : "deleted product successfull"
                })
            }
        }catch (error){
            res.status(500).json({
                status      : 500,
                message     : error.messsage
            })
        }
    }
}

 