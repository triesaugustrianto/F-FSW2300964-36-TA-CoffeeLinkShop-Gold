const db = require('../db/db')

module.exports = { 
    getAll : () => {
        return db.select('*').from('products')
    },

    getById : (id) => {
        return db.select('*').from('products').where('id', id).first()
    },

    insert : (name, price, stock, description) => {
        return db('products').insert({
        name        : name,
        price       : price,
        stock       : stock,
        description     : description
        })
    },

    update : (id, name, price, stock, description) => {
        return db('products').where('id', id).update({
            name        : name,
            price       : price,
            stock       : stock,
            description     : description
        })
    },

    delete : (id) => {
        return db('products').where('id', id).delete()
    }
}