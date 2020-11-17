const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
  updateCurrentUser
} = require('../../controllers/users');

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateCurrentUser);

module.exports = router;
