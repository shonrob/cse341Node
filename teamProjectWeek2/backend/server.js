// Entry point of application 

const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use('/', require('./db/connect'));

app.listen(port,() => {
    console.log(`Running on port ${port}`)
});