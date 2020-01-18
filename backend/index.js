const express = require('express')

const app = express()

app.get('/', (request, response) => {

    return response.json({ message: 'Hello Renan' })

})

app.listen(`3333`)