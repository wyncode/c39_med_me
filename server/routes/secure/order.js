const router = require('express').Router();
const {
  getAllOrders,
  createOrder
} = require('../../controllers/ordersControllers');

router.get('/orders', getAllOrders);
router.post('/order', createOrder);

module.exports = router;
