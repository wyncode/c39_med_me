const router = require('express').Router(),
  {
    createPatient,
    loginPatient,
    requestPasswordReset,
    passwordRedirect
  } = require('../../controllers/patients');

router.post('/', createPatient);
router.post('/login', loginPatient);
router.get('/password', requestPasswordReset);
router.get('/password/:token', passwordRedirect);

module.exports = router;


