'use strict'

const app = require('express')();
const fs = require('fs');
var cors = require('cors')();

app.use(cors);

const { PORT } = require('./config/config');

app.get('/api', (req, res) => {
    const jsonFormFile = fs.readFileSync('./data/fields.json');
    const jsonFormParsed = JSON.parse(jsonFormFile);
    res.send(jsonFormParsed);
});

app.listen(PORT, () => console.log('App listening on port', PORT));

