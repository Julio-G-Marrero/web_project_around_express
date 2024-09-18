const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routerUsers = require('./routes/users')
const routerCards = require('./routes/cards')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '66e9b0bdcb0399d938348ea8' // pega el _id del usuario de prueba que creamos en el paso anterior
  };

  next();
});
mongoose.connect('mongodb://localhost:27017/aroundb',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
})

app.use('/users',routerUsers)
app.use('/cards',routerCards)
app.use((req, res, next) => {
  res.send({ error: "Ruta no definida" })
});