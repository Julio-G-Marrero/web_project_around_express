const routerCards = require('express').Router();
const {getCards, createCards ,likeCard,dislikeCard} =require('../controllers/cards')

routerCards.get('/',getCards)

routerCards.post('/',createCards)

routerCards.put('/:cardId/likes',likeCard)

routerCards.delete('/:cardId/likes',dislikeCard)


module.exports = routerCards;
