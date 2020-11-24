const router = require('express').Router();
const {
  getAllUsers,
  logoutUser,
  getOneUser,
  deleteUser,
  updateCurrentUser,
  updatePassword,
  getCurrentUser
} = require('../../controllers/users');

router.get('/', getAllUsers);
router.get('/find/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/updateuser/:id', updateCurrentUser);
router.put('/updatepassword/:id', updatePassword);
router.post('/logout', logoutUser);
router.get('/me', getCurrentUser);
module.exports = router;
