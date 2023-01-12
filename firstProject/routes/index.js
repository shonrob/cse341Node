const routes = require('express').Router();
const connectContact = require('../controllers/contacts')


routes.get('/', (req, res) => {
    res.send('Adam Robinson');
});

routes.get('/contacts', connectContact.getAll)



module.exports = routes