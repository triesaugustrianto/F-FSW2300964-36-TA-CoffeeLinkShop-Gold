const express = require('express');
const app = express();
const path = require('path')
const port = 3000;
const db = require('./db/db')
app.use(express.json())
app.set('view engine', 'ejs')

const logger = (req, res, next) => {
    console.log(`aplikasi level : ${req.method} ${req.url}`)
    next()
}
app.use(logger)

const router = require('./routers/routerProducts')
app.use('/api/products', router)

app.use('/home', (req, res, next) => {
    next()
}, (req, res) => {
    res.render('index')
})

app.use(express.static(path.join(__dirname, 'public')))

app.use('/error', (req, res) => {
    jhdkafhd
})

app.use((req, res, next) => {
    res.status(404).json({
        message : 'not found'
    })
})
app.use((err, req, res, next) => {
    console.log('server error')
    res.status(500).json({
        status : 'fail',
        message : err.message
    })
})

app.listen(port, () => {
    console.log(`server sedang berjalan di port :${port}`)
});