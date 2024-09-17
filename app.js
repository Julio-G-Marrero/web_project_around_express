const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routerUsers = require('./routes/users')
const routerCards = require('./routes/cards')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/aroundb');

const { PORT = 3000 } = process.env;


app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
})

app.use('/users',routerUsers)
app.use('/cards',routerCards)
