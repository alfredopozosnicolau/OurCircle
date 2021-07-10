const Business = require('../models/business-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

createBusiness = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      sucess: false,
      error: 'You must provide a Business details.',
    });
  }
  const saltRound = 10;
  const {
    email,
    businessName,
    password,
    buinessLocation,
    services,
    businessURL,
    phoneNumber,
    story,
    deals,
  } = req.body;

  await bcrypt.hash(password, saltRound, (err, hash) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
        message: 'error hashing the password',
      });
    }
    const business = new Business({
      email,
      passwordHash: hash,
      businessName,
      buinessLocation,
      services,
      businessURL,
      phoneNumber,
      story,
      deals,
    });
    if (!business) {
      return res.status(400).json({
        success: false,
        message: "'Business' is malformed",
      });
    }
    return business
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          business: business,
          message: 'Business created!',
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
 * Login method, if user found it compare password, if password matches it signs the info in jsonWebToken then sends it back with business Info
 */

businessLogin = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      sucess: false,
      error: 'You must provide a email and password to login.',
    });
  }
  const { email, password } = body;
  await Business.findOne({ email }, (err, business) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
        message: 'error in business login',
      });
    } else if (!business) {
      return res.status(404).json({
        success: false,
        error: 'Business not found',
      });
    }
    bcrypt.compare(password, business.passwordHash, (err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          error: err,
          message: 'error comparing the password',
        });
      } else if (result) {
        jwt.sign(
          {
            business: business.email,
          },
          'process.env.ACCESS_TOKEN_SECRET',
          { algorithm: 'HS256', expiresIn: '7200s' },
          (err, token) => {
            if (err) {
              return res.status(400).json({
                success: false,
                error: err,
                message: `error in business login  jwt.sign token ${err}`,
              });
            }
            res.send({
              token,
              business: {
                businessInfo: [business.email, business.businessName],
              },
              role: 'business',
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
  createBusiness,
  businessLogin,
};
