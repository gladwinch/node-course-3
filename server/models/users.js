const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User',{
  email: {
    type: String,
    trim: true,
    minlength: 1,
    require: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
    message: '{VALUE} is not a vaild email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      require:true
    },
    token: {
      type: String,
      require: true
    }
  }]
});

module.exports = {User};
