const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    prescriptions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medicine'
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
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
