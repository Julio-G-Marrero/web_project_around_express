const Card = require('../models/cards')

const doesRouteExistMiddelware = (req,res,next) => {
  console.log(req)
}

module.exports.getCards = (req,res) => {
  Card.find({})
  .then(cards => res.send({ data: cards }))
  .catch(() => res.status(500).send({ message: 'Error' }));
}

module.exports.createCards = (req,res) => {
  const { name,link } = req.body;
  const owner = req.user._id
  Card.create({name,link,owner})
  .then(card => res.send({ data: card }))
  .catch((err) => res.status(500).send({ message: err }));
}

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // agrega _id al array si aún no está ahí
    { new: true }
  )
  .then(card => res.send({ data: card }))
  .catch((err) => res.status(500).send({ message: err }));
}

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // elimina _id del array
    { new: true }
  )
  .then(card => res.send({ data: card }))
  .catch((err) => res.status(500).send({ message: err }));
}