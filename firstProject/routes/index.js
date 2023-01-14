// main overview  of routes 

const routes = require('express').Router();

routes.use('/', require('./contacts'))

module.exports = routes;



