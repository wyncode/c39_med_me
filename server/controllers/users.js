const User = require('../db/models/user'),
  {
    sendWelcomeEmail,
    sendCancellationEmail,
    forgotPasswordEmail
  } = require('../emails/index'),
  jwt = require('jsonwebtoken');

//Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get ONE User
const getOneUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Create a new User
const createUser = async (req, res) => {
  const { name, gender, dob, address, phone, email, password } = req.body;

  try {
    const createUser = new User({
      name,
      gender,
      dob,
      address,
      phone,
      email,
      password
    });
    sendWelcomeEmail(createUser.email, createUser.name);
    const token = await createUser.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.status(201).json(createUser);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Login a user
// ***********************************************//
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV === 'production'
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
// ***********************************************//
// User Password Reset
// ***********************************************//
const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.name },
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

//Update a User

const updateCurrentUser = async (req, res) => {
  const updates = Object.keys(req.body); // => ['email', 'name', 'password']
  const allowedUpdates = ['name', 'email', 'password', 'avatar'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'Invalid updates' });
  try {
    //Loop through each update, and change the value for the current deleteUser to the value coming from the body
    updates.forEach((update) => (req.user[update] = req.body[update]));
    //save the updated deleteUser in the db
    await req.user.save();
    //send the updated deleteUser as a response
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Logout a user
// ***********************************************//
const logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.cookies.jwt;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Delete a user
// ***********************************************//

const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    sendCancellationEmail(req.user.email, req.user.name);
    res.clearCookie('jwt');
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Upload avatar
// ***********************************************//

const uploadAvatar = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath
    );
    req.user.avatar = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//************************************ *//
// Update User Password
//************************************ *//

const updatePassword = async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.status(200).json({ message: 'password updated successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  loginUser,
  logoutUser,
  requestPasswordReset,
  passwordRedirect,
  deleteUser,
  updateCurrentUser,
  updatePassword,
  uploadAvatar
};
