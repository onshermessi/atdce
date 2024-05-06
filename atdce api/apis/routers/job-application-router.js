const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, CandAppValidation } = require('../validators_mw.js');
const { applicationSubmit } = require('../controllers/job-application-controller.js');

router.post('/', CandAppValidation, reqValidation, applicationSubmit);

module.exports = router;