const Consumer = require('../models/consumer-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

createConsumer = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      sucess: false,
      error: 'You must provide a User details.',
    });
  }
  const saltRound = 10;
  const { email, firstName, lastName, password } = req.body;

  await bcrypt.hash(password, saltRound, (err, hash) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
        message: 'error hashing the password',
      });
    }
    const user = new Consumer({
      email,
      passwordHash: hash,
      firstName,
      lastName,
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "'User' is malformed",
      });
    }
    return user
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          email: user.email,
          message: 'User created!',
        });
      })
      .catch(err => {
        return res.status(400).json({
          success: false,
          error: err,
          message: err,
        });
      });
  });
};

/**
 * Login method, if user found it compare password, if password matches it signs the info in jsonWebToken then sends it back with user Info
 */

consumerLogin = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      sucess: false,
      error: 'You must provide a email and password to login.',
    });
  }
  const { email, password } = body;
  await Consumer.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
        message: 'error in user login',
      });
    } else if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }
    bcrypt.compare(password, user.passwordHash, (err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          error: err,
          message: 'error comparing the password',
        });
      } else if (result) {
        jwt.sign(
          {
            user: user.email,
          },
          'process.env.ACCESS_TOKEN_SECRET',
          { algorithm: 'HS256', expiresIn: '7200s' },
          (err, token) => {
            if (err) {
              return res.status(400).json({
                success: false,
                error: err,
                message: `error in user login  jwt.sign token ${err}`,
              });
            }
            res.send({
              token,
              user: {
                userInfo: [user.email, user.firstName, user.lastName],
              },
              role: 'user',
            });
          },
        );
      } else {
        return res.status(404).json({
          success: false,
          error: 'Invalid password',
        });
      }
    });
  });
};

module.exports = {
  createConsumer,
  consumerLogin,
};
