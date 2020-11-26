const Order = require('../db/models/order');
const User = require('../db/models/user');

const getOrder = async (req, res) => {
  const { id } = req.params;

  const order = await Order.findById(id).populate('prescriptions');

  res.send(order);
};

const getUserOrders = async (req, res) => {
  const owner = req.user._id;

  const orders = await Order.find({ owner }).populate('prescriptions');

  res.send(orders);
};

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
    order.owner = req.user._id;
    const user = await User.findById({ _id: req.user._id });
    req.body.prescriptions.forEach((medicineId) => {
      user.medicineCabinet.push(medicineId);
    });

    await order.save();
    await user.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllOrders, createOrder, getUserOrders, getOrder };
