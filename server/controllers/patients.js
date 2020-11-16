const Patient = require('../db/models/patient'),
  {
    sendWelcomeEmail,
    sendCancellationEmail,
    forgotPasswordEmail
  } = require('../emails/index'),
  jwt = require('jsonwebtoken');

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
  const { name, email, password } = req.body;
  try {
    const createPatient = new createPatient({
      name,
      email,
      password
    });
    sendWelcomeEmail(createPatient.email, createPatient.name);
    const token = await createPatient.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.status(201).json(createPatient);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Login a patient
// ***********************************************//
const loginPatient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.findByCredentials(email, password);
    const token = await patient.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(patient);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
// ***********************************************//
// Patient Password Reset
// ***********************************************//
const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query;
    const deletePatient = await deletePatient.findOne({ email });
    if (!deletePatient) throw new Error('deletePatient not found');
    const token = jwt.sign(
      { _id: deletePatient._id.toString(), name: deletePatient.name },
      process.env.JWT_SECRET,
      { expiresIn: '10m' }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const passwordRedirect = async (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err) {
      if (err) throw new Error(err.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict'
    });
    res.redirect(process.env.URL + '/update-password');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// AUTHENTICATED REQUESTS

//Update a Patient

const updateCurrentPatient = async (req, res) => {
  const updates = Object.keys(req.body); // => ['email', 'name', 'password']
  const allowedUpdates = ['name', 'email', 'password', 'avatar'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'Invalid updates' });
  try {
    //Loop through each update, and change the value for the current PdeletePatient to the value coming from the body
    updates.forEach((update) => (req.patient[update] = req.body[update]));
    //save the updated PdeletePatient in the db
    await req.patient.save();
    //send the updated PdeletePatient as a response
    res.json(req.deletePatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Logout a patient
// ***********************************************//
exports.logoutPatient = async (req, res) => {
  try {
    req.patient.tokens = req.patient.tokens.filter((token) => {
      return token.token !== req.cookies.jwt;
    });
    await req.patient.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Delete a user
// ***********************************************//

const deletePatient = async (req, res) => {
  try {
    await req.deletePatient.remove();
    sendCancellationEmail(req.deletePatient.email, req.deletePatient.name);
    res.clearCookie('jwt');
    res.json({ message: 'Patient deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Upload avatar
// ***********************************************//

exports.uploadAvatar = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath
    );
    req.patient.avatar = response.secure_url;
    await req.patient.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//************************************ *//
// Update Patient Password
//************************************ *//

exports.updatePassword = async (req, res) => {
  try {
    req.patient.password = req.body.password;
    await req.patient.save();
    res.clearCookie('jwt');
    res.status(200).json({ message: 'password updated successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPatients,
  getOnePatient,
  createPatient,
  loginPatient,
  requestPasswordReset,
  passwordRedirect,
  deletePatient,
  updateCurrentPatient
};
