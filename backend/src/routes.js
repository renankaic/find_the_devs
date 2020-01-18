const { Router } = require('express')
const routes = Router()

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.get('/devs/:github_username', DevController.show)
routes.put('/devs/:github_username', DevController.update)
routes.delete('/devs/:github_username', DevController.destroy)

routes.get('/search', SearchController.index)

module.exports = routes