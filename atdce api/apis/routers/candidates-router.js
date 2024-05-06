const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, CandValidation } = require('../validators_mw.js')
const { getCandidates, getCandidate, createCandidate, updateCandidate, deleteCandidate } = require('../controllers/candidate-controller.js');

router.get('/', getCandidate);
router.get('/:id', getCandidate);
router.post('/', CandValidation, reqValidation, createCandidate);
router.put('/:id', CandValidation, reqValidation, updateCandidate);
router.delete('/:id', deleteCandidate);

module.exports = router;