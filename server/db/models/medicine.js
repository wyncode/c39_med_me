const mongoose = require('mongoose');

const medicineSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  dosage: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  avatar: {
    type: String
    // required: true
  }
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
