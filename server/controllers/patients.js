const User = require('../db/models/user');

//Get All Patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({ patients });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get ONE Patient
const getOnePatient = async (req, res) => {
  try {
    const patient = await Patient.findById({ _id: req.params.id }).populate(
      'exercises'
    );
    res.status(200).json({ patient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Create a new Patient
const createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ patient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a patient
const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete({ _id: req.params.id });
    await patient.remove();
    res.status(200).json({ message: 'User has been deleted.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Update a Patient
const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ _id: req.params.id });
    patient.name = req.body.name;
    patient.email = req.body.email;
    await patient.save();
    res.status(200).json({ patient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPatients,
  createPatient,
  getOnePatient,
  deletePatient,
  updatePatient
};
