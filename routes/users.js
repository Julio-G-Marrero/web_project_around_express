const routerUser = require('express').Router();
const { users } = require('../data/users');

routerUser.get('/',(req,res) => {
  // res.send(users)
  // console.log(users)
})

routerUser.get('/:id', (req, res) => {
  const { id } = req.params;
  let user = users.find(user => user._id == id)
  if (!user) {
    res.send({ error: `Este usuario no existe` });
    return;
  }
  res.send(user);
});
module.exports = routerUser;
