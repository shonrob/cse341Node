const routes = require('express').Router();
const connectContact = require('../controllers/contacts');


routes.get('/', (req, res) => {
    res.send('Adam Robinson');
});

routes.get('/contacts', connectContact.getAll);

routes.get('/contacts/:id', connectContact.getById);

module.exports = routes