var mongoose = require('mongoose');


var User = mongoose.model('Users', {
  name: {
    type: String,
    require: true,
    trim: true,
    minlength: 4
  },
  email: {
    require: true,
    type: String,
    trim: true,
    minlength: 6
  },
  location: {
    type: String,
    minlength: 4,
    trim: true
  }
});

module.exports = {User};
