const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Adam Robinson');
});

module.exports = routes