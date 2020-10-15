var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const userInfo = require('./userInfo.js')

const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', userInfo)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})