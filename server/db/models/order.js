const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    prescriptions: [
      {
        type: mongoose.SchemaTypes.ObjectId
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
