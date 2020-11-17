const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  fistName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
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
  totalPrice: {
    type: Number
  },

  delivery: {
    type: Boolean
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
