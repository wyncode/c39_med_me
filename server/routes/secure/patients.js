const router = require('express').Router();
const {
  getAllPatients,
  createPatient,
  getOnePatient,
  deletePatient,
  updatePatient
} = require('../controllers/patientsController');

router.get('/', getAllPatients);
router.get('/:id', getOnePatient);
router.post('/', createPatient);
router.delete('/:id', deletePatient);
router.put('/:id', updatePatient);

module.exports = router;
