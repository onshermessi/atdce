const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, createFundValidation, updateFundValidation } = require('../validators_mw.js');
const { getFunds, getFund, createFund, updateFund, deleteFund } = require('../controllers/funds-controller.js');

router.get('/', getFunds);
router.get('/:id', getFund);
router.post('/', createFundValidation, reqValidation, createFund);
router.put('/:id', updateFundValidation, reqValidation, updateFund);
router.delete('/:id', deleteFund);

module.exports = router;