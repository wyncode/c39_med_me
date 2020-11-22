const Medicine = require('../db/models/medicine');

const createMedicine = async (req, res) => {
  try {
    const medicine = new Medicine(req.body);
    await medicine.save();
    const user = await User.findById(req.body.userId);
    console.log(medicine);
    await user.push(medicine._id);
    await user.save();
    res.status(200).json({ medicine });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    await medicine.remove();
    await req.deleteMedicine.remove();
    res.json({ message: 'Medicine deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateMedicine = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'dosage', 'price', 'quantity'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const medicine = await Medicine.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!medicine)
      return res.status(404).json({ message: 'Medicine not found' });
    updates.forEach((update) => (medicine[update] = req.body[update]));
    await medicine.save();
    res.status(200).json(medicine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createMedicine, deleteMedicine, updateMedicine };
