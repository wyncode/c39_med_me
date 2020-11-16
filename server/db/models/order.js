const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  fist_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  prescriptions: [
    {
      medicinesId: {
        type: String
      }
    }
  ],
  TotalPrice: {
    type: Number
  },

  delivery: {
    type: Boolean
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
