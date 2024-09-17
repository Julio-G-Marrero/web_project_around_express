const routerCards = require('express').Router();
const  Card  = require('../data/cards');

routerCards.get('/',(req,res) => {
  Card.find({})
  .then(cards => res.send({ data: cards }))
  .catch(() => res.status(500).send({ message: 'Error' }));
})
module.exports = routerCards;
