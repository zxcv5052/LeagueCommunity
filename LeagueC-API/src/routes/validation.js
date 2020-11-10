const express = require('express');
const router = express.Router();
const validationController = require('../controllers/validation-controller');

router.post('/name', validationController.validEmail);

router.post('/email', validationController.validName);

module.exports = router;
