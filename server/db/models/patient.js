const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');

const patientSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true
    },
    last_name: {
      type: String,
      required: true,
      trim: true
    },
    gender: {
      type: String,
      required: true,
      trim: true
    },
    dob: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    zip: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: Number,
      requiered: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot be password.');
        }
        if (value.length < 6) {
          throw new Error('Password must be at least 6 characters.');
        }
      }
    },
    avatar: {
      type: String
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
      }
    ]
  },
  {
    timestamps: true
  }
);

//Create a relationship between patient and Task
patientSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner'
});

// By naming this method toJSON we don't need to call it to run because the express response will do it for us.
patientSchema.methods.toJSON = function () {
  const patient = this;
  const patientObject = patient.toObject();
  delete patientObject.password;
  delete patientObject.tokens;
  return patientObject;
};
//creating an instance method called `generateAuthToken` we can use in the controller everytime a patient is created or signs in.
patientSchema.methods.generateAuthToken = async function () {
  const patient = this;
  const token = jwt.sign(
    {
      _id: patient._id.toString(),
      name: patient.name
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  patient.tokens = patient.tokens.concat({ token });
  await patient.save();
  return token;
};

// creating an instance method called `findByCredentials` that finds patient by email and password in our DB to login.
patientSchema.statics.findByCredentials = async (email, password) => {
  const patient = await patient.findOne({ email });
  if (!patient) throw new Error('patient not found');
  const isMatch = await bcrypt.compare(password, patient.password);
  if (!isMatch) throw new Error('Invalid password, try again.');
  return patient;
};

// This mongoose middleware will hash our patient's passwords whenever a patient is created or a patient password is updated.
patientSchema.pre('save', async function (next) {
  const patient = this;
  if (patient.isModified('password'))
    patient.password = await bcrypt.hash(patient.password, 8);
  next();
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
