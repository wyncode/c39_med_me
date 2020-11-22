const router = require('express').Router();
const {
  getAllUsers,
  logoutUser,
  getOneUser,
  deleteUser,
  updateCurrentUser
} = require('../../controllers/users');

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateCurrentUser);
router.post('/logout', logoutUser);

module.exports = router;
