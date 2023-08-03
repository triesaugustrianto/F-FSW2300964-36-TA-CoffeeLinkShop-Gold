const express = require('express');
const app = express();
const port = 3000;

const logger = (req, res, next) => {
    console.log(`aplikasi ${req.method} ${req.url}`)
    next()
}
app.use(logger)

app.get('/home', (req, res) => {
    res.sendFile('./index.html', { root : __dirname});
});


app.get('/product/:id', (req, res) => {
    res.send(`id produck : ${req.params.id} <br>
     category product : ${req.query.category}`)
});

app.get('/users', (req, res) => {
    res.json({
        id  : 1,
        nama : 'tries',
        umur : 27
    })
})

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