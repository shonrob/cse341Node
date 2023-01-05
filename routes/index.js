const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Shonda Robinson');
});

module.exports = routes