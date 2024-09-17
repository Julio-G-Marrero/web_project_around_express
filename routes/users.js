const routerUser = require('express').Router();
const User = require('../data/users');

routerUser.get('/',(req,res) => {
  User.find({})
  .then(users => res.send({ data: users }))
  .catch(() => res.status(500).send({ message: 'Error' }));
})

routerUser.get('/:id', (req, res) => {
  const { id } = req.params;
  let user = User.find(user => user._id == id)
  if (!user) {
    res.send({ error: `Este usuario no existe` });
    return;
  }
  res.send(user);
});

routerUser.post('/',(req,res) => {
  const { name,about,avatar } = req.body;

  User.create({name,about,avatar})
  .then(user => res.send({ data: user }))
  .catch(() => res.status(500).send({ message: 'Error' }));
})
module.exports = routerUser;
