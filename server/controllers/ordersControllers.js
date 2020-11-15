const Order = require('../db/models/order');
const Patient = require('../db/models/patient');

const getAllOrders = async (req, res) => {
  try {
    const exercises = await Order.find();
    res.status(200).json({ orders });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    const patient = await Patient.findById({ _id: req.body.patientId });
    console.log(patient);
    await patient.orders.push(order._id);
    await patient.save();
    res.status(200).json({ patient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllOrders, createOrder };
