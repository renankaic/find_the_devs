const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const app = express()

mongoose.connect('mongodb+srv://renankaic:re146155@cluster0-y53fl.mongodb.net/find_the_devs?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors({ origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(routes)

app.listen(`3333`, '0.0.0.0')