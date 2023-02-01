const express = require('express')
var cors = require('cors')
const fs = require('fs')

const app = express()
const port = 3000

const jsonFile = fs.readFileSync('./sound.json', 'utf8')
const jsonData = JSON.parse(jsonFile)

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/dog', function (req, res) {
    res.send('Woof Woof')
})

app.get('/cat', function (req, res) {
    res.send('Meow Meow')
})

app.get('/user/:id', function (req, res) {
    const q = req.params
    console.log(q)
    res.send('<h2> User ID: ' + q.id + '</h2>')
})

app.get('/dashboard/:id', function (req, res) {
    const q = req.query
    console.log(q)
    // res.send('<h2> User ID: ' + q.id + '</h2>')
})

app.post('/user/:id', function (req, res) {
    const q = req.body
    console.log(q)

    res.send('<h2> User ID: ' + q.id + '</h2>')
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params
    console.log(name)

    var result = { };
    result[name] = jsonData[name];
    
    res.send(result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})