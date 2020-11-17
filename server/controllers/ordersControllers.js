const Order = require('../db/models/order');
const User = require('../db/models/user');

const getAllOrders = async (req, res) => {
  try {
    const Order = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    const user = await User.findById({ _id: req.body.userId });
    console.log(user);
    await user.orders.push(order._id);
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllOrders, createOrder };
