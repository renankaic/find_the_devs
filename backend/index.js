const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://renankaic:re146155@cluster0-y53fl.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())

// HTTP methods GET, POST, PUT, DELETE

////Params types:
//Query Params:
//Used in GET requests
//request.query (filters, ordenation, pagination...)

////Route Params:
//  /{resource}/:id
//  Used to identify a resource to change or to delete
//  request.params

////Body:
// Used to create or update a resource
// /{resource}
// { "name": "John", "age": 13}


// MongoDB Database (Non-relational)


app.get('/', (request, response) => {

    console.log(request.query);
    return response.json({ message: 'Hello Renan' })

})

app.listen(`3333`)