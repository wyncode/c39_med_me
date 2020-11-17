const router = require('express').Router();
const {
  getAllOrders,
  createOrder
} = require('../../controllers/ordersControllers');

router.get('/', getAllOrders);
router.post('/', createOrder);

module.exports = router;
