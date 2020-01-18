const express = require('express')

const app = express()

app.use(express.json())

// HTTPS methods GET, POST, PUT, DELETE

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

app.get('/', (request, response) => {

    console.log(request.query);
    return response.json({ message: 'Hello Renan' })

})

app.listen(`3333`)