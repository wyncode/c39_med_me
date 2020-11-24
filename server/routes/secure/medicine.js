const router = require('express').Router();
const {
  getOneMedicine,
  createMedicine,
  deleteMedicine,
  updateMedicine,
  getAllMedicine
} = require('../../controllers/medicines');

router.get('/:id', getOneMedicine);
router.post('/', createMedicine);
router.delete('/:id', deleteMedicine);
router.put('/:id', updateMedicine);
router.get('/', getAllMedicine);

module.exports = router;
