const router = require('express').Router(),
  {
    createUser,

    loginUser,
    requestPasswordReset,
    passwordRedirect,
    getAllUsers
  } = require('../../controllers/users');

router.get('/', getAllUsers);
router.post('/me', createUser);
router.post('/login', loginUser);
router.get('/password', requestPasswordReset);
router.get('/password/:token', passwordRedirect);

module.exports = router;
