const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  firstName: {
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
        type: String,
        required: true
      }
    }
  ],

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  totalPrice: {
    type: Number
  },

  delivery: {
    type: Boolean
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
