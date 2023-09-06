const db = require('../db/db')

module.exports = { 
    getAll : async () => {
        return await db.select('*').from('products')
    },

    getById : async (id) => {
        return await db.select('*').from('products').where('id', id).first()
    },

    insert : async (name, price, stock, description) => {
        return await db('products').insert({
        name        : name,
        price       : price,
        stock       : stock,
        description     : description
        })
    },

    update : async (id, name, price, stock, description) => {
        return await db('products').where('id', id).update({
            name        : name,
            price       : price,
            stock       : stock,
            description     : description
        })
    },

    delete : async (id) => {
        return await db('products').where('id', id).delete()
    }
}