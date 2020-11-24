const router = require('express').Router();
const {
  getAllOrders,
  createOrder,
  getUserOrders,
  getOrder
} = require('../../controllers/ordersControllers');

router.get('/', getAllOrders);
router.post('/', createOrder);
router.get('/getUserOrders', getUserOrders);
router.get('/getOrder', getOrder);

module.exports = router;
