const routerUser = require('express').Router();
const {getUsers , getUserById,creteUser,updateUserName ,updateUserAvatar} = require('../controllers/users')

routerUser.get('/',getUsers)

routerUser.get('/:id',getUserById);

routerUser.post('/',creteUser)

routerUser.patch('/me',updateUserName)

routerUser.patch('/me/avatar',updateUserAvatar)


module.exports = routerUser;
