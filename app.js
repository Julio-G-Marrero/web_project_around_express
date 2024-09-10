const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');
const routerUsers = require('./routes/users')
const routerCards = require('./routes/cards')

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
})

app.use('/users',routerUsers)
app.use('/cards',routerCards)
