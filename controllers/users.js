const User = require('../models/users')

module.exports.getUsers = (req,res) => {
  User.find({})
  .then(users => res.send({ data: users }))
  .catch(() => res.status(500).send({ message: 'Error' }));
}

module.exports.getUserById = (req,res) => {
  const { id } = req.params;
  User.findById(id)
  .then(user => res.send({ data: user }))
  .catch(err => res.status(500).send({ message: 'Error' }));
}

module.exports.creteUser = (req,res) => {
  const { name,about,avatar } = req.body;

  User.create({name,about,avatar})
  .then(user => res.send({ data: user }))
  .catch(() => res.status(500).send({ message: 'Error' }));
}

module.exports.updateUserName = (req,res) => {
  const { name } = req.body;
  const userId = req.user._id

  User.findByIdAndUpdate(userId,{name: name})
  .then(user => res.send({ data: user }))
  .catch(user => res.send({meessage:'Error'}))
}

module.exports.updateUserAvatar = (req,res) => {
  const { avatar } = req.body;
  const userId = req.user._id

  User.findByIdAndUpdate(userId,{avatar: avatar})
  .then(user => res.send({ data: user }))
  .catch(user => res.send({meessage:'Error'}))
}