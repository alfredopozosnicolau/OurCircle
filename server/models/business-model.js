const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  passwordHash: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
    required: String,
  },
  businessLocation: {
    type: String,
  },
  services: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  businessURL: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  story: {
    type: String,
  },
  deals: [
    {
      likes: { type: Number, default: 0 },
      description: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Business', BusinessSchema);
//          name of the module             name of the module in the db and the db Schema
