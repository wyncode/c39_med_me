const router = require('express').Router();
const {
  getOneMedicine,
  createMedicine,
  deleteMedicine,
  updateMedicine
} = require('../../controllers/medicines');

router.get('/', getOneMedicine);
router.post('/', createMedicine);
router.delete('/:id', deleteMedicine);
router.put('/:id', updateMedicine);

module.exports = router;
