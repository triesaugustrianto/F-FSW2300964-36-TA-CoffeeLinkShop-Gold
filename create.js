const db = require('./db/db.js')

async function runQuery() {
    try{
        await db('products').insert({
            name        : 'temanggung',
            price       : 55000,
            stock       : 50,
            description : 'Temanggung merupakan jenis kopi yang berasal dari temanggung'
        })
        console.log('row inserted successfully')
        const data = await db.select('*').from('products')
        console.log(data)
    } catch{
        console.error('error :', Error)
    } finally{
        db.destroy()
    }
}

runQuery()