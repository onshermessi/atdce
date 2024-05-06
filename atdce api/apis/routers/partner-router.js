const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, PartValidation } = require('../validators_mw.js');
const { getPartners, getPartner, createPartner, updatePartner, deletePartner } = require('../controllers/partner-controller.js');

router.get('/', getPartners);
router.get('/:id', getPartner);
router.post('/', PartValidation, reqValidation, createPartner);
router.put('/:id', PartValidation, reqValidation, updatePartner);
router.delete('/:id', deletePartner);

module.exports = router;