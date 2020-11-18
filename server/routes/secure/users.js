const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
  deleteUser,
  updateCurrentUser
} = require('../../controllers/users');

router.get('/me', getAllUsers);
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateCurrentUser);

module.exports = router;
