const express = require('express')
const massive = require('massive')
require('dotenv/config')
const {CONNECTION_STRING, SERVER_PORT} = process.env
const app = express()
const CTRL = require('./controller')

//middleware

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    console.log("Connected to db")
  })

//endpoints

app.get('/api/houses', CTRL.getHouses)
app.post('/api/house', CTRL.addHouse)
app.delete('/api/house/:id', CTRL.deleteHouse)







app.listen(SERVER_PORT, ()=> console.log('Welcome to port', SERVER_PORT))