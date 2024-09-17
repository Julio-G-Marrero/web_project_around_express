const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type:String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type:String,
    required: true,
    validate: {
      validator(v) {
        urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
        return urlRegex.test(v)
      },
      message:'El url es invalido.'
    }
  }
})

module.exports = mongoose.model('user', userSchema);
