const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConsumerSchema = new Schema({
  passwordHash: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Consumer', ConsumerSchema);
//          name of the module             name of the module in the db and the db Schema
