const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, VolValidation } = require('../validators_mw.js');
const { getVolunteers, getVolunteer, createVolunteer, updateVolunteer, deleteVolunteer } = require('../controllers/volunteer-controller.js');

router.get('/', getVolunteers);
router.get('/:id', getVolunteer);
router.post('/', VolValidation, reqValidation, createVolunteer);
router.put('/:id', VolValidation, reqValidation, updateVolunteer);
router.delete('/:id', deleteVolunteer);

module.exports = router;