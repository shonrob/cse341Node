const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Adam Robinson');
});
routes.get('/test', (req, res) => {
    res.send('Jason Robinson');
});
routes.get('/test2', (req, res) => {
    res.send('Bree Robinson');
});
routes.get('/test3', (req, res) => {
    res.send('Kaitlyn Robinson');
});

module.exports = routes