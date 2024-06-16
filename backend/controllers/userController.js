const { User } = require('../models');

// Example controller methods
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, familyName, email, password } = req.body;
    const newUser = await User.create({
      firstName,
      lastName,
      familyName,
      email,
      password
      // Add other fields as needed
    });
    res.status(201).json(newUser); // Respond with the created user object
  } catch (error) {
    next(error); // Pass error to the error handler middleware
  }
};
