const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, VolAppValidation } = require('../validators_mw.js');
const { participationSubmit } = require('../controllers/event-participation-controller.js');

router.post('/', VolAppValidation, reqValidation, participationSubmit);

module.exports = router;