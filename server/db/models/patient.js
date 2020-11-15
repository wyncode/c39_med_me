const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: String,
    required: true,
    trim: true
  },
  adress: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  zip: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Num,
    requiered: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },

  order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }
  ]
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
