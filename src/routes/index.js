const { Router } = require('express')
const routes = Router()
const routesDatabase = require('../routes/v1/databaseRouter')


routes.use([routesDatabase]);

module.exports = routes

