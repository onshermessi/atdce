const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { reqValidation, EventValidation } = require('../validators_mw.js')
const { getEvents, getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/event-controller.js');

router.get('/', getEvents);
router.get('/:id', getEvent);
router.post('/', EventValidation, reqValidation,  createEvent);
router.put('/:id', EventValidation, reqValidation, updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;