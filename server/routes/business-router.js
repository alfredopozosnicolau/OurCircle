const express = require('express');

const router = express.Router();

const businessController = require('../controllers/business-controller');

router.post('/business/login', businessController.businessLogin);
router.post('/business', businessController.createBusiness);

module.exports = router;
