const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const router = require('./router')
const port = 3000;

const app = express();

//parsing through recieved data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router)

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`listening on port: ${port}`))