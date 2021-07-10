const express = require('express');

const router = express.Router();

const userController = require('../controllers/consumer-controller');

router.post('/user/login', userController.consumerLogin);
router.post('/user', userController.createConsumer);

module.exports = router;
